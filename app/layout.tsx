import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Against the Tide",
  description: "Ahoy! Joinin’ me to discover abstractions and learnin’ how systems, concurrency, and databases really work",
    icons: [
        {
            url: '/favicon.ico',
            sizes: 'any'
        }
    ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="max-w-3xl m-auto font-mono">
            <div className="py-20 px-1 md:px-0">
                <div className="flex items-center flex-col gap-1">
                    <Image src="/ship.png" height={250} width={250} alt={"a pirate ship"} />
                    <h1 className="font-sans font-black text-4xl tracking-tighter">against the tide</h1>
                    <h2 className="text-xs text-center max-w-sm tracking-tight">Ahoy! Board the vessel and onward to see the dark machinery beneath the waves.</h2>
                </div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
