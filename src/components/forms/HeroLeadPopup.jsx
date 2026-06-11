"use client";

import { useCallback, useEffect, useRef } from "react";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const INITIAL_DELAY_MS = 5_000;
const REOPEN_DELAY_MS = 5 * 60_000;
const MAX_AUTO_OPENS = 2;
const SUBMITTED_KEY = "proteq-hero-lead-submitted";
const AUTO_COUNT_KEY = "proteq-hero-lead-auto-count";

function hasSubmitted() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SUBMITTED_KEY) === "1";
}

function getAutoOpenCount() {
  if (typeof window === "undefined") return MAX_AUTO_OPENS;
  return Number.parseInt(sessionStorage.getItem(AUTO_COUNT_KEY) || "0", 10);
}

function canAutoOpen() {
  return !hasSubmitted() && getAutoOpenCount() < MAX_AUTO_OPENS;
}

function recordAutoOpen() {
  sessionStorage.setItem(AUTO_COUNT_KEY, String(getAutoOpenCount() + 1));
}

export default function HeroLeadPopup({ open, onOpenChange, manualOpenRef }) {
  const initialTimerRef = useRef(null);
  const reopenTimerRef = useRef(null);
  const lastOpenWasAutoRef = useRef(false);

  const clearInitialTimer = () => {
    if (initialTimerRef.current) {
      clearTimeout(initialTimerRef.current);
      initialTimerRef.current = null;
    }
  };

  const clearReopenTimer = () => {
    if (reopenTimerRef.current) {
      clearTimeout(reopenTimerRef.current);
      reopenTimerRef.current = null;
    }
  };

  const openAutomatically = useCallback(() => {
    if (!canAutoOpen()) return;
    recordAutoOpen();
    lastOpenWasAutoRef.current = true;
    onOpenChange(true);
  }, [onOpenChange]);

  useEffect(() => {
    if (!canAutoOpen()) return;

    initialTimerRef.current = setTimeout(openAutomatically, INITIAL_DELAY_MS);

    return () => {
      clearInitialTimer();
      clearReopenTimer();
    };
  }, [openAutomatically]);

  useEffect(() => {
    if (!open) return;

    if (manualOpenRef?.current) {
      manualOpenRef.current = false;
      lastOpenWasAutoRef.current = false;
      clearInitialTimer();
      clearReopenTimer();
    }
  }, [open, manualOpenRef]);

  const scheduleReopen = () => {
    if (!canAutoOpen() || !lastOpenWasAutoRef.current) return;

    clearReopenTimer();
    reopenTimerRef.current = setTimeout(openAutomatically, REOPEN_DELAY_MS);
  };

  const handleOpenChange = (next) => {
    if (next) {
      clearInitialTimer();
      clearReopenTimer();
    }

    onOpenChange(next);

    if (!next && !hasSubmitted()) {
      scheduleReopen();
    }
  };

  const handleSubmitted = () => {
    sessionStorage.setItem(SUBMITTED_KEY, "1");
    clearInitialTimer();
    clearReopenTimer();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[min(92vh,720px)] gap-0 overflow-y-auto p-0 sm:max-w-md">
        <HeroLeadForm embedded open={open} onSubmitted={handleSubmitted} />
      </DialogContent>
    </Dialog>
  );
}
