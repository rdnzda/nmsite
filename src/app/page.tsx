import Link from "next/link";
import React from "react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden"> {/* Ajout de 'relative' ici */}
      <nav className="absolute bottom-0 mb-4 animate-fade-in w-full"> {/* Modifications ici */}
        <ul className="flex items-center justify-center md:gap-4 gap-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:hidden animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1
        className="py-3.5 px-0.5 z-10 text-5xl text-white bg-black cursor-default animate-title font-display sm:text-8xl md:text-8xl whitespace-nowrap bg-clip-text font-bold tracking-tight drop-shadow-md transition-all duration-1000"
      >
        rdnzda
      </h1>

      <div className="hidden w-screen h-px animate-glow md:hidden animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="sm:my-4 my-2 mx-5 text-center animate-fade-in">
        <h2 className="text-xs sm:text-sm text-zinc-500 ">
          Hi my name is Redean Akunzada, I am a fullstack web developer.
        </h2>
      </div>
    </div>
  );
}
