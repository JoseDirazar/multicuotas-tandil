"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Button from "@/components/ui/button";
import { Dialog } from "@headlessui/react";
import {
  X,
  Menu
} from "lucide-react";
import { useState } from "react";
import IconButton from "@/components/ui/icon-button";

interface MainNavProps {
  data: Category[];
}

const MobileMainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <Button
        onClick={onOpen}
        className="bg-transparent p-0 text-black dark:text-white lg:hidden"
      >
        <Menu size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="absolute top-0 right-0 z-30 h-[100vh] w-[70%] sm:w-[40%] lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/10 backdrop-blur-[2px]" />

        <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white/70 py-4 pb-6 shadow-xl backdrop-blur-lg dark:bg-transparent/70">
          {/* Close button */}
          <div className="flex items-center px-[1.1rem]">
            <IconButton icon={<X size={15} />} onClick={onClose} className="dark:text-black"/>
          </div>
          <div className="mr-1 flex  h-full max-h-[60vh] flex-col-reverse items-end justify-evenly p-6 sm:mr-3">
            {routes.map((route) => (
              <div
                key={route.href + "mobile"}
                className="mr-0 flex min-w-[70%] flex-col items-end hover:scale-[1.15] transition-transform sm:mr-3"
              >
                <Link
                  href={route.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-black dark:text-neutral-100 dark:hover:font-bold dark:hover:text-white",
                    route.active
                      ? "text-black dark:text-white"
                      : "text-black dark:text-neutral-100",
                  )}
                  onClick={onClose}
                >
                  {route.label}
                </Link>
                <hr className="mt-2 mb-3 w-full border-black dark:border-white" />
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default MobileMainNav;
