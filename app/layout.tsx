import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aster News",
  description: "Get the latest news worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid gap-[1.5%] grid-cols-1 md:grid-cols-[90px_minmax(0,1fr)] lg:grid-cols-[minmax(250px,0.2fr)_minmax(0,1fr)] min-h-screen">
          <aside className="bg-accent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius
              magnam quod nulla recusandae non consectetur a dignissimos qui quo
              id aliquid delectus, cupiditate eveniet assumenda deleniti
              aspernatur animi inventore.
            </p>
          </aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
