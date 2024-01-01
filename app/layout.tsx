import { Outfit } from "next/font/google";

import "./globals.scss";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://www.frontstack.pl"),
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
        <Footer />
      </body>
    </html>
  );
}
