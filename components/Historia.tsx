import Link from "next/link";

export default function Historia() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Imagen */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] overflow-hidden bg-pink-200">
              {/* Más adelante colocamos una foto real de Tita Nails */}
              <div className="flex h-full items-center justify-center">
                <span className="text-5xl text-[#B89B5E]">✦</span>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B89B5E]">
              Nuestra historia
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight text-black-900 md:text-3xl">
              Un lugar creado con pasión
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-black">
              <p>
                Tita Nails nació con el objetivo de crear un espacio donde
                cada persona pudiera disfrutar de un momento para sí misma.
              </p>

              <p>
                Con el tiempo, el proyecto fue creciendo, incorporando nuevos
                servicios, profesionales y muchas historias compartidas con
                nuestras clientas.
              </p>
            </div>

            <Link
              href="/historia"
              className="mt-8 inline-block border border-[#B89B5E] px-7 py-3 text-sm font-medium text-black transition hover:bg-pink-200"
            >
              Conocé nuestra historia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}