import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

const calSans = LocalFont({
  src: "./fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: {
    default: "rdnzda.com",
    template: "%s | rdnzda.com",
  },
  description: "Akunzada Redean full stack developper.",
  openGraph: {
    title: "rdnzda.com",
    description:
      "Akunzada Redean full stack developper.",
    url: "https://rdnzda.com",
    siteName: "rdnzda.com",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "fr-FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "rdnzda",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={` bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
        {children}
      </body>
    </html>
  );
}
