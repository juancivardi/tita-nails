import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
      </body>
    </html>
  );
}
