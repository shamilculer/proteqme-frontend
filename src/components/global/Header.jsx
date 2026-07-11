"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import ActionButton from "@/components/ui/ActionButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import CmsIcon from "@/components/ui/CmsIcon";
import Image from "next/image";
import Link from "next/link";

const mobileNavLinkClass = (active) =>
  cn(
    "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
    active
      ? "bg-zinc-100 font-semibold text-primary"
      : "text-zinc-700 hover:bg-zinc-50"
  );

const NavLink = ({ href, label, newTab, className, onClick }) => {
  const props = {
    href,
    className,
    onClick,
    ...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };

  return <Link {...props}>{label}</Link>;
};

const Header = ({
  logo = {
    url: "/",
    src: "/proteq-logo.png",
    srcWhite: "/proteq-white.png",
    alt: "Proteq logo",
  },
  navItems = [],
  cta = null,
  className,
}) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (url) => {
    if (url === "/") return pathname === "/";
    return pathname === url || pathname.startsWith(`${url}/`);
  };

  const isDropdownActive = (items = []) => items.some((item) => isActive(item.href));

  const linkClass = (active) =>
    cn(
      "inline-flex h-12 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200",
      isScrolled
        ? active
          ? "bg-white/10 text-primary"
          : "text-white/90 hover:bg-white/5 hover:text-white"
        : active
          ? "bg-zinc-100 text-primary"
          : "text-black hover:bg-zinc-50 hover:text-zinc-900"
    );

  const logoSrc = isScrolled ? logo.srcWhite : logo.src;
  const hasNav = navItems.length > 0;
  const showMobileMenu = hasNav || Boolean(cta);

  const renderDesktopNavItem = (item, index) => {
    if (item.type === "dropdown") {
      const active = isDropdownActive(item.items);

      return (
        <NavigationMenuItem key={`dropdown-${index}-${item.label}`}>
          <NavigationMenuTrigger className={cn(linkClass(active), "gap-1 bg-transparent")}>
            {item.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[450px] gap-0 p-3 md:grid-cols-1">
              {item.items.map((child, childIndex) => (
                  <li key={`${child.href}-${child.title}-${childIndex}`}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={child.href}
                        target={child.newTab ? "_blank" : undefined}
                        rel={child.newTab ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4 rounded-xl p-4 bg-transparent transition-all duration-200 hover:bg-muted/60"
                      >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/8 transition-all duration-200 group-hover:bg-primary/15 group-hover:scale-110">
                          <CmsIcon
                            lucide={child.lucide || child.icon}
                            src={child.src}
                            alt={child.alt}
                            className="size-7 text-primary transition-transform duration-200 group-hover:scale-110"
                            strokeWidth={1.75}
                          />
                        </div>
                        <div>
                          <p className="text-base font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                            {child.title}
                          </p>
                          {child.description ? (
                            <p className="text-sm leading-[1.25em]! text-muted-foreground transition-colors duration-200 group-hover:text-foreground/70">
                              {child.description}
                            </p>
                          ) : null}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    {childIndex < item.items.length - 1 ? (
                      <div className="mx-4 border-b border-border" />
                    ) : null}
                  </li>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={`link-${index}-${item.href}`}>
        <NavigationMenuLink asChild className={linkClass(isActive(item.href))}>
          <NavLink href={item.href} label={item.label} newTab={item.newTab} />
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  const renderMobileNavItem = (item, index) => {
    if (item.type === "dropdown") {
      const active = isDropdownActive(item.items);

      return (
        <Accordion
          key={`mobile-dropdown-${index}-${item.label}`}
          type="single"
          collapsible
          defaultValue={active ? `dropdown-${index}` : undefined}
          className="w-full"
        >
          <AccordionItem value={`dropdown-${index}`} className="border-b border-zinc-200/80">
            <AccordionTrigger
              className={cn(
                "px-3 py-3 text-base font-medium hover:bg-zinc-50 hover:no-underline",
                active ? "font-semibold text-primary" : "text-zinc-800"
              )}
            >
              {item.label}
            </AccordionTrigger>
            <AccordionContent className="px-1 pb-2">
              <ul className="space-y-1">
                {item.items.map((child, childIndex) => (
                    <li key={`${child.href}-${child.title}-${childIndex}`}>
                      <Link
                        href={child.href}
                        target={child.newTab ? "_blank" : undefined}
                        rel={child.newTab ? "noopener noreferrer" : undefined}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors",
                          isActive(child.href)
                            ? "bg-zinc-100 font-semibold text-primary"
                            : "text-zinc-700 hover:bg-zinc-50"
                        )}
                      >
                        <div className="icon-ghost-pink flex size-9 shrink-0 items-center justify-center rounded-lg">
                          <CmsIcon
                            lucide={child.lucide || child.icon}
                            src={child.src}
                            alt={child.alt}
                            className="size-4 text-primary"
                            strokeWidth={1.75}
                          />
                        </div>
                        <span className="text-sm font-medium">{child.title}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    }

    return (
      <NavLink
        key={`mobile-link-${index}-${item.href}`}
        href={item.href}
        label={item.label}
        newTab={item.newTab}
        className={mobileNavLinkClass(isActive(item.href))}
        onClick={() => setMobileOpen(false)}
      />
    );
  };

  return (
    <header
      className={cn(
        "top-0 z-50 w-full py-4 transition-all duration-300",
        isScrolled ? "sticky nav-sticky-glass border-b border-white/10" : "bg-white border-b border-zinc-200/70",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="hidden w-full items-center justify-between lg:flex" aria-label="Primary">
          <Link href={logo.url} className="flex shrink-0 items-center gap-2">
            <Image src={logoSrc} width={160} height={47} alt={logo.alt} priority />
          </Link>

          {hasNav ? (
            <div className="mx-4 flex flex-grow items-center justify-center">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-1">
                  {navItems.map(renderDesktopNavItem)}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          ) : (
            <div className="flex-grow" />
          )}

          {cta ? (
            <ActionButton
              {...cta}
              className="btn-cta-nav shrink-0"
            />
          ) : null}
        </nav>

        <div className="flex items-center justify-between lg:hidden">
          <Link href={logo.url} className="flex items-center gap-2">
            <Image
              src={logoSrc}
              width={148}
              height={43}
              alt={logo.alt}
              priority
              className="h-auto w-[148px]"
            />
          </Link>

          {showMobileMenu ? (
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open navigation menu"
                  className={cn(
                    "size-11 shrink-0 shadow-sm",
                    isScrolled
                      ? "border-white/20! bg-white/10! text-white! hover:bg-white/15!"
                      : "border-zinc-300! bg-white! text-foreground! hover:bg-zinc-50!"
                  )}
                >
                  <Menu className="size-5" strokeWidth={2} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full max-w-sm overflow-y-auto border-l border-zinc-200 bg-white text-foreground shadow-2xl sm:max-w-sm [&>button]:text-zinc-600 [&>button]:hover:bg-zinc-100"
              >
                <SheetHeader className="border-b border-zinc-200/80 pb-4">
                  <SheetTitle className="text-left">
                    <Link
                      href={logo.url}
                      className="flex items-center gap-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Image
                        src={logo.src}
                        width={148}
                        height={43}
                        alt={logo.alt}
                        className="h-auto w-[148px]"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 px-4 pb-6 pt-2">
                  {hasNav ? (
                    <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                      {navItems.map(renderMobileNavItem)}
                    </nav>
                  ) : null}

                  {cta ? (
                    <ActionButton
                      {...cta}
                      className="btn-cta-nav w-full"
                      onClick={() => setMobileOpen(false)}
                    />
                  ) : null}
                </div>
              </SheetContent>
            </Sheet>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
