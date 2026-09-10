import Link from "next/link";
import Image from "next/image";

export default function Historia() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/local1.jpg"
                alt="Tita Nails, centro de estetica de uñas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm font-serif font-semibold uppercase tracking-[0.2em] text-[#B89B5E]">
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
              className="mt-8 inline-block border border-[#B89B5E] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#B89B5E]"
            >
              Conocé nuestra historia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}