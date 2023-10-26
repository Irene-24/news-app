import "./globals.css";

import type { Metadata } from "next";
import { Roboto, Source_Code_Pro } from "next/font/google";
import DesktopNav from "@/components/navigation/DesktopNav";
import TabNav from "@/components/navigation/TabNav";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
const mono = Source_Code_Pro({
  weight: ["600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  description: "Get the latest news worldwide",
  title: `Aster News: Headlines`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${mono.variable}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0768b5" />
        <meta name="msapplication-TileColor" content="#f4f9f8" />
        <meta name="theme-color" content="#f4f9f8" />
      </head>
      <body className={roboto.className}>
        <div className="grid gap-[1.5%] grid-cols-1 md:grid-cols-[80px_minmax(0,1fr)] lg:grid-cols-[minmax(250px,0.2fr)_minmax(0,1fr)] min-h-screen">
          <aside className="">
            <DesktopNav />
            <TabNav />
          </aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
