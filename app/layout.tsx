import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiciosDestacados from "@/components/ServiciosDestacados";
import Manicuras from "@/components/Manicuras";
import Historia from "@/components/Historia";
import Contacto from "@/components/Contacto";

export const metadata: Metadata = {
  title: "Tita Nails",
  description: "Centro de uñas Tita Nails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white">
        <Navbar />

        <main>{children}</main>
        <ServiciosDestacados />
        <Manicuras />
        <Historia />
        <Contacto />
        <Footer />
      </body>
    </html>
  );
}
