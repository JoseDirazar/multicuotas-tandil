"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Link from "next/link";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();


  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div

      className="group h-full cursor-pointer space-y-4 rounded-xl hover:scale-110 transition-transform bg-stone-300 p-3 shadow-[0_25px_25px_rgba(0,0,0,0.25)] dark:bg-stone-900"
    >
      {/* <div className="h-auto w-auto rounded-xl border-none p-[1px] dark:bg-gradient-to-br dark:from-red-600 dark:via-blue-500 dark:to-yellow-500"> */}
      {/* Image & actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          sizes="(max-width: 768px) 567px, 567px, (max-width: 1200px) 275px, 275px"
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 transition lg:opacity-0 lg:group-hover:opacity-100">
          <div className="hidden justify-center gap-x-6 group-hover:flex">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className=" group-hover:animate-bounce/100">
        <Link href={`/product/${data?.id}`} className="text-sm text-gray-500 dark:text-neutral-400 group-hover:underline group-hover:text-sky-500">
        <p className="text-lg font-semibold text-black dark:text-white">{data.name}</p>
          {data.category?.name}
        </Link>
      </div>
      {/* Price & Reiew */}
      <div className="flex flex-col justify-between">
        <Currency value={data?.price} />
        <p className="mt-2 font-light">{data?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
