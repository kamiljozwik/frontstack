import Link from "next/link";

import { Logo } from "../logo/Logo";
import { ExternalLink } from "../externalLink/ExternalLink";

const links = [
  { href: "/blog", label: "Posty" },
  { href: "/shorts", label: "Shorts" },
  { href: "/frontendowka", label: "Newsy" },
  { href: "/biblioteki", label: "Biblioteki" },
  { href: "/zarobki", label: "Zarobki" },
  { href: "https://kursy.frontstack.pl/", label: "Kursy🎉" },
];

export const Header = () => {
  return (
    <header className="mt-6 md:mt-0 h-24 flex justify-center md:justify-between items-center">
      <div className="mt-6 md:m-0 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="p-0 flex justify-center flex-wrap gap-x-4 md:gap-x-8 list-none m-0 text-md md:text-xl">
            {links.map(({ href, label }) => {
              const Comp = href.startsWith("http") ? ExternalLink : Link;
              return (
                <li key={`${href}${label}`}>
                  <Comp className="text-white hover:no-underline" href={href}>
                    {label}
                  </Comp>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="extra"></div>
    </header>
  );
};
