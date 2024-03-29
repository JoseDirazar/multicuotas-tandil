"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-neutral-200">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900 dark:text-white">
          <Currency value={data?.price} />
          <p className="font-light mt-3">{data?.description}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-neutral-200">
            Categoria:
          </h3>
          <div className="dark:text-neutral-200">{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-neutral-200">
            Color:
          </h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600 dark:border-neutral-200  "
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 dark:bg-white dark:text-neutral-900"
        >
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
