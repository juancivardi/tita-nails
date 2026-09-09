import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-pink-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide text-[#B89B5E]"
        >
          Tita Nails
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
            href="/manicuras"
            className="text-sm text-gray-700 hover:text-[#B89B5E]"
          >
            Manicuras
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
        </div>
      </div>
    </nav>
  );
}