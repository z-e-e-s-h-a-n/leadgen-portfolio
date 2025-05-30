import Link from "next/link";
import React from "react";
import { navItems } from "@/lib/constants";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden cursor-pointer">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="py-12 px-8 space-y-8">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <li>
                <Link href={item.href} className="text-muted-foreground py-2">
                  {item.label}
                </Link>
              </li>
            </SheetClose>
          ))}
        </ul>
        <Button className="w-full" href="#contact">
          Get Started
        </Button>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
