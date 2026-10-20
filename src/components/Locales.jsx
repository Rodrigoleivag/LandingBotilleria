import { negocio } from "../data/negocio";
import { mapsLink } from "../utils/links";
import { IconoPin, IconoReloj } from "./Iconos";
import Reveal from "./Reveal";

export default function Locales() {
  return (
    <section id="locales" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:py-20">
      <Reveal className="mb-8 text-center sm:text-left">
        <h2 className="titular-seccion">Nuestros locales</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded bg-dorado sm:mx-0" />

        {negocio.horario && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-crema/85">
            <IconoReloj className="h-4 w-4 text-turquesa" />
            <span>
              <span className="font-bold text-crema">Horario:</span> {negocio.horario}
            </span>
          </p>
        )}
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {negocio.locales.map((local, i) => (
          <Reveal key={local.id} delay={i * 100} className="h-full">
            <article className="tarjeta flex h-full flex-col p-6 hover:border-dorado/50 sm:p-8">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-turquesa">
                <IconoPin className="h-4 w-4" />
                Local
              </span>
              <h3 className="mt-2 font-display text-4xl leading-none tracking-wide text-dorado">
                {local.nombre}
              </h3>
              <p className="mt-3 text-lg text-crema/85">{local.direccion}</p>
              {local.horario && (
                <p className="mt-1 text-sm text-crema/70">Horario: {local.horario}</p>
              )}

              <a
                href={mapsLink(local)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-suave mt-auto w-full pt-3.5 sm:w-auto sm:self-start"
              >
                Cómo llegar
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
