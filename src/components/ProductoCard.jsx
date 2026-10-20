import { negocio } from "../data/negocio";
import { waLink, mensajeProducto, clp } from "../utils/links";
import { IconoCategoria } from "./Iconos";

const SELLOS = {
  OFERTA: "bg-turquesa text-negro",
  PROMO: "bg-dorado text-negro",
};

export default function ProductoCard({ producto, destacada = false }) {
  const wa = waLink(
    negocio.whatsapp,
    mensajeProducto(`${producto.nombre} ${producto.formato}`)
  );

  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-dorado/50 sm:p-6">
      {producto.etiqueta && (
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-widest ${
            SELLOS[producto.etiqueta] || "bg-crema text-negro"
          }`}
        >
          {producto.etiqueta}
        </span>
      )}

      <div
        className={`mb-4 flex h-28 items-center justify-center overflow-hidden rounded-2xl ${
          producto.imagen ? "bg-crema" : "bg-negro/60 text-dorado"
        }`}
      >
        {producto.imagen ? (
          <img
            src={producto.imagen}
            alt={`${producto.nombre} ${producto.formato}`}
            loading="lazy"
            className="h-full w-full object-contain p-2"
          />
        ) : (
          <IconoCategoria categoria={producto.categoria} className="h-12 w-12" />
        )}
      </div>

      <h3
        className={`font-display leading-none tracking-wide text-crema ${
          destacada ? "text-3xl sm:text-4xl" : "text-2xl"
        }`}
      >
        {producto.nombre}
      </h3>
      <p className="mt-1.5 text-sm text-crema/70">{producto.formato}</p>

      <div className="mt-auto pt-5">
        {producto.precio != null ? (
          <>
            <p
              className={`font-display leading-none text-dorado ${
                destacada ? "text-5xl sm:text-6xl" : "text-4xl"
              }`}
            >
              {clp(producto.precio)}
            </p>
            {producto.precioAnterior != null && (
              <p className="mt-1 text-sm text-crema/60 line-through">
                {clp(producto.precioAnterior)}
              </p>
            )}
            {producto.precioNormal != null && (
              <p className="mt-1 text-xs text-crema/60">
                Precio normal {clp(producto.precioNormal)}
              </p>
            )}
          </>
        ) : (
          <>
            <p
              className={`font-display leading-none text-crema ${
                destacada ? "text-4xl sm:text-5xl" : "text-3xl"
              }`}
            >
              Consultar
            </p>
            {producto.precioNormal != null && (
              <p className="mt-1 text-xs text-crema/60">
                Precio normal {clp(producto.precioNormal)}
              </p>
            )}
          </>
        )}

        {wa && (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario mt-4 w-full"
          >
            Pedir
          </a>
        )}
      </div>
    </article>
  );
}
