import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Tita Nails",
  description: "Centro de uñas Tita Nails",
  icons: {
    icon: "/images/logo-png.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white">
        {/* Imagen de fondo */}
          <div
            className="absolute fixed inset-0 -z-10 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/local2.jpg')" }}
          />
        <Navbar />

        <main>{children}</main>
        
        <Footer />
        <WhatsappButton
          className="fixed bottom-10 right-7 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[#B89B5E] text-white shadow-md transition hover:scale-105"
        >
          <FaWhatsapp className="text-2xl" />
        </WhatsappButton>
      </body>
    </html>
  );
}
