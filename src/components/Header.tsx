import Link from "next/link";
import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { Button } from "./ui/button";
import { navItems } from "@/lib/constants";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container h-16 flex items-center justify-between">
        <nav className="flex items-center justify-between w-full">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            DataPro Solutions
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-8">
            <Button
              href="#contact"
              variant="default"
              className="ml-4 hidden md:flex"
            >
              Get Started
            </Button>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
