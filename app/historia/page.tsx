import Link from "next/link";
import Image from "next/image";

export default function Historia() {
  return (
    <section className=" px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-4 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-[300]">
            <div className="relative aspect-[4/5] overflow-hidden rounded shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/local2.jpg"
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
          </div>
        </div>
        <div className="mt-5 grid items-center md:grid-cols-2">
            <div>
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
                    href="/contacto"
                    className="mt-8 inline-block border border-[#B89B5E] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#B89B5E]"
                    >
                    Conoce más de nosotros
                    </Link>
                </div>

                <div className="mx-auto w-full max-w-[300]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <Image
                        src="/images/local1.jpg"
                        alt="Tita Nails, centro de estetica de uñas"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}