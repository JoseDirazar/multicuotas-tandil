"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useTheme } from "@/providers/theme-context";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";

export default function ThemeSwitch() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

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
      <Link
        href="/cart"
        className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[2px] border-black border-opacity-40 bg-black text-white shadow-2xl transition-all hover:scale-[1.15] active:scale-105 dark:bg-white dark:text-black"
      >
        {theme === "light" ? (
          <ShoppingCart size={18} color="white" className="text-black" />
        ) : (
          <ShoppingCart size={18} color="black" className="text-white" />
        )}
        <span className="ml-1 text-sm font-medium text-white dark:text-black">
          {cart.items.length}
        </span>
      </Link>
    </>
  );
}
