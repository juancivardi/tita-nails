export default function Footer() {
  return (
    <footer className="bg-black px-6 py-10 text-black text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Tita Nails</h2>
            <p className="mt-2 text-sm">
              Belleza, cuidado y estilo en cada detalle.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#B89B5E]">
              Instagram
            </a>

            <a href="#" className="hover:text-[#B89B5E]">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-pink-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Tita Nails. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}