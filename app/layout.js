import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['100','200','300','400','500','600','700','800', '900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlinks - URL Shortener",
  description: "Bitlinks helps you to shorten your urls easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-purple-50`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
