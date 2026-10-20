import { negocio } from "../data/negocio";
import { waLink, mensajePedido } from "../utils/links";
import Reveal from "./Reveal";

const PASOS = [
  {
    n: "01",
    titulo: "Elige tus productos",
    texto: "Revisa las ofertas y la variedad de cervezas y licores disponibles.",
  },
  {
    n: "02",
    titulo: "Pide por WhatsApp o PedidosYa",
    texto: "Haz tu pedido en el canal que prefieras y coordina la entrega o retiro.",
  },
  {
    n: "03",
    titulo: "Recíbelo en tu casa",
    texto: "Te lo llevamos a domicilio o retíralo cuando quieras en el local.",
  },
];

export default function ComoPedir() {
  const wa = waLink(negocio.whatsapp, mensajePedido(negocio.nombre));
  const pedidosYa = negocio.pedidosYa;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <Reveal className="mb-8 text-center sm:text-left">
        <h2 className="titular-seccion">Cómo pedir</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded bg-dorado sm:mx-0" />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {PASOS.map((p, i) => (
          <Reveal key={p.n} delay={i * 100} className="h-full">
            <div className="tarjeta h-full p-6">
              <span className="font-display text-5xl leading-none text-dorado/70">{p.n}</span>
              <h3 className="mt-3 font-display text-2xl tracking-wide text-crema">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-crema/75">{p.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {(wa || pedidosYa) && (
        <Reveal className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primario">
              Hacer pedido por WhatsApp
            </a>
          )}
          {pedidosYa && (
            <a
              href={pedidosYa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secundario"
            >
              Pedir por PedidosYa
            </a>
          )}
        </Reveal>
      )}
    </section>
  );
}
