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
        className="fixed bottom-[90px] right-[1.2rem] flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full sm:hover:scale-[1.15] active:scale-110 border-[2px] border-[#35B721] border-opacity-90 bg-green-800"
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
        className="fixed bottom-5 right-5 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border-[2px] border-black border-opacity-40 bg-black text-white shadow-2xl transition-all sm:hover:scale-[1.15] active:scale-110 dark:bg-white dark:text-black"
      >
        {theme === "light" ? (
          <ShoppingCart size={23} color="white" />
        ) : (
          <ShoppingCart size={23} color="black" />
        )}
        <span className="ml-1 text-sm font-bold text-white dark:text-black">
          {cart.items.length}
        </span>
      </Link>
    </>
  );
}
