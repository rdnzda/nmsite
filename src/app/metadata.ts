import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "rdnzda.com",
    template: "%s | rdnzda.com",
  },
  description: "Akunzada Redean full stack developer.",
  openGraph: {
    title: "rdnzda.com",
    description: "Akunzada Redean full stack developer.",
    url: "https://rdnzda.com",
    siteName: "rdnzda.com",
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