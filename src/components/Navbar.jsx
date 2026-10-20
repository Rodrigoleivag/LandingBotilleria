import { useState } from "react";
import { negocio } from "../data/negocio";
import { waLink, mensajePedido } from "../utils/links";
import { IconoMenu } from "./Iconos";

const ENLACES = [
  { href: "#ofertas", texto: "Ofertas" },
  { href: "#productos", texto: "Productos" },
  { href: "#locales", texto: "Locales" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  const wa = waLink(negocio.whatsapp, mensajePedido(negocio.nombre));
  const hrefPedido = wa || negocio.pedidosYa || "#ofertas";
  const esExterno = hrefPedido.startsWith("http");

  const propsExterno = esExterno ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-dorado/20 bg-negro/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4" aria-label="Principal">
        <a href="#" className="flex min-w-0 items-center gap-2" aria-label={negocio.nombre}>
          {logoOk ? (
            <img
              src="/logo.png"
              alt={negocio.nombre}
              className="h-9 w-auto"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <span className="truncate font-display text-xl leading-none tracking-wide text-dorado">
              {negocio.nombre}
            </span>
          )}
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-6 md:flex">
            {ENLACES.map((e) => (
              <a
                key={e.href}
                href={e.href}
                className="text-sm font-semibold text-crema/80 transition hover:text-turquesa"
              >
                {e.texto}
              </a>
            ))}
          </div>

          <a href={hrefPedido} {...propsExterno} className="btn-primario !px-4 !py-2.5 sm:!px-6">
            <span className="hidden sm:inline">Pedir ahora</span>
            <span className="sm:hidden">Pedir</span>
          </a>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="rounded-full border border-white/15 p-2.5 text-crema transition hover:bg-white/10 md:hidden"
          >
            <IconoMenu abierto={abierto} />
          </button>
        </div>
      </nav>

      {abierto && (
        <div id="menu-movil" className="border-t border-white/10 bg-negro px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col">
            {ENLACES.map((e) => (
              <li key={e.href}>
                <a
                  href={e.href}
                  onClick={() => setAbierto(false)}
                  className="block border-b border-white/5 py-3 font-semibold text-crema/85 transition hover:text-turquesa"
                >
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
