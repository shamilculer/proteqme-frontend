"use client";

import { useCallback, useState } from "react";

import DynamicPopupForm from "@/components/popups/DynamicPopupForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function CmsPopup({ popup, open, onOpenChange }) {
  const [isCalendarStep, setIsCalendarStep] = useState(false);
  const [isSuccessStep, setIsSuccessStep] = useState(false);

  const handleStepChange = useCallback(
    ({ isCalendarStep: calendarActive, isSuccessStep: successActive }) => {
      setIsCalendarStep(Boolean(calendarActive));
      setIsSuccessStep(Boolean(successActive));
    },
    [],
  );

  if (!popup) return null;

  const storageKey = popup.autoOpen?.storageKey || popup.slug;

  const handleSubmitted = () => {
    sessionStorage.setItem(`${storageKey}-submitted`, "1");
  };

  const handleOpenChange = (nextOpen) => {
    if (!nextOpen) {
      setIsCalendarStep(false);
      setIsSuccessStep(false);
    }
    onOpenChange?.(nextOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "gap-0 overflow-visible p-0 transition-[max-width]",
          isSuccessStep
            ? "max-h-[min(88vh,640px)] sm:max-w-lg"
            : isCalendarStep
              ? "max-h-[min(94vh,860px)] sm:max-w-2xl"
              : "max-h-[min(92vh,720px)] sm:max-w-lg",
        )}
      >
        <div className="max-h-[inherit] overflow-y-auto overflow-x-visible">
          <DynamicPopupForm
            embedded
            popup={popup}
            open={open}
            onSubmitted={handleSubmitted}
            onStepChange={handleStepChange}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
