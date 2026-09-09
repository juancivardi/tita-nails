export default function Home() {
  return (
    <main>
      <section className="flex min-h-[80vh] items-center px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black">
              Tita Nails
            </p>

            <h1 className="text-3xl font-semi leading-tight text-black md:text-4xl">
              Tus uñas,
              <br />
              <span className="text-[#B89B5E]">tu estilo.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              Un espacio pensado para que disfrutes, te cuides y encuentres
              el estilo que mejor representa quién sos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/servicios"
                className="rounded-full bg-pink-300 px-7 py-3 text-sm font-medium text-black transition hover:bg-pink-400"
              >
                Ver servicios
              </a>

              <a
                href="/contacto"
                className="rounded-full border border-[#B89B5E] px-7 py-3 text-sm font-medium transition hover:bg-[#B89B5E] hover:text-white"
              >
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}