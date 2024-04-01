"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

export default function Header() {
  const activeRoute = usePathname();
  return (
    <header className="flex justify-between px-3 sm:px-9 h-14 items-center border-b border-white/10">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => {
            return (
              <li
                key={route.path}
                className={clsx(
                  "hover:text-white relative transition flex items-center",
                  {
                    "text-white": activeRoute === route.path,
                    "text-white/50": activeRoute !== route.path,
                  }
                )}
              >
                <Link href={route.path}>{route.name}</Link>
                {activeRoute === route.path && (
                  <motion.div
                    layoutId="header-active-link"
                    className="bg-accent h-1 w-full absolute bottom-0"
                  ></motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
