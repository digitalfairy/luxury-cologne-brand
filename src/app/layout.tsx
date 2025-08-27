import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";


import { Footer } from "@/components/Footer";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const gambarino = localFont({
  src: "./gambarino.woff2",
  display: "swap",
  variable: "--font-gambarino",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${raleway.variable} ${gambarino.variable} antialiased`}
      >
        <body className="bg-neutral-900 text-white">
          <NavBar />
          <main className="pt-14 md:pt-16">{children}</main>
          <Footer />
        </body>
      </html>
  );
}
