"use client";
import { Billboard as BillboardType } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const images = [
    { img: data?.imageUrl, id: data.id, props: { priority: true } },
    ...data.images.map(function (img) {
      return { img: img.url, id: img.id, props: {} };
    }),
  ];

  const swiperStyles = {
    "--swiper-navigation-color": "white",
    color: "white",
    "--swiper-pagination-color": "#ffffff",
    "--swiper-pagination-bullet-inactive-color": "#ffffff",
  } as React.CSSProperties;

  return (
    <div className=" rounded-xl p-4 sm:p-6 lg:p-8">
      <Swiper
        className=" rounded-xl shadow-lg shadow-black/30 dark:shadow-neutral-500/50"
        style={swiperStyles}
        navigation
        pagination={{ type: "bullets" }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay
      >
        {images.map((banner) => (
          <SwiperSlide key={banner.id}>
            <>
              <Image
                src={banner.img}
                alt="Belli Deportes banners"
                width={1620}
                height={800}
                className="relative bg-cover aspect-[2.4/1]"
                {...banner.props}
              />
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Billboard;
