"use client";

import Link from "next/link";

import { Logo } from "../logo/Logo";
import { ExternalLink } from "../externalLink/ExternalLink";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

const links = [
  { href: "/blog", label: "Posty" },
  { href: "/shorts", label: "Shorts" },
  { href: "/news", label: "Newsy" },
  { href: "/biblioteki", label: "Biblioteki" },
  { href: "/zarobki", label: "Zarobki" },
  { href: "https://kursy.frontstack.pl/", label: "Kursy🎉" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="mt-6 md:mt-0 h-24 flex flex-col md:flex-row items-center gap-6 md:gap-12 justify-between">
      <div className="">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul className="p-0 flex justify-center flex-wrap gap-x-4 md:gap-x-8 list-none m-0 text-md md:text-xl">
          {links.map(({ href, label }) => {
            const Comp = href.startsWith("http") ? ExternalLink : Link;
            return (
              <li key={`${href}${label}`}>
                <Comp
                  className={cn(
                    "text-white hover:no-underline text-base font-light",
                    {
                      "border-b-2 border-red-500 font-semibold":
                        pathname.includes(href),
                    }
                  )}
                  href={href}
                >
                  {label}
                </Comp>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
