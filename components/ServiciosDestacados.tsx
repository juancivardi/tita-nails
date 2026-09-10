import Link from "next/link";
import { servicios } from "@/data/servicios";
import Image from "next/image";

export default function ServiciosDestacados() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-m font-serif uppercase tracking-[0.2em] text-[#B89B5E]">
            Nuestros servicios
          </p>

          <h2 className="mt-3 text-2xl  text-gray-900">
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
              className="border border-[#B89B5E] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B89B5E]/50 hover:shadow-lg"
            >
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-square overflow-hidden rounded">
                <Image
                  src={servicio.imagen}
                  alt="Tita Nails, imagen del servicio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                </div>
              </div>

              <h3 className="mt-4 text-xl font-serif text-black">
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
            className="inline-block border border-[#B89B5E] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#B89B5E]"
          >
            Conocé más de nuestros servicios
          </Link>
        </div>
      </div>
    </section>
  );
}