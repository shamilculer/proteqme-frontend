"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { navigateToHash } from "@/lib/scrollToHash";

const RevealReadyContext = createContext(true);

export function useRevealReady() {
  return useContext(RevealReadyContext);
}

function resetScrollPosition() {
  if (typeof window === "undefined") return;
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function isSamePageHashLink(url) {
  return (
    url.pathname === window.location.pathname &&
    Boolean(url.hash) &&
    url.search === window.location.search
  );
}

function isInternalNavigationLink(anchor) {
  if (!anchor?.href || anchor.target === "_blank" || anchor.hasAttribute("download")) {
    return false;
  }

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return false;
  if (isSamePageHashLink(url)) return false;

  return url.pathname !== window.location.pathname || url.search !== window.location.search;
}

/**
 * Resets scroll before paint on route changes and remounts page content so
 * scroll-triggered motion does not fire from the previous scroll position.
 */
export default function PageShell({ children }) {
  const pathname = usePathname();
  const [shellKey, setShellKey] = useState(pathname);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }

    const hasHash = typeof window !== "undefined" && Boolean(window.location.hash);

    if (!hasHash) {
      resetScrollPosition();
    }

    setShellKey(pathname);

    if (!hasHash) {
      const frame = requestAnimationFrame(() => resetScrollPosition());
      return () => cancelAnimationFrame(frame);
    }

    return undefined;
  }, [pathname]);

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest("a[href]");
      if (!anchor) return;

      if (isInternalNavigationLink(anchor)) {
        resetScrollPosition();
        return;
      }

      try {
        const url = new URL(anchor.href, window.location.href);
        if (!isSamePageHashLink(url)) return;

        event.preventDefault();
        navigateToHash(url.hash);
      } catch {
        // ignore malformed hrefs
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return undefined;

    const id = window.location.hash;
    const frame = requestAnimationFrame(() => {
      navigateToHash(id, { behavior: "auto" });
      window.setTimeout(() => navigateToHash(id), 120);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, shellKey]);

  return (
    <RevealReadyContext.Provider value={true}>
      <div key={shellKey} className="flex flex-1 flex-col">
        {children}
      </div>
    </RevealReadyContext.Provider>
  );
}
