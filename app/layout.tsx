import "./globals.css";

import { Inter, Open_Sans, Oswald, Raleway } from "next/font/google";

import Header from "@/components/header";
import { GeistSans } from "geist/font/sans";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const openSan = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Todo App",
  description: "An example of Supabase, Auth and NextJS server actions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={(GeistSans.variable, openSan.className)}>
      <body className="sticky top-0 bg-background text-foreground">
        <Header />
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
