import { Lusitana } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/ui/theme-switch";

import "./globals.css";
import { ThemeContextProvider } from "@/providers/theme-provider";

const font = Lusitana({ subsets: ["latin"], weight: "700" });

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} dark:bg-black`}>
        <ThemeContextProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          <div className="absolute right-[11rem] top-[6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#e4e2fb] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
          <div className="absolute left-[2rem] top-[2rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#fbd7d7] blur-[10rem] dark:bg-[#636894] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          {children}
          <ThemeSwitch />
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
