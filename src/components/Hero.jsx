import { negocio } from "../data/negocio";
import { waLink, mensajePedido } from "../utils/links";
import { IconoPin } from "./Iconos";

export default function Hero() {
  const wa = waLink(negocio.whatsapp, mensajePedido(negocio.nombre));
  const pedidosYa = negocio.pedidosYa;
  const palabras = negocio.lema.trim().split(/\s+/);

  return (
    <section className="relative overflow-hidden">
      {/* Brillos decorativos */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-turquesa/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-dorado/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 text-center sm:pb-24 sm:pt-36">
        <p className="animate-aparecer text-xs font-bold uppercase tracking-[0.3em] text-dorado">
          {negocio.nombre}
        </p>

        <h1 className="animate-aparecer mt-4 font-display text-6xl leading-[0.9] tracking-wide text-crema sm:text-8xl">
          {palabras.map((p, i) => (
            <span key={i} className={i === palabras.length - 1 ? "text-dorado" : undefined}>
              {p}
              {i < palabras.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <p className="animate-aparecer mx-auto mt-5 max-w-xl text-base text-crema/80 sm:text-lg">
          {negocio.subtitulo}
        </p>

        <div className="animate-aparecer mt-6 flex flex-wrap items-center justify-center gap-2">
          {negocio.locales.map((l) => (
            <span
              key={l.id}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-crema/85"
            >
              <IconoPin className="h-4 w-4 text-turquesa" />
              {l.nombre}
            </span>
          ))}
          {pedidosYa && (
            <span className="rounded-full border border-turquesa/40 bg-turquesa/10 px-3 py-1.5 text-xs font-semibold text-turquesa">
              Delivery por PedidosYa
            </span>
          )}
        </div>

        <div className="animate-aparecer mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primario w-full sm:w-auto">
              Pedir por WhatsApp
            </a>
          )}
          {pedidosYa && (
            <a
              href={pedidosYa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secundario w-full sm:w-auto"
            >
              Pedir por PedidosYa
            </a>
          )}
          {!wa && !pedidosYa && (
            <a href="#productos" className="btn-primario w-full sm:w-auto">
              Ver productos
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
