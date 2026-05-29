"use client";

import { Menu, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({
  logo = {
    url: "/",
    src: "/proteq-logo.png",
    alt: "logo",
  },

  menu = [
    { title: "Home", url: "/" },
    { title: "Consultancy & Advisory", url: "/consultancy-advisory" },
    { title: "Learning", url: "/learning" },
    { title: "Systems", url: "/systems" },
    { title: "AI Investments", url: "/ai-investments" },
    { title: "Become a Partner", url: "/become-a-partner" },
    { title: "Contact", url: "/contact" },
  ],

  cta = {
    title: "Book a Free Demo",
    url: "/book-demo",
  },

  className
}) => {
  const pathname = usePathname();

  const isActive = (url) => {
    if (url === "/") {
      return pathname === "/";
    }
    return pathname === url;
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 1.02, 0.43, 1.01] }}
      className={cn("py-4 bg-white", className)}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex w-full">
          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <Link href={logo.url} className="flex items-center gap-2">
              <Image 
                src={logo.src} 
                width={160} 
                height={47} 
                alt={logo.alt} 
                priority 
              />
              {logo.title && (
                <span className="text-lg font-semibold tracking-tighter">
                  {logo.title}
                </span>
              )}
            </Link>
          </div>

          {/* Center: Navigation Menu */}
          <div className="flex items-center justify-center flex-grow mx-4">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                {menu.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-all duration-200 font-semibold",
                        isActive(item.url)
                          ? "bg-zinc-100 text-primary"
                          : "bg-transparent text-black hover:bg-zinc-50 hover:text-zinc-900"
                      )}
                    >
                      <Link className="font-medium!" href={item.url}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: CTA Button */}
          <div className="flex items-center shrink-0">
            <Button
              href={cta.url}
              glowingDot
              showArrow
            >
              {cta.title}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <Image 
                src={logo.src} 
                width={120} 
                height={35} 
                alt={logo.alt} 
                priority 
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Link href={logo.url} className="flex items-center gap-2">
                      <Image 
                        src={logo.src} 
                        width={120} 
                        height={35} 
                        alt={logo.alt} 
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <nav className="flex flex-col gap-1">
                    {menu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className={cn(
                          "text-base font-medium transition-colors py-2 px-3 rounded-md",
                          isActive(item.url)
                            ? "bg-zinc-100 text-primary font-semibold"
                            : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>

                  <div className="flex flex-col gap-3 mt-4">
                    <Button
                      href={cta.url}
                      glowingDot
                      showArrow
                      className="w-full"
                    >
                      {cta.title}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
