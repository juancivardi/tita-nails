export default function Contacto() {
  return (
    <section className="bg-pink-200 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Información */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B89B5E]">
              Contacto
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight text-black md:text-3xl">
              Vení a conocernos
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-black">
              Estamos para ayudarte a encontrar el servicio y el estilo que
              mejor se adapte a vos.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm font-semibold text-[#B89B5E]">Dirección</p>
                <p className="mt-1 text-black">
                  La Plata - 58 Nª 885 (e/ 12 y 13)
                </p>
                <p className="mt-1 text-black">
                  Palermo - Honduras Nº 3717 - 6A
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#B89B5E]">WhatsApp - La Plata</p>
                <a
                  href="#"
                  className="mt-1 block text-black hover:text-[#B89B5E]"
                >
                 221-6267940
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#B89B5E]">WhatsApp - Palermo</p>
                <a
                  href="#"
                  className="mt-1 block text-black hover:text-[#B89B5E]"
                >
                  11-7080-1195
                </a>
              </div>
              

              <div>
                <p className="text-sm font-semibold text-[#B89B5E]">
                  Instagram
                </p>
                <a
                  href="#"
                  className="mt-1 block text-black hover:text-[#B89B5E]"
                >
                  @titanails
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#B89B5E]">
                  Horarios (La Plata)
                </p>
                <p className="mt-1 text-black">
                  Martes a Sábados - 08:00hs a 20:00hs
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#B89B5E]">
                  Horarios (Palermo)
                </p>
                <p className="mt-1 text-black">
                  Lunes a Sábados - 09:00hs a 20:00hs
                </p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="min-h-[400px] bg-white">
            <div className="flex h-full min-h-[400px] items-center justify-center">
              <div className="text-center">
                <span className="text-4xl text-[#B89B5E]">⌖</span>

                <p className="mt-4 font-medium text-black">
                  Ubicación de Tita Nails
                </p>

                <p className="mt-2 text-sm text-black">
                  Mapa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}