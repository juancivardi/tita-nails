export default function Contacto() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-xl mx-auto mb-10 font-serif uppercase tracking-[0.1em] text-[#B89B5E]">
          Contactanos
        </h1>
        <div className="grid gap-12 md:grid-cols-2">
            {/* La Plata */}
            <div>
              <p className="text-xl font-serif uppercase tracking-[0.1em] text-[#B89B5E]">
                La Plata
              </p>

              <div className="mt-5 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-[#B89B5E]">
                    Dirección
                  </p>
                  <p className="mt-1 font-semibold text-black">
                    58 Nº 885 (e/ 12 y 13)
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#B89B5E]">
                    WhatsApp
                  </p>
                  <a
                    href="#"
                    className="mt-1 block font-semibold text-black hover:text-[#B89B5E]"
                  >
                    2216267940
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#B89B5E]">
                    Instagram
                  </p>
                  <a
                    href="#"
                    className="mt-1 block font-semibold text-black hover:text-[#B89B5E]"
                  >
                    @titanails
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#B89B5E]">
                    Horarios
                  </p>
                  <p className="mt-1 font-semibold text-black">
                    Martes a Sábados - 08:00hs a 20:00hs
                  </p>
                </div>

                <div className="mt-8 overflow-hidden rounded">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2805574296904!2d-57.95226662512751!3d-34.92450007450866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7ec409843ef%3A0x1d43ccfbdc04344b!2sTita%20Nails!5e0!3m2!1ses-419!2sar!4v1789012959705!5m2!1ses-419!2sar"
                    className="h-[250px] w-[250px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tita Nails La Plata"
                  />
                </div>
              </div>
            </div>

            {/* Palermo */}
            <div>
              <p className="text-xl font-serif uppercase tracking-[0.1em] text-[#B89B5E]">
                Palermo
              </p>

              <div className="mt-5 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-[#B89B5E]">
                    Dirección
                  </p>
                  <p className="mt-1 font-semibold text-black">
                    Honduras Nº 3717 - 6A
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#B89B5E]">
                    WhatsApp
                  </p>
                  <a
                    href="#"
                    className="mt-1 block font-semibold text-black hover:text-[#B89B5E]"
                  >
                    1170801195
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#B89B5E]">
                    Instagram
                  </p>
                  <a
                    href="#"
                    className="mt-1 block font-semibold text-black hover:text-[#B89B5E]"
                  >
                    @titanails
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#B89B5E]">
                    Horarios
                  </p>
                  <p className="mt-1 font-semibold text-black">
                    Lunes a Sábados - 09:00hs a 20:00hs
                  </p>
                </div>

                <div className="mt-8 overflow-hidden rounded">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4064561054292!2d-58.41755332426013!3d-34.59388217295778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb752012b55d%3A0x21f000b5d193be53!2sTita%20Nails%20Palermo!5e0!3m2!1ses-419!2sar!4v1789012905741!5m2!1ses-419!2sar"
                    className="h-[250px] w-[250px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tita Nails Palermo"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}