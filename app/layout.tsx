import { Inter } from "next/font/google";

import "./globals.scss";
import { Header } from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pl">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
