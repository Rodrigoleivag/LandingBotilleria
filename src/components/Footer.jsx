import { negocio } from "../data/negocio";
import { waLink, mensajePedido } from "../utils/links";
import { IconoInstagram, IconoWhatsApp } from "./Iconos";

const ENLACES = [
  { href: "#ofertas", texto: "Ofertas" },
  { href: "#productos", texto: "Productos" },
  { href: "#locales", texto: "Locales" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Footer() {
  const wa = waLink(negocio.whatsapp, mensajePedido(negocio.nombre));
  const anio = new Date().getFullYear();

  return (
    <footer id="contacto" className="scroll-mt-20 border-t border-dorado/20 bg-negro pb-28 pt-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-2xl leading-none tracking-wide text-dorado">
              {negocio.nombre}
            </p>
            <p className="mt-2 text-sm text-crema/70">{negocio.descripcion}</p>

            <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-1" aria-label="Pie de página">
              {ENLACES.map((e) => (
                <a
                  key={e.href}
                  href={e.href}
                  className="text-sm text-crema/70 transition hover:text-turquesa"
                >
                  {e.texto}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-crema/60">Contacto</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {negocio.instagram && (
                <li>
                  <a
                    href={negocio.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-crema/85 transition hover:text-turquesa"
                  >
                    <IconoInstagram className="h-4 w-4" />
                    Instagram
                  </a>
                </li>
              )}
              {wa && (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-crema/85 transition hover:text-turquesa"
                  >
                    <IconoWhatsApp className="h-4 w-4" />
                    WhatsApp
                  </a>
                </li>
              )}
              {negocio.pedidosYa && (
                <li>
                  <a
                    href={negocio.pedidosYa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-crema/85 transition hover:text-turquesa"
                  >
                    Delivery por PedidosYa
                  </a>
                </li>
              )}
              {negocio.horario && (
                <li className="text-crema/70">Horario: {negocio.horario}</li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-crema/60">
              Medios de pago
            </h2>
            {negocio.mediosDePago.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {negocio.mediosDePago.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-crema/85"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-crema/60">
                Consulta medios de pago en el local.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm font-semibold text-dorado">{negocio.avisoLegal}</p>
          <p className="mt-3 text-xs text-crema/60">
            © {anio} {negocio.nombre}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
