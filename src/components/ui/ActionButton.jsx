"use client";

import { Button } from "@/components/ui/button";
import { usePopups } from "@/components/popups/PopupProvider";

export default function ActionButton({
  label,
  actionType = "link",
  href,
  popupSlug,
  popupId: _popupId,
  newTab,
  variant = "default",
  glowingDot = false,
  showArrow = false,
  className,
  onClick,
  ...props
}) {
  const { openPopup } = usePopups();

  if (!label) return null;

  if (actionType === "popup" && popupSlug) {
    return (
      <Button
        type="button"
        variant={variant}
        glowingDot={glowingDot}
        showArrow={showArrow}
        className={className}
        onClick={(event) => {
          onClick?.(event);
          openPopup(popupSlug, { manual: true });
        }}
        {...props}
      >
        {label}
      </Button>
    );
  }

  if (!href) return null;

  return (
    <Button
      href={href}
      variant={variant}
      glowingDot={glowingDot}
      showArrow={showArrow}
      className={className}
      onClick={onClick}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {label}
    </Button>
  );
}
