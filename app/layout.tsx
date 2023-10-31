import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Source_Code_Pro, Shantell_Sans } from "next/font/google";
import DesktopNav from "@/components/navigation/DesktopNav";
import TabNav from "@/components/navigation/TabNav";
import Container from "@/components/Container";
import JumpToTopOrBottom from "@/components/navigation/JumpToTopOrBottom";
import MobileNav from "@/components/navigation/MobileNav";
import RTKProvider from "@/components/providers/RTKProvider";
import JokesWrapper from "@/components/jokes/JokesWrapper";
import DesktopJokes from "@/components/jokes/DesktopJokes";
import DesktopConverter from "@/components/converter/DesktopConverter";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const mono = Source_Code_Pro({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const shan = Shantell_Sans({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shan",
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
    <html
      lang="en"
      className={`${roboto.variable} scroll-smooth ${mono.variable} ${shan.variable}`}
    >
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
        <RTKProvider>
          <Container>
            <div className="md:grid md:gap-[1.5%] grid-cols-1 md:grid-cols-[80px_minmax(0,1fr)] lg:grid-cols-[minmax(250px,0.2fr)_minmax(0,1fr)] min-h-screen">
              <aside className="">
                <MobileNav jokesComp={<JokesWrapper />} />
                <TabNav jokesComp={<JokesWrapper />} />
                <DesktopNav />
              </aside>

              <main className="grid gap-y-4 gap-x-[1.5%] grid-cols-1 lg:grid-cols-[minmax(min(100%,100px),1fr)_minmax(min(100%,250px),0.2fr)]">
                {children}

                {/* <div>
                <JumpToTopOrBottom />

                <JumpToTopOrBottom />
              </div> */}

                <section className="top-0 p-2 space-y-2 lg:sticky lg:h-screen">
                  <DesktopJokes />
                  <DesktopConverter />
                </section>
              </main>
            </div>
          </Container>
        </RTKProvider>
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
      </body>
    </html>
  );
}
