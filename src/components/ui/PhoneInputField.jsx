"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PhoneInput, {
  getCountryCallingCode,
  isValidPhoneNumber,
} from "react-phone-number-input";
import flags from "country-flag-icons/react/3x2";
import { ChevronDown, Search } from "lucide-react";
import "react-phone-number-input/style.css";

import { cn } from "@/lib/utils";
import { toE164Phone } from "@/lib/phone";

function CountryFlag({ country, title, className }) {
  if (!country) return null;
  const Flag = flags[country];
  if (!Flag) return null;
  return (
    <Flag
      title={title || country}
      className={cn(
        "h-3.5 w-5 shrink-0 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)]",
        className,
      )}
    />
  );
}

function getPortalTarget(triggerEl) {
  if (!triggerEl || typeof document === "undefined") return null;
  // Portal into the dialog content when present so focus trap still allows
  // the search input to focus, while escaping the inner overflow scroller.
  return (
    triggerEl.closest("[data-slot='dialog-content']") || document.body
  );
}

function getMenuStyle(triggerEl, portalTarget) {
  const triggerRect = triggerEl.getBoundingClientRect();
  const width = Math.min(320, window.innerWidth - 24);
  const spaceBelow = window.innerHeight - triggerRect.bottom - 12;
  const openUp = spaceBelow < 280 && triggerRect.top > spaceBelow;

  if (portalTarget === document.body) {
    let left = triggerRect.left;
    if (left + width > window.innerWidth - 12) {
      left = Math.max(12, window.innerWidth - width - 12);
    }

    return {
      position: "fixed",
      top: openUp ? undefined : triggerRect.bottom + 6,
      bottom: openUp ? window.innerHeight - triggerRect.top + 6 : undefined,
      left,
      width,
      zIndex: 100,
      pointerEvents: "auto",
    };
  }

  // Dialog content uses transform, so absolute offsets are relative to it.
  const portalRect = portalTarget.getBoundingClientRect();
  let left = triggerRect.left - portalRect.left;
  if (left + width > portalRect.width - 12) {
    left = Math.max(12, portalRect.width - width - 12);
  }

  return {
    position: "absolute",
    top: openUp
      ? undefined
      : triggerRect.bottom - portalRect.top + 6,
    bottom: openUp
      ? portalRect.bottom - triggerRect.top + 6
      : undefined,
    left,
    width,
    zIndex: 100,
    pointerEvents: "auto",
  };
}

/**
 * Custom country select with SVG flags + search.
 * Portals outside overflow scrollers, but into the dialog content when
 * inside a modal so the search field remains focusable.
 */
function CountrySelectWithFlags({
  value,
  onChange,
  options,
  disabled,
  readOnly,
  onFocus,
  onBlur,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [menuStyle, setMenuStyle] = useState(null);
  const [portalTarget, setPortalTarget] = useState(null);
  const rootRef = useRef(null);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const selected = useMemo(
    () => options.find((option) => option.value === value) || options[0],
    [options, value],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return options.filter((option) => {
      if (option.divider) return false;
      if (!q) return true;
      const label = option.label?.toLowerCase() || "";
      const code = option.value?.toLowerCase() || "";
      let calling = "";
      try {
        if (option.value) calling = `+${getCountryCallingCode(option.value)}`;
      } catch {
        calling = "";
      }
      return label.includes(q) || code.includes(q) || calling.includes(q);
    });
  }, [options, query]);

  useLayoutEffect(() => {
    if (!open || !rootRef.current) {
      setMenuStyle(null);
      setPortalTarget(null);
      return undefined;
    }

    const triggerEl = rootRef.current;
    const target = getPortalTarget(triggerEl);
    setPortalTarget(target);

    const updatePosition = () => {
      if (!target) return;
      setMenuStyle(getMenuStyle(triggerEl, target));
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      const inTrigger = rootRef.current?.contains(target);
      const inMenu =
        menuRef.current?.contains(target) ||
        (target instanceof Element &&
          Boolean(target.closest("[data-phone-country-menu]")));

      if (!inTrigger && !inMenu) {
        setOpen(false);
        setQuery("");
        onBlur?.();
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
        onBlur?.();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    const focusTimer = window.setTimeout(() => {
      searchRef.current?.focus();
    }, 0);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open, onBlur]);

  const menu =
    open && menuStyle && portalTarget
      ? createPortal(
          <div
            ref={menuRef}
            data-phone-country-menu=""
            style={menuStyle}
            className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_18px_50px_rgba(13,13,20,0.18)]"
            onPointerDown={(event) => event.stopPropagation()}
          >
            <div className="border-b border-zinc-100 p-2">
              <div className="relative">
                <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-zinc-400" />
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onPointerDown={(event) => event.stopPropagation()}
                  placeholder="Search country"
                  className="h-9 w-full rounded-lg border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-8 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>
            </div>

            <ul
              role="listbox"
              className="max-h-56 overflow-y-auto overscroll-contain py-1"
            >
              {filtered.length === 0 ? (
                <li className="px-3 py-2.5 text-sm text-zinc-500">
                  No countries found
                </li>
              ) : (
                filtered.map((option) => {
                  const isActive = option.value === value;
                  let callingCode = "";
                  try {
                    if (option.value) {
                      callingCode = `+${getCountryCallingCode(option.value)}`;
                    }
                  } catch {
                    callingCode = "";
                  }

                  return (
                    <li
                      key={option.value || "ZZ"}
                      role="option"
                      aria-selected={isActive}
                    >
                      <button
                        type="button"
                        className={cn(
                          "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",
                          isActive
                            ? "bg-primary/10 text-foreground"
                            : "text-zinc-700 hover:bg-zinc-50",
                        )}
                        onMouseDown={(event) => {
                          event.preventDefault();
                          onChange(option.value || undefined);
                          setOpen(false);
                          setQuery("");
                          onBlur?.();
                        }}
                      >
                        <CountryFlag
                          country={option.value}
                          title={option.label}
                        />
                        <span className="min-w-0 flex-1 truncate">
                          {option.label}
                        </span>
                        {callingCode ? (
                          <span className="shrink-0 tabular-nums text-zinc-400">
                            {callingCode}
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>,
          portalTarget,
        )
      : null;

  return (
    <div ref={rootRef} className="PhoneInputCountry relative">
      <button
        type="button"
        disabled={disabled || readOnly}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={selected?.label || "Select country"}
        onFocus={onFocus}
        onClick={() => {
          if (disabled || readOnly) return;
          setOpen((prev) => !prev);
          if (!open) onFocus?.();
        }}
        className="flex h-full items-center gap-1.5 border-0 bg-transparent px-2.5 py-0 outline-none"
      >
        <CountryFlag country={value} title={selected?.label} />
        <ChevronDown
          className={cn(
            "size-3.5 text-zinc-500 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {menu}
    </div>
  );
}

/**
 * International phone input with SVG country flags in the closed
 * control and in the open country list.
 */
export default function PhoneInputField({
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder = "Phone number",
  disabled = false,
  autoComplete = "tel",
  defaultCountry = "AE",
  className,
  inputClassName,
  "aria-invalid": ariaInvalid,
}) {
  return (
    <div
      className={cn(
        "PhoneInputField flex h-11 w-full items-stretch overflow-visible rounded-xl border border-zinc-300 bg-white shadow-xs transition-[border-color,box-shadow]",
        "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
        ariaInvalid &&
          "border-red-400 focus-within:border-red-400 focus-within:ring-red-400/20",
        disabled && "cursor-not-allowed opacity-60",
        className,
      )}
    >
      <PhoneInput
        id={id}
        international
        countryCallingCodeEditable={false}
        defaultCountry={defaultCountry}
        flags={flags}
        countrySelectComponent={CountrySelectWithFlags}
        value={value || undefined}
        onChange={(next) => {
          // Always persist E.164 (e.g. +9198…) — never country-only values.
          if (!next) {
            onChange?.("");
            return;
          }
          const e164 = toE164Phone(next, defaultCountry) || next;
          onChange?.(e164);
        }}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        numberInputProps={{
          name,
          className: cn(
            "PhoneInputInput h-11 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400",
            inputClassName,
          ),
          "aria-invalid": ariaInvalid,
        }}
        className="PhoneInputRoot flex h-11 w-full items-center overflow-visible"
      />
    </div>
  );
}

export { isValidPhoneNumber };
