import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-base font-medium whitespace-nowrap tracking-wide transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Standard Shadcn variants
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-300 rounded-full cursor-pointer",

        secondary: "bg-secondary text-secondary-foreground hover:bg-proteq-dark active:scale-[0.98] hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-300 rounded-full cursor-pointer",

        outline:
          "border-white/20 text-white hover:bg-white/5 bg-transparent border active:scale-[0.98] hover:scale-[1.02] shadow-sm transition-all duration-300 rounded-full cursor-pointer",

        "outline-light":
          "border border-zinc-300 text-foreground bg-transparent hover:bg-zinc-50 active:scale-[0.98] hover:scale-[1.02] shadow-sm transition-all duration-300 rounded-full cursor-pointer",

        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",

        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",

        link: "text-primary underline-offset-4 hover:underline",
        
        white: "bg-white text-zinc-950 hover:bg-zinc-100 active:scale-[0.98] hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-300 rounded-full cursor-pointer",
      },
      size: {
        // Standard Shadcn sizes
        default:
          "h-10 gap-1.5 px-4 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1 rounded-[min(var(--radius-md),10px)] px-3 text-sm font-medium in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-11 gap-1.5 px-4 text-lg font-medium has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10",

        // Brand Unified Pill sizes
        pill: "h-12 px-5 text-lg font-medium tracking-wide",
        "pill-badge": "h-12 pl-5 pr-2 py-2 text-lg font-medium tracking-wide",
      },
    },
    compoundVariants: [
      {
        variant: ["default", "secondary", "white", "outline", "outline-light"],
        size: "default",
        class: "h-12 text-lg font-medium tracking-wide",
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  href,
  glowingDot = false,
  showArrow = false,
  arrowDirection = "up-right",
  icon: IconProp,
  iconPosition = "right",
  children,
  ...props
}) {
  const isPill = ["default", "secondary", "white", "outline", "outline-light"].includes(variant);
  
  // Dynamically determine the size based on badge presence
  let computedSize = size;
  if (isPill && size === "default") {
    computedSize = (showArrow || IconProp) ? "pill-badge" : "pill";
  }

  // Choose component tag
  let Comp = asChild ? Slot.Root : "button";
  let extraProps = {};

  if (href) {
    Comp = Link;
    extraProps = { href };
  }

  // Render components inside children
  const hasRightBadge = showArrow || (IconProp && iconPosition === "right");
  const hasLeftBadge = glowingDot || (IconProp && iconPosition === "left");

  const renderIcon = () => {
    if (!IconProp) return null;
    if (React.isValidElement(IconProp)) return IconProp;
    const Icon = IconProp;
    return <Icon className="size-4 transition-all duration-300 group-hover/button:translate-x-0.5" />;
  };

  const content = (
    <>
      {hasLeftBadge && (
        <span className="flex items-center gap-2 mr-2 shrink-0">
          {glowingDot && (
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            </span>
          )}
          {iconPosition === "left" && renderIcon()}
        </span>
      )}

      {/* Children text / element */}
      <span className="tracking-wide">
        {children}
      </span>

      {hasRightBadge && (
        <span className="ml-3 shrink-0">
          {showArrow && (
            <span className={cn(
              "flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 shrink-0 group-hover/button:scale-105",
              variant === "white"
                ? "bg-zinc-950 text-zinc-100 group-hover/button:rotate-45 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                : variant === "secondary" || variant === "outline-light"
                  ? "bg-primary text-primary-foreground group-hover/button:rotate-45 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                  : "bg-proteq-dark text-white group-hover/button:rotate-45 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            )}>
              {arrowDirection === "right" ? (
                <ArrowRight className="size-4" />
              ) : (
                <ArrowUpRight className="size-4" />
              )}
            </span>
          )}
          {iconPosition === "right" && !showArrow && renderIcon()}
        </span>
      )}
    </>
  );

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={computedSize}
      className={cn(buttonVariants({ variant, size: computedSize, className }))}
      {...extraProps}
      {...props}
    >
      {asChild ? children : content}
    </Comp>
  );
}

export { Button, buttonVariants }

