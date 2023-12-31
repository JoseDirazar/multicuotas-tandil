"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import DisclaimerPage from "./disclaimer";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Tooltip } from "react-tooltip";

import validateUserData from "./validateUserData";

import "react-tooltip/dist/react-tooltip.css";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [formData, setFormData] = useState({
    lastname: "",
    name: "",
    phone: "",
    address: "",
  });
  const [errorInUserData, setErrorsInUserData] = useState({
    lastname: "error",
    name: "error",
    phone: "error",
    address: "error",
  });

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Pago completado.", {
        className: "dark:bg-neutral-800 dark:text-white",
      });
      removeAll();
    }

    if (searchParams.get("pending")) {
      toast("Pago pendiente.", {
        icon: "⚠️",
        className: "dark:bg-neutral-800 dark:text-white",
      });
    }

    if (searchParams.get("failure")) {
      toast.error("Algo salio mal.", {
        className: "dark:bg-neutral-800 dark:text-white",
      });
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const handleFormData = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrorsInUserData(
      validateUserData({
        ...formData,
        [event.target.name]: event.target.value,
      }),
    );
  };

  const onCheckout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkoutML`,
        {
          productIds: items.map((item) => item.id),
          payer: formData,
        },
      );
      console.log(response);
      window.location = response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 dark:bg-neutral-900 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-neutral-300">
        Sumario:
      </h2>
      <label
        htmlFor="name"
        className="text-md mt-5 block font-medium text-gray-900 dark:text-neutral-300"
      >
        Nombre:
      </label>

      {errorInUserData.name ? (
        <input
          id="name"
          className="text-md mt-2 rounded border border-gray-300 px-3 py-2 font-medium text-gray-900 focus:border-neutral-500 focus:outline-none  dark:bg-black dark:text-neutral-200"
          name="name"
          value={formData.name}
          onChange={handleFormData}
        />
      ) : (
        <input
          id="name"
          className="text-md mt-2 rounded border border-gray-300 px-3 py-2 font-medium text-gray-900 focus:border-green-700 focus:outline-none dark:bg-black dark:text-neutral-200"
          name="name"
          value={formData.name}
          onChange={handleFormData}
        />
      )}

      <label
        htmlFor="name"
        className="text-md mb-0 mt-3 block font-medium text-gray-900 dark:text-neutral-300"
      >
        Apellido:
      </label>
      {errorInUserData.lastname ? (
        <input
          id="lastname"
          className="text-md mt-2 rounded border border-gray-300 px-3 py-2 font-medium text-gray-900 focus:border-neutral-500 focus:outline-none dark:bg-black dark:text-neutral-200"
          name="lastname"
          value={formData.lastname}
          onChange={handleFormData}
        />
      ) : (
        <input
          id="lastname"
          className="text-md mt-2 rounded border border-gray-300 px-3 py-2 font-medium text-gray-900 focus:border-green-700 focus:outline-none dark:bg-black dark:text-neutral-200"
          name="lastname"
          value={formData.lastname}
          onChange={handleFormData}
        />
      )}

      <label
        htmlFor="telefono"
        className="text-md mb-0 mt-3 block font-medium text-gray-900 dark:text-neutral-300"
      >
        Telefono:
      </label>

      {errorInUserData.phone ? (
        <input
          id="telefono"
          className="text-md mt-2 rounded border border-gray-300 px-3 py-2 font-medium text-gray-900 focus:border-neutral-500 focus:outline-none dark:bg-black dark:text-neutral-200"
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
        />
      ) : (
        <input
          id="telefono"
          className="text-md text-gray- mt-2 rounded border border-gray-300 px-3 py-2 font-medium focus:border-green-700 focus:outline-none dark:bg-black dark:text-neutral-200"
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
        />
      )}
      <IoIosInformationCircleOutline
        data-tooltip-id="name-tooltip"
        data-tooltip-content="ingresa tu telefono con el formato: +5492284123456 donde +54: pais,
        9: provincia, 2284: ciudad, 123456: numero particular"
        className="ml-3 inline-block text-xl hover:scale-[1.15] active:scale-105 dark:text-white"
      />
      <Tooltip id="name-tooltip" className="dark:bg-black" />
      <label
        htmlFor="direccion"
        className="text-md mb-0 mt-3 block font-medium text-gray-900 dark:text-neutral-300"
      >
        Dirección:
      </label>
      {errorInUserData.address ? (
        <input
          id="direccion"
          className="text-md mt-2 rounded border border-gray-300 px-3 py-2 font-medium text-gray-900 focus:border-neutral-500 focus:outline-none dark:bg-black dark:text-neutral-200"
          name="address"
          value={formData.address}
          onChange={handleFormData}
        />
      ) : (
        <input
          id="direccion"
          className="text-md mt-2 rounded border border-gray-300 px-3 py-2 font-medium text-gray-900 focus:border-green-700 focus:outline-none dark:bg-black dark:text-neutral-200"
          name="address"
          value={formData.address}
          onChange={handleFormData}
        />
      )}
      <IoIosInformationCircleOutline
        data-tooltip-id="address-tooltip"
        data-tooltip-content="Ingresar la dirección completa de tu domicilio seguido de tu ciudad separado por una coma"
        className="active:scale-10 ml-3 inline-block text-xl hover:scale-[1.15] dark:text-white"
      />
      <Tooltip id="address-tooltip" className="dark:bg-black" />
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900 dark:text-neutral-300">
            Total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button
          onClick={onCheckout}
          disabled={
            items.length === 0 ||
            !!errorInUserData.phone ||
            !!errorInUserData.address ||
            !!errorInUserData.name ||
            !!errorInUserData.lastname
          }
          className="mt-6 w-full max-w-sm bg-white shadow-lg shadow-neutral-600/50"
        >
          <Image
            className="inline-block py-0"
            src="/version-horizontal-large-logo-mercado-pago.webp"
            alt="Logo MercadoPago"
            width={100}
            height={50}
          />
        </Button>
        <DisclaimerPage />
      </div>
    </div>
  );
};

export default Summary;
