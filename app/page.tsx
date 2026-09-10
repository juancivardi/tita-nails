import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-[65vh] items-center px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto w-full max-w-[250px]">
            <div className="relative aspect-[5/5] overflow-hidden rounded">
              <Image
                src="/images/logo-png.png"
                alt="Tita Nails, centro de estetica de uñas"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-3xl font-serif leading-tight text-[#B89B5E] md:text-4xl">
              Encontrá tu mejor versión.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              Un espacio pensado para que disfrutes, te cuides y encuentres
              el estilo que mejor representa quién sos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/servicios"
                className="rounded-full bg-[#B89B5E] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#ebcf94]"
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