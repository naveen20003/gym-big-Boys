import type { Metadata } from "next";
import { Inter, Gajraj_One, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const interFont = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const gajrajOne = Gajraj_One({
  weight: '400', // Gajraj One only comes in a single Regular weight
  subsets: ['latin'],
  variable: '--font-gajraj-one', // Using lowercase standard for utility names
});

export const metadata: Metadata = {
  title: "Big Boys",
  description: "we help to reach your goals",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", interFont.variable, gajrajOne.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
