import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Solutions & Lead Generation Services",
  description:
    "Professional lead generation, data mining, and market research services to help your business grow. Expert in B2B, B2C, LinkedIn Sales Navigator, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
