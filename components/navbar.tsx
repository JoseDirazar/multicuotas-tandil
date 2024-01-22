import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import MobileMainNav from "@/components/mobile-main-nav";
import { Shadows_Into_Light } from "next/font/google";

const font = Shadows_Into_Light({ subsets: ["latin"], weight: "400" });

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b bg-white/30 dark:border-neutral-700 dark:bg-black/30">
      <Container>
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:relative lg:px-8">
          <div className="flex items-center">
          <Link href="/" className="gap-x-2 lg:ml-0">
            <div
              className={`${font.className} flex p-2 px-4 pl-0 text-xl dark:text-white lg:ml-0`}
            >
              <p className="font-bold text-rose-500">MULTI</p>
              <p className="font-bold text-blue-400">CUOTAS</p>
              <p className="ml-2 font-bold text-yellow-500"> Tandíl</p>
            </div>
          </Link>
          <MainNav data={categories} />
          </div>
          <div className="flex justify-end gap-x-6">
          <NavbarActions />
          <MobileMainNav data={categories} />

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
