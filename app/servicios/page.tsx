import Image from "next/image";
import Link from "next/link";

interface Servicio {
  nombre: string;
  descripcion: React.ReactNode;
  imagen: string;
}

const servicios: Servicio[] = [
  {
  nombre: "Kapping",
  descripcion: (
      <>
      El kapping es una <span className="font-bold"> técnica de construcción </span>que recubre y acompaña el largo de tus uñas naturales, aportándoles mayor resistencia y protección. Lo realizamos en tres materiales: acrílico, polygel y gel.
      </> ),
  imagen: "/images/kapping.jpeg",
  },
  {
    nombre: "Esculpidas",
    descripcion: (
      <>
      Las esculpidas son una <span className="font-bold"> técnica de construcción </span> 
      que ademas de recubrir tus uñas naturales, permite <span className="font-bold"> extender su largo. </span> 
      Al igual que el kapping, podés elegir entre tres materiales: acrílico, polygel y gel.
      </> ),
    imagen: "/images/esculpidas.jpeg",
  },
  {
    nombre: "Soft gel",
    descripcion: (
      <>
      Las soft gel se realizan mediante <span className="font-bold"> tips </span> 
      que se adhieren sobre la uña natural y permiten mantener o extender el largo, logrando un resultado prolijo y delicado.
      </> ),
    imagen: "/images/softgel.jpeg",
  },
  {
    nombre: "Semipermanente",
    descripcion: (
      <>
      Si ya tenés <span className="font-bold"> el largo, la firmeza y la forma </span> que buscás, podés darle color a tus uñas con nuestro servicio de semipermanente.
      </> ),
    imagen: "/images/semipermanente.jpeg",
  },
  {
    nombre: "Pedicuria",
    descripcion: (
      <>
      Elegí entre nuestros 3 servicios de pies: <span className="font-bold">pedicuria, spa y/o belleza  </span> o combínalos como quieras y dale a tus pies el estilo que buscás.
      </> ),
    imagen: "/images/pies.jpeg",
  },
];

export default function Servicios() {
  return (
    <div className="px-6 py-24 m-auto bg-white">
      <div className="px-10 pb-15 m-auto space-y-4 text-base leading-relaxed text-black">
          <p className="text-xl font-serif font-semibold uppercase tracking-[0.2em] text-[#B89B5E]">
                SERVICIOS
          </p>
          <p className="text-sm tracking-[0.2em]">
            En esta sección te contamos sobre nuestros servicios más elegidos.
          </p>
        </div>

      {/* Div de los servicios */}
      <div className="grid gap-12 md:grid-cols-2">
        {servicios.map((servicio) => (
          <div
            className="grid items-center gap-6 md:grid-cols-2"
            key={servicio.nombre}
          >
            <div className="relative w-full max-w-[200px] justify-self-center md:justify-self-end">
              <div className="relative aspect-[4/5] overflow-hidden rounded shadow-[0 8px 25px rgba(0,0,0,0.15)]">
                <Image
                  src={servicio.imagen}
                  alt="Tita Nails, centro de estetica de uñas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 250px"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-sm font-serif font-semibold uppercase tracking-[0.2em] text-[#B89B5E]">
                {servicio.nombre}
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-black">
                {servicio.descripcion}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center items-center">
          <Link
            href="/contacto"
            className="border border-[#B89B5E] inline-block bg-white px-7 py-3 text-sm font-medium text-black transition hover:border-black"
          >
            Conocé más detalles
          </Link>
        </div>
    </div>
  );
}