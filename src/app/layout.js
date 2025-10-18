import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PasswordProvider, PasswordModal } from "../app/components/PasswordProtection";
import SmoothScrollProvider from "../app/components/SmoothScrollProvider";
import ScrollToTop from "../app/components/ScrollToTop"; // 👈 import your component

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "VALEN MASIJMO - Designer T-Shirts & Hoodies",
  description: "Silent luxury apparel by Valen Masijmo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PasswordProvider>
          <SmoothScrollProvider>
            {children}
            {/* 👇 Always visible scroll-to-top button (global) */}
            <ScrollToTop threshold={160} size={56} bottom="1.5rem" right="1.5rem" />
          </SmoothScrollProvider>

          {/* Keep modal above all other elements */}
          <PasswordModal />
        </PasswordProvider>
      </body>
    </html>
  );
}
