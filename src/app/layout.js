import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { PasswordProvider, PasswordModal } from "../app/components/PasswordProtection";
import SmoothScrollProvider from "../app/components/SmoothScrollProvider";
import ScrollToTop from "../app/components/ScrollToTop";
import GlobalImageGuards from "../app/components/GlobalImageGuards"; // 🔒 add this line

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

        {/* Intempt — stub initialised before page becomes interactive */}
        <Script
          id="intempt-stub"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(w){if(w.intempt&&(w.intempt._isReal||w.intempt._isStub))return;var q=[],p=[],i=1;function e(m,a){q.push({method:m,args:a,timestamp:Date.now()})}function v(m){return function(){e(m,[].slice.call(arguments))}}function r(m,f){return function(){return e(m,[].slice.call(arguments)),f}}function n(){var a=[].slice.call(arguments),d=i++;e("recommendation",a);var s={id:d};return p.push(s),new Promise(function(t,c){s.resolve=t,s.reject=c})}w.intempt={_isStub:!0,_queue:q,_pendingPromises:p,getProfileId:r("getProfileId",void 0),optIn:v("optIn"),optOut:v("optOut"),isUserOptIn:r("isUserOptIn",!0),identify:v("identify"),group:v("group"),track:v("track"),record:v("record"),alias:v("alias"),consent:v("consent"),productAdd:v("productAdd"),productOrdered:v("productOrdered"),productView:v("productView"),logOut:v("logOut"),recommendation:n}}(window);`,
          }}
        />

        {/* Intempt — main SDK */}
        <Script
          id="intempt-sdk"
          src="https://cdn.staging.intempt.com/v1/intempt.min.js?organization=cetaphil&project=valenmasijmo&source=1735707871308984320&key=10c42ca5f48144c9b30afa7f9ae3f46a.fbb23ae7c8364d3fae657b40304a3efc"
          strategy="afterInteractive"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 🔒 Global image protection (no right-click or drag on images) */}
        <GlobalImageGuards />

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
