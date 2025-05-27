import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";
 

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duas & Ruqyah",
  description: "Hisnul Muslim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <LeftSidebar/>
        {/* <ASidebar/>   */}
        {children}
      </body>
    </html>
  );
}
