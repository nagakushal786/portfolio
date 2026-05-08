"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" }
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center bg-primary border-l-0 shadow-2xl">
        {/* logo */}
        <div className="mb-16 text-center">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Kushal<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname
                    ? "text-accent font-medium text-2xl border-b-2 border-accent pb-1"
                    : "text-white/70 text-xl font-light hover:text-accent hover:border-b-2 hover:border-accent pb-1"
                } capitalize transition-all duration-300`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
        {/* hire me button */}
        <div className="mt-16 flex justify-center">
          <SheetClose asChild>
            <Link href="/contact">
              <button className="bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent-hover transition-all text-base shadow-lg shadow-accent/20">
                Let&apos;s Connect
              </button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
