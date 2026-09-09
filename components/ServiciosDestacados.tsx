import Link from "next/link";
import { servicios } from "@/data/servicios";

export default function ServiciosDestacados() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-m font-semibold uppercase tracking-[0.2em] text-[#B89B5E]">
            Nuestros servicios
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-gray-900">
            Los favoritos de nuestras clientas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Descubrí algunos de los servicios más elegidos en Tita Nails.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicios.map((servicio) => (
            <article
              key={servicio.nombre}
              className="border border-pink-200 bg-white p-6 transition hover:border-[#B89B5E]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-pink-200">
                <span className="text-[#B89B5E]">✦</span>
              </div>

              <h3 className="text-xl font-semibold text-black">
                {servicio.nombre}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-black">
                {servicio.descripcion}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/servicios"
            className="inline-block border border-[#B89B5E] px-7 py-3 text-sm font-medium text-black transition hover:bg-pink-200"
          >
            Conocé más de nuestros servicios
          </Link>
        </div>
      </div>
    </section>
  );
}