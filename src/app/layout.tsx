import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/base/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/base/Footer";
import Script from "next/script";
import { WhatsappDialogButton } from "@/components/base/WhatsappDialog";
const roboto = Poppins({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "800"],
  fallback: ["sans-serif"],
});
export const metadata: Metadata = {
  applicationName: "RWahab Movers UAE",
  robots: {
    "max-image-preview": "large",
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@RWahabMoversUAE",
    site: "RWahabMoversUAE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE">
      <Script
        strategy="afterInteractive"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="vJkQXO12D4BgqaV3I3C26Q"
        async
      />
      <body className={` ${roboto.className} antialiased`}>
        <svg
          aria-hidden={true}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="fixed-svg-background"
          viewBox="0 0 700 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              gradientTransform="rotate(150, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="ffflux-gradient"
            >
              <stop
                stopColor="hsl(315, 100%, 72%)"
                stopOpacity="1"
                offset="0%"
              ></stop>
              <stop
                stopColor="hsl(227, 100%, 50%)"
                stopOpacity="1"
                offset="100%"
              ></stop>
            </linearGradient>
            <filter
              id="ffflux-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.005 0.003"
                numOctaves="2"
                seed="215"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feGaussianBlur
                stdDeviation="20 0"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                edgeMode="duplicate"
                result="blur"
              ></feGaussianBlur>
              <feBlend
                mode="color-dodge"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                in2="blur"
                result="blend"
              ></feBlend>
            </filter>
          </defs>
          <rect
            width="700"
            height="700"
            fill="url(#ffflux-gradient)"
            filter="url(#ffflux-filter)"
          ></rect>
        </svg>
        <Navbar />
        <main className="">{children}</main>
        <WhatsappDialogButton />
        <Footer />
      </body>
    </html>
  );
}
