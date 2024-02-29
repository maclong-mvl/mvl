import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}