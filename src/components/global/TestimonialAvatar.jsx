"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/utilities/getInitials";

function formatSubtitle({ name, role, company }) {
  if (name) {
    if (role && company) return `${role} at ${company}`;
    return role || company || "";
  }

  return company || "";
}

export default function TestimonialAvatar({ testimonial }) {
  const displayName = testimonial.name || testimonial.role || "Client";
  const subtitle = formatSubtitle(testimonial);
  const initials = getInitials(testimonial.name || testimonial.role);

  return (
    <div className="flex items-center gap-4 border-t border-zinc-100 pt-4">
      <Avatar className="size-11 border border-zinc-200">
        {testimonial.avatar ? (
          <AvatarImage src={testimonial.avatar} alt={displayName} />
        ) : null}
        <AvatarFallback className="bg-primary/10 text-sm font-bold text-primary">
          {initials}
        </AvatarFallback>
      </Avatar>

      <div>
        <h4 className="text-sm font-bold tracking-tight text-foreground">
          {displayName}
        </h4>
        {subtitle ? (
          <p className="text-xs font-medium text-zinc-500">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
