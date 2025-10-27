import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/Footer";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const sfCompactDisplay = localFont({
  src: [{
    path: "./fonts/SfCompactDisplayMediumVF.otf",
    weight: "500",
    style: "normal",
  },
  {
    path: "./fonts/SfCompactDisplayThinVF.otf",
    weight: "400",
    style: "normal",
  }],
  variable: "--font-sf-compact-display",
  weight: "400 500",
});

export const metadata: Metadata = {
  title: "Easy Pay - Seamless Payment Solutions",
  description: "Your one-stop solution for seamless payments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sfCompactDisplay.variable} antialiased scroll-smooth`}
      >
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="font-inter space-y-16 sm:space-y-28">
          {children}
        </main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
