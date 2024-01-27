import Link from "next/link";

import { Logo } from "../logo/Logo";
import { ExternalLink } from "../externalLink/ExternalLink";

export const Header = () => {
  return (
    <header className="mt-6 md:mt-0 h-24 flex justify-center md:justify-between items-center">
      <div className="mt-6 md:m-0 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="p-0 flex justify-center flex-wrap gap-x-8 list-none m-0 text-xl">
            <li>
              <Link className="text-white hover:no-underline" href="/blog">
                Posty
              </Link>
            </li>
            <li>
              <Link className="text-white hover:no-underline" href="/shorts">
                Shorts
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:no-underline"
                href="/frontendowka"
              >
                Newsy
              </Link>
            </li>
            <li>
              <Link className="text-white hover:no-underline" href="/zarobki">
                Zarobki
              </Link>
            </li>
            <li>
              <ExternalLink
                className="text-white hover:no-underline"
                href="https://kursy.frontstack.pl/"
              >
                Kursy🎉
              </ExternalLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="extra"></div>
    </header>
  );
};
