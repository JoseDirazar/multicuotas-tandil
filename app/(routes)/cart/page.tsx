"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import Summary from "./components/summary";
import CartItem from "./components/cart-item";




const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    
    <div>
      <Container>
        <div className="px-4 py-16 pt-3 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse items-center justify-center py-2 sm:flex-row sm:items-end sm:justify-between ">
            <h1 className="pt-5 text-3xl font-bold text-black dark:text-white">
              Carro de compras
            </h1>
          </div>
          <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <>
                  <p className="mb-5">
                    Carrito sin items.
                  </p>
                  <Link
                    href="/"
                    className="rounded-full bg-black p-3 text-neutral-200 hover:text-white dark:bg-neutral-200 dark:text-black dark:hover:bg-white"
                  >
                    Home
                  </Link>
                </>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>

  );
};

export default CartPage;
