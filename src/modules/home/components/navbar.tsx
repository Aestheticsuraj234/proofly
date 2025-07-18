"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import ThemeToggle from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="h-16 border rounded-2xl max-w-6xl w-full mx-auto flex flex-row items-center justify-between px-4 py-6 bg-background/80 backdrop-blur-sm mt-5 shadow-md">
      <div className="text-lg font-bold flex items-center mr-4">
        <Image src={"/logo.svg"} alt="Proofly Logo" width={32} height={32} className="inline-block mr-2 rounded-md" />
        <Link href="/">Proofly</Link>
      </div>
      
      <NavigationMenu>
        <div className="flex space-x-1">
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "dark:bg-transparent")}>
            <Link href="/features">Features</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "dark:bg-transparent")}>
            <Link href="/creators">For Creators</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "dark:bg-transparent")}>
            <Link href="/showcase">Showcase</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "dark:bg-transparent")}>
            <Link href="/pricing">Pricing</Link>
          </NavigationMenuLink>
          
        </div>
      </NavigationMenu>

      <div className="flex items-center space-x-3">
        <ThemeToggle />
        <Button variant="brandSecondary" asChild>
          <Link href="/guest">Continue as Guest</Link>
        </Button>
        <Button  variant={"brand"} asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;