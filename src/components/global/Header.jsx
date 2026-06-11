"use client";

import { useEffect, useState } from "react";
import { Menu, ShieldCheck, GraduationCap, Layers } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
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
import { pageEnterTransition } from "@/lib/motion-presets";
import Image from "next/image";
import Link from "next/link";

const solutionsPillars = [
  {
    title: "Consultancy & Advisory",
    description: "AML frameworks, gap analysis, and regulatory readiness.",
    href: "/consultancy-advisory",
    icon: ShieldCheck,
  },
  {
    title: "Learning",
    description: "Webinars, courses, and certification preparation.",
    href: "/learning",
    icon: GraduationCap,
  },
  {
    title: "Systems",
    description: "AML screening, monitoring, and RegTech implementation.",
    href: "/systems",
    icon: Layers,
  },
];

const menu = [
  { title: "Home", url: "/" },
  { title: "AI Investments", url: "/ai-investments" },
  { title: "Become a Partner", url: "/become-a-partner" },
  { title: "Contact", url: "/contact" },
];

const mobileNavLinkClass = (active) =>
  cn(
    "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
    active
      ? "bg-zinc-100 font-semibold text-primary"
      : "text-zinc-700 hover:bg-zinc-50"
  );

const Header = ({
  logo = {
    url: "/",
    src: "/proteq-logo.png",
    alt: "Proteq logo",
  },
  cta = {
    title: "Book a Free Demo",
    url: "/contact",
  },
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

  const isSolutionsActive = solutionsPillars.some((p) => isActive(p.href));

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

  const triggerClass = cn(
    linkClass(isSolutionsActive),
    "gap-1 bg-transparent"
  );

  return (
    <motion.header
      initial={{ y: -12, opacity: 0, filter: "blur(6px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={pageEnterTransition(0)}
      className={cn(
        "top-0 z-50 w-full py-4 transition-all duration-300",
        isScrolled ? "sticky nav-sticky-glass border-b border-white/10" : "bg-white border-b border-zinc-200/70",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="hidden w-full items-center justify-between lg:flex" aria-label="Primary">
          <Link href={logo.url} className="flex shrink-0 items-center gap-2">
            <Image
              src={isScrolled ? "/proteq-white.png" : logo.src}
              width={160}
              height={47}
              alt={logo.alt}
              priority
            />
          </Link>

          <div className="mx-4 flex flex-grow items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={linkClass(isActive("/"))}>
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[450px] gap-0 p-3 md:grid-cols-1">
                      {solutionsPillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                          <li key={pillar.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={pillar.href}
                                className="group flex items-start gap-4 rounded-xl p-4 bg-transparent transition-all duration-200 hover:bg-muted/60"
                              >
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/8 transition-all duration-200 group-hover:bg-primary/15 group-hover:scale-110">
                                  <Icon className="size-7 text-primary transition-transform duration-200 group-hover:scale-110" strokeWidth={1.75} />
                                </div>
                                <div>
                                  <p className="text-base font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                                    {pillar.title}
                                  </p>
                                  <p className="text-sm leading-[1.25em]! text-muted-foreground transition-colors duration-200 group-hover:text-foreground/70">
                                    {pillar.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                            {idx < solutionsPillars.length - 1 && (
                              <div className="mx-4 border-b border-border" />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {menu.slice(1).map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild className={linkClass(isActive(item.url))}>
                      <Link href={item.url}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Button
            href={cta.url}
            showArrow
            className="btn-cta-nav shrink-0"
          >
            {cta.title}
          </Button>
        </nav>

        <div className="flex items-center justify-between lg:hidden">
          <Link href={logo.url} className="flex items-center gap-2">
            <Image
              src={isScrolled ? "/proteq-white.png" : logo.src}
              width={148}
              height={43}
              alt={logo.alt}
              priority
              className="h-auto w-[148px]"
            />
          </Link>

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
                <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                  <Link
                    href="/"
                    className={mobileNavLinkClass(isActive("/"))}
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>

                  <Accordion
                    type="single"
                    collapsible
                    defaultValue={isSolutionsActive ? "solutions" : undefined}
                    className="w-full"
                  >
                    <AccordionItem
                      value="solutions"
                      className="border-b border-zinc-200/80"
                    >
                      <AccordionTrigger
                        className={cn(
                          "px-3 py-3 text-base font-medium hover:bg-zinc-50 hover:no-underline",
                          isSolutionsActive
                            ? "font-semibold text-primary"
                            : "text-zinc-800"
                        )}
                      >
                        Solutions
                      </AccordionTrigger>
                      <AccordionContent className="px-1 pb-2">
                        <ul className="space-y-1">
                          {solutionsPillars.map((pillar) => {
                            const Icon = pillar.icon;
                            return (
                              <li key={pillar.href}>
                                <Link
                                  href={pillar.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors",
                                    isActive(pillar.href)
                                      ? "bg-zinc-100 font-semibold text-primary"
                                      : "text-zinc-700 hover:bg-zinc-50"
                                  )}
                                >
                                  <div className="icon-ghost-pink flex size-9 shrink-0 items-center justify-center rounded-lg">
                                    <Icon
                                      className="size-4 text-primary"
                                      strokeWidth={1.75}
                                    />
                                  </div>
                                  <span className="text-sm font-medium">
                                    {pillar.title}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {menu.slice(1).map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className={mobileNavLinkClass(isActive(item.url))}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                <Button
                  href={cta.url}
                  showArrow
                  className="btn-cta-nav w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {cta.title}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
