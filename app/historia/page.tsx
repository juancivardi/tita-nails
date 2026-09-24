import Link from "next/link";
import Image from "next/image";

export default function Historia() {
  return (
    <section className=" px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-4 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-[300]">
            <div className=" mb-10 relative aspect-[4/5] overflow-hidden rounded shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/tita-foto.jpeg"
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
              <p className="font-serif leading-relaxed">
                Tita Nails es el proyecto que comenzó en 2018 de la mano de Enmanuela, conocida como Tita.
                Tita estudiaba para contadora mientras trabajaba como manicura para mantener su carrera, etapa en donde descubrió su verdadera pasión por el oficio de la belleza de manos.
                En ese momento, decide abandonar la carrera de contadora para enfocarse plenamente en su nueva pasión. <br/>
                Comienza junto a Maria, su hermana, a perfeccionarse en Buenos Aires realizando cursos de las mejores expertas y expertos, exponentes de la belleza de manos, aprendiendo nuevas tecnicas, marcas y tecnologías que eventualmente incorporaria en su futuro salón de uñas.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 grid items-center md:grid-cols-2">
            <div>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-black">
                  <p className="font-serif leading-relaxed">
                    Desde un garage en casa de sus padres, hasta su primer alquiler de un departamento, llegamos a la actualidad donde Tita Nails cuenta con dos sucursales, una en Palermo y otra en el centro de la ciudad de La Plata. <br/>
                    Trabajando y siguiendo un objetivo, ofreciendo perfeccionamiento a sus manicuras, brindando servicios de manicuria de vanguardia, formando equipos sólidos, contando con productos de excelencia y una alta variedad de colores, decoraciones y las últimas tecnologias, Tita Nails creció hasta llegar a tener más de mil personas que eligen mes a mes realizar sus uñas en sus salones.
                    <br/> Si todavía no formas parte de la famila de Tita Nails te invitamos a conocernos.
                    <br/> ¡Te esperamos! 
                  </p>
                </div>
                    
            </div>

                <div className="mx-auto w-full max-w-[300]">
                    <div className="mt-10 relative aspect-[4/5] overflow-hidden rounded shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
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
            <div className="flex justify-center">
              <Link
                href="/contacto"
                className="center mt-8 inline-block border border-[#B89B5E] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#B89B5E]">
                  Visitanos
              </Link>
            </div>
      </div>
    </section>
  );
}