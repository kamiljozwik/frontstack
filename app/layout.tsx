import { Outfit } from "next/font/google";

import "./globals.scss";
import { Header } from "./components/header/Header";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Frontstack",
  description: "Blog o programowaniu i technologiach webowych",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={outfit.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
