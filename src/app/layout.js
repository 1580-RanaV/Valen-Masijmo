import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PasswordProvider, PasswordModal } from "../app/components/PasswordProtection";
import SmoothScrollProvider from "../app/components/SmoothScrollProvider";
import ScrollToTop from "../app/components/ScrollToTop";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "VALEN MASIJMO - Designer Apparel",
  description: "Subtle luxury apparel by Valen Masijmo",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicons and manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PasswordProvider>
          <SmoothScrollProvider>
            {children}
            <ScrollToTop threshold={160} size={56} bottom="1.5rem" right="1.5rem" />
          </SmoothScrollProvider>
          <PasswordModal />
        </PasswordProvider>
      </body>
    </html>
  );
}
