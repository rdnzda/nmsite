'use client'; // Le composant utilise usePathname, donc il doit être un Client Component

import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
import { usePathname } from 'next/navigation';

// Chargement des polices
const calSans = LocalFont({
  src: "./fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-inter",
});

// Composant principal
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname(); // Obtenir le chemin actuel

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}>
        <main className="flex flex-col items-center justify-center min-w-full min-h-full overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
          <div className="hidden w-screen h-px animate-glow md:hidden animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="hidden w-screen h-px animate-glow md:hidden animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            
            {/* Afficher la navigation seulement si ce n'est pas la page principale */}
            {pathname !== '/' && <Navigation />}
            
            {children}
          </div>
        </main>   
      </body>
    </html>
  );
}
