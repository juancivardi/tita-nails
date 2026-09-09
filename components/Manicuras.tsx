import Link from "next/link";

const manicuras = [
  {
    nombre: "Nombre 1",
    descripcion: "Especialidad o breve descripción.",
  },
  {
    nombre: "Nombre 2",
    descripcion: "Especialidad o breve descripción.",
  },
  {
    nombre: "Nombre 3",
    descripcion: "Especialidad o breve descripción.",
  },
  {
    nombre: "Nombre 4",
    descripcion: "Especialidad o breve descripción.",
  },
];

export default function Manicuras() {
  return (
    <section className="bg-pink-200 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#B89B5E]">
            Nuestro equipo
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-black">
            Conocé a nuestras manicuras
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-black">
            Profesionales que ponen dedicación y pasión en cada trabajo.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {manicuras.map((manicura) => (
            <article key={manicura.nombre} className="text-center">
              <div className="mx-auto mb-5 aspect-square w-full max-w-xs overflow-hidden bg-white">
                {/* Más adelante colocamos la foto */}
                <div className="flex h-full items-center justify-center">
                  <span className="text-4xl text-[#B89B5E]">✦</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black">
                {manicura.nombre}
              </h3>

              <p className="mt-2 text-sm text-black">
                {manicura.descripcion}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/manicuras"
            className="inline-block border border-[#B89B5E] bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-[#B89B5E]"
          >
            Conocé al equipo
          </Link>
        </div>
      </div>
    </section>
  );
}