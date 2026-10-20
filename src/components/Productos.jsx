import { useState } from "react";
import { negocio } from "../data/negocio";
import ProductoCard from "./ProductoCard";
import Reveal from "./Reveal";

export default function Productos() {
  const [categoria, setCategoria] = useState(negocio.categorias[0].id);
  const filtrados = negocio.productos.filter((p) => p.categoria === categoria);

  return (
    <section id="productos" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:py-20">
      <Reveal className="mb-6 text-center sm:text-left">
        <h2 className="titular-seccion">Nuestros productos</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded bg-dorado sm:mx-0" />
      </Reveal>

      <Reveal className="mb-8">
        <div
          className="flex gap-2 overflow-x-auto pb-2 sm:justify-center"
          role="group"
          aria-label="Filtrar por categoría"
        >
          {negocio.categorias.map((c) => {
            const activa = c.id === categoria;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategoria(c.id)}
                aria-pressed={activa}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-turquesa ${
                  activa
                    ? "bg-turquesa text-negro"
                    : "border border-white/15 bg-white/5 text-crema/80 hover:bg-white/10"
                }`}
              >
                {c.nombre}
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((p) => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </Reveal>

      {negocio.avisoPrecios && (
        <Reveal className="mt-8">
          <p className="rounded-2xl border border-dorado/30 bg-dorado/10 p-4 text-center text-sm text-crema/85">
            {negocio.avisoPrecios}
          </p>
        </Reveal>
      )}
    </section>
  );
}
