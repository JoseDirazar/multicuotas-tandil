import { Gamja_Flower } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/providers/theme-context";
import ThemeSwitch from "@/components/ui/theme-switch";

import "./globals.css";

const font = Gamja_Flower({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "MULTICUOTAS Tandil",
  description: "Comprá en comodas cuotas (solo para la zona de Tandil)",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} dark:bg-black`}>
        <ThemeContextProvider>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          <div className="bg-[#e4e2fb] absolute top-[6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#fbd7d7] absolute top-[2rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#636894]"></div>
          {children}
          <ThemeSwitch />
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
