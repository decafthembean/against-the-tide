import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Caslon_Text, Montserrat, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caslon = Libre_Caslon_Text({
    variable: "--font-caslon",
    subsets: ["latin"],
    weight: ["400", "700"]
})

const baskerville = Libre_Baskerville({
    variable: "--font-baskerville",
    subsets: ["latin"]
})

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Against the Tide",
  description: "Ahoy! Board the vessel and onward to see the dark machinery beneath the waves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caslon.variable} ${baskerville.variable} ${montserrat.variable} antialiased`}
      >
        <header>
          <nav className="max-w-3xl m-auto font-mono">
            <div className="py-20 px-2 md:px-0">
                <div className="flex justify-center items-center flex-col gap-2">
                    <Image src="/image.webp" height={250} width={250} alt={"a ship venturing to the deep sea"} />
                    <h1 className="font-sans text-3xl tracking-tight">Contre Vents et Marée</h1>
                    <h2 className="text-xs text-center max-w-sm leading-3">Ahoy! Board the vessel and onward to see<br/>the dark machinery beneath the waves.</h2>
                    <h3 className="text-xs text-center max-w-sm italic">(Written by <span className="underline underline-offset-2 tracking-tight"><Link href={"/"} >Kha Tran</Link></span>)</h3>
                </div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
