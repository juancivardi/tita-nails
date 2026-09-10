"use client";
import Link from "next/link";
import { useState } from "react"
import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
    <nav className="w-full border-b border-pink-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-serif tracking-wide text-[#B89B5E]"
        >
          TITA NAILS
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-gray-700 hover:text-[#B89B5E]">
            Inicio
          </Link>

          <Link
            href="/servicios"
            className="text-sm text-gray-700 hover:text-[#B89B5E]"
          >
            Servicios
          </Link>


          <Link
            href="/historia"
            className="text-sm text-gray-700 hover:text-[#B89B5E]"
          >
            Nuestra historia
          </Link>

          <Link
            href="/contacto"
            className="text-sm text-gray-700 hover:text-[#B89B5E]"
          >
            Contacto
          </Link>

          <WhatsAppButton
                className="rounded-md bg-[#B89B5E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#9F854D]">
                WhatsApp
          </WhatsAppButton>

        </div>

        {/*Boton mobile*/}
        <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center text-2xl text-black md:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? "×" : "☰"}
          </button>
      </div>

       {/* Menu mobile */}
        {isOpen && (
          <div className="border-t border-black/10 py-5 px-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="/"
                onClick={closeMenu}
                className="text-sm text-gray-800"
              >
                Inicio
              </a>

              <a
                href="/#estudio"
                onClick={closeMenu}
                className="text-sm text-gray-800"
              >
                Servicios
              </a>

              <a
                href="/#areas"
                onClick={closeMenu}
                className="text-sm text-gray-800"
              >
                Nuestra historia
              </a>

              <a
                href="/#contacto"
                onClick={closeMenu}
                className="text-sm text-gray-800"
              >
                Contacto
              </a>

              <WhatsAppButton
                className="rounded-md bg-[#B89B5E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#9F854D]">
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        )}
    </nav>
    </header>
  );
}