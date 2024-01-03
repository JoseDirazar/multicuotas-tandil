import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/providers/theme-context";
import ThemeSwitch from "@/components/ui/theme-switch";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "MULTICUOTAS Tandil",
  description: "Comprá en comodas cuotas (solo para la zona de Tandil)",
};

/* whatsapp: http://wa.me/+5492494280688 */

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
          {children}
          <ThemeSwitch />
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
