"use client";

import { Menu, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
                        "group inline-flex h-12 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 font-semibold",
                        isActive(item.url)
                          ? "bg-zinc-100 text-primary"
                          : "bg-transparent text-black hover:bg-zinc-50 hover:text-zinc-900"
                      )}
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: CTA Button */}
          <div className="flex items-center shrink-0">
            <Button
              asChild
              className="rounded-full bg-zinc-950 text-zinc-50 h-13 pl-4 pr-1.5 py-1.5 flex items-center gap-3 border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group/cta cursor-pointer"
            >
              <Link href={cta.url}>
                {/* Glowing green dot */}
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
                </span>
                
                {/* Text */}
                <span className="font-semibold text-sm tracking-wide">
                  {cta.title}
                </span>
                
                {/* Circular Arrow Badge */}
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-800 text-zinc-100 transition-all duration-300 group-hover/cta:rotate-45 shrink-0">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
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
                      asChild
                      className="w-full rounded-full bg-zinc-950 text-zinc-50 hover:bg-zinc-900 h-11 pl-5 pr-2 py-2 flex items-center justify-between border-0 shadow-md group/cta-mobile cursor-pointer"
                    >
                      <Link href={cta.url}>
                        <div className="flex items-center gap-2.5">
                          {/* Glowing green dot */}
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
                          </span>
                          
                          {/* Text */}
                          <span className="font-semibold text-sm tracking-wide">
                            {cta.title}
                          </span>
                        </div>
                        
                        {/* Circular Arrow Badge */}
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-zinc-100 transition-all duration-300 group-hover/cta-mobile:rotate-45 shrink-0">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </Link>
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
