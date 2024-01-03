"use client";

import { useTheme } from "@/providers/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Link
        href="https://wa.me/+5492494280688"
        target="_blank"
        className="fixed bottom-20 right-[1.2rem] flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[2px] border-[#35B721] border-opacity-90 bg-green-800"
      >
        <Image
          src="/f3535dc3f95e71506f7c80755610176c.png"
          width={30}
          height={30}
          alt="Whatsapp logo"
        />
      </Link>
      <button
        className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[2px] border-black border-opacity-40 bg-black text-white shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-white"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <BsMoon className="rounded-full bg-black text-xl font-bold text-white" />
        ) : (
          <BsSun className="text-xl dark:bg-white dark:text-black" />
        )}
      </button>
    </>
  );
}
