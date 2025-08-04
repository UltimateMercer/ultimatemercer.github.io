import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { BaseLayout } from "@/components/base-layout";
import { FiltersDefs } from "@/components/filters-defs";
import { Html } from "@/components/html";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ultimate Mercer",
  description: "Personal website of Julian Silva da Cunha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} bg-custom-brown dark:bg-[#252525] antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BaseLayout>{children}</BaseLayout>
          <div
            id="padding"
            className="lg:block hidden w-full h-full p-[8px] fixed z-[2] top-0 left-0 pointer-events-none"
          >
            <div className="w-full h-full border border-[#121212] dark:border-custom-brown"></div>
          </div>
          <div
            id="frame"
            className="lg:block hidden w-full h-screen fixed top-0 right-0 z-[3] background-frame "
          ></div>
          <FiltersDefs />
        </ThemeProvider>
      </body>
    </Html>
  );
}
