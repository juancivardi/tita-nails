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
              Tita Nails es un proyecto que comenzó en 2018 de la mano de Ema, conocida como Tita.
              <br/>
              <br/>
              En ese momento, Tita estudiaba la carrera de Contador Público y fue durante esta etapa cuando descubrió su verdadera pasión por el mundo de la manicuría. Así, decidió dejar la carrera para dedicarse plenamente a aquello que realmente la apasionaba.
              <br/>
              <br/>
              Junto a María (Mari), su hermana, comenzó a perfeccionarse en Buenos Aires, realizando cursos con reconocidas educadoras y educadores del mundo de la belleza de manos. Allí incorporaron nuevas técnicas, marcas y tendencias que, con el tiempo, pasarían a formar parte de la propuesta de su futuro salón de uñas.
              <br/>
              <br/>
              Tita Nails nace en La Plata, de la mano de Tita, quien, con el apoyo incondicional de Mari y un pequeño equipo de trabajo, fue construyendo este proyecto con mucho esfuerzo, dedicación y aprendizaje, hasta lograr consolidarse en la ciudad y recibir hoy en día a cientos de clientas mes a mes.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 grid items-center md:grid-cols-2">
            <div>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-black">
                  <p className="font-serif leading-relaxed">
                En 2023, Mari decidió emprender su propio camino y abrirse paso en el mundo de las uñas, llevando el nombre de Tita Nails a Palermo, Bs As. Comenzó así una nueva etapa, llena de desafíos, esfuerzo y trabajo constante, un camino en el que, una vez más, el apoyo de Tita y su familia fue fundamental.
                <br/>
                <br/>
                Con el objetivo de ofrecer una experiencia de excelencia, en Tita Nails apostamos a la capacitación constante de nuestras manicuras y a los perfeccionamientos. También trabajamos continuamente en la incorporación y mejora de servicios de manicuría de vanguardia, equipos profesionales y productos de excelencia.
                <br/>
                <br/>
                A esto se suma una amplia variedad de colores, decoraciones y las últimas tendencias, para que cada clienta pueda encontrar una propuesta que se adapte a su estilo.
                <br/>
                <br/>
                Todo este recorrido permitió que Tita Nails creciera hasta llegar a muchas personas que, mes a mes, eligen realizarse las uñas en nuestros salones.
                <br/>
                <br/>
                Hoy seguimos creciendo con la misma pasión del primer día, llevando con nosotras todo lo aprendido a lo largo de estos años.
                <br/>
                <br/>
                Si todavía no formás parte de la comunidad de Tita Nails, te invitamos a conocernos.
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