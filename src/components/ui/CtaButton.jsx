"use client";

import ActionButton from "@/components/ui/ActionButton";

export default function CtaButton({ cta, ctaLabel, ctaHref, ...props }) {
  const action =
    cta ||
    (ctaLabel
      ? {
          label: ctaLabel,
          actionType: "link",
          href: ctaHref,
        }
      : null);

  if (!action?.label) return null;

  return <ActionButton {...action} {...props} />;
}
