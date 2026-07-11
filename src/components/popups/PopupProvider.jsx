"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

import CmsPopup from "@/components/popups/CmsPopup";
import { pathnameToPageSlug } from "@/lib/page-slug";

const PopupContext = createContext({
  popupsBySlug: {},
  openPopup: (_slug, _options) => {},
  closePopup: () => {},
  activePopupSlug: null,
  manualOpenRef: { current: false },
});

function hasSubmitted(storageKey) {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(`${storageKey}-submitted`) === "1";
}

function getAutoOpenCount(storageKey) {
  if (typeof window === "undefined") return Number.MAX_SAFE_INTEGER;
  return Number.parseInt(sessionStorage.getItem(`${storageKey}-auto-count`) || "0", 10);
}

function canAutoOpen(popup) {
  const storageKey = popup.autoOpen?.storageKey || popup.slug;
  const max = popup.autoOpen?.maxAutoOpens ?? 2;
  return !hasSubmitted(storageKey) && getAutoOpenCount(storageKey) < max;
}

function popupMatchesPage(popup, pageSlug) {
  if (!popup?.autoOpen?.enabled) return false;

  const configuredPages = popup.autoOpen.pageSlugs || [];
  if (configuredPages.length === 0) return false;

  return configuredPages.includes(pageSlug);
}

function recordAutoOpen(storageKey) {
  sessionStorage.setItem(`${storageKey}-auto-count`, String(getAutoOpenCount(storageKey) + 1));
}

export function usePopups() {
  return useContext(PopupContext);
}

export function PopupProvider({ popups = [], children }) {
  const pathname = usePathname();
  const currentPageSlug = pathnameToPageSlug(pathname);
  const [activePopupSlug, setActivePopupSlug] = useState(null);
  const manualOpenRef = useRef(false);
  const lastOpenWasAutoRef = useRef(false);
  const reopenTimerRef = useRef(null);

  const popupsBySlug = useMemo(() => {
    return popups.reduce((acc, popup) => {
      if (popup?.slug) acc[popup.slug] = popup;
      return acc;
    }, {});
  }, [popups]);

  const openPopup = useCallback((slug, options = {}) => {
    if (!slug || !popupsBySlug[slug]) return;
    manualOpenRef.current = Boolean(options.manual);
    if (options.manual) lastOpenWasAutoRef.current = false;
    setActivePopupSlug(slug);
  }, [popupsBySlug]);

  const closePopup = useCallback(() => {
    setActivePopupSlug(null);
  }, []);

  const autoPopup = useMemo(
    () => popups.find((popup) => popupMatchesPage(popup, currentPageSlug)),
    [popups, currentPageSlug],
  );

  useEffect(() => {
    if (!autoPopup || !canAutoOpen(autoPopup)) return;

    const storageKey = autoPopup.autoOpen.storageKey || autoPopup.slug;
    const initialTimer = window.setTimeout(() => {
      recordAutoOpen(storageKey);
      lastOpenWasAutoRef.current = true;
      setActivePopupSlug(autoPopup.slug);
    }, autoPopup.autoOpen.initialDelayMs ?? 5000);

    return () => {
      window.clearTimeout(initialTimer);
      if (reopenTimerRef.current) window.clearTimeout(reopenTimerRef.current);
    };
  }, [autoPopup, currentPageSlug]);

  useEffect(() => {
    if (!activePopupSlug || manualOpenRef.current) return;

    const active = popupsBySlug[activePopupSlug];
    if (!active || !popupMatchesPage(active, currentPageSlug)) {
      setActivePopupSlug(null);
      lastOpenWasAutoRef.current = false;
    }
  }, [activePopupSlug, currentPageSlug, popupsBySlug]);

  const handlePopupOpenChange = useCallback(
    (next) => {
      if (next) {
        if (reopenTimerRef.current) {
          window.clearTimeout(reopenTimerRef.current);
          reopenTimerRef.current = null;
        }
        return;
      }

      const closingPopup = activePopupSlug ? popupsBySlug[activePopupSlug] : null;
      const wasAuto = lastOpenWasAutoRef.current;
      closePopup();

      if (
        closingPopup &&
        popupMatchesPage(closingPopup, currentPageSlug) &&
        wasAuto &&
        canAutoOpen(closingPopup)
      ) {
        const storageKey = closingPopup.autoOpen.storageKey || closingPopup.slug;
        reopenTimerRef.current = window.setTimeout(() => {
          recordAutoOpen(storageKey);
          lastOpenWasAutoRef.current = true;
          setActivePopupSlug(closingPopup.slug);
        }, closingPopup.autoOpen.reopenDelayMs ?? 300000);
      }
    },
    [activePopupSlug, closePopup, currentPageSlug, popupsBySlug],
  );

  const activePopup = activePopupSlug ? popupsBySlug[activePopupSlug] : null;

  return (
    <PopupContext.Provider
      value={{
        popupsBySlug,
        openPopup,
        closePopup,
        activePopupSlug,
        manualOpenRef,
      }}
    >
      {children}
      {activePopup ? (
        <CmsPopup
          popup={activePopup}
          open={Boolean(activePopupSlug)}
          onOpenChange={handlePopupOpenChange}
        />
      ) : null}
    </PopupContext.Provider>
  );
}
