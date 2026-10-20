import { negocio } from "../data/negocio";
import ProductoCard from "./ProductoCard";
import Reveal from "./Reveal";

export default function Ofertas() {
  const ofertas = negocio.productos.filter((p) => p.etiqueta);

  if (ofertas.length === 0) return null;

  return (
    <section id="ofertas" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:py-20">
      <Reveal className="mb-8 text-center sm:text-left">
        <h2 className="titular-seccion">Ofertas destacadas</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded bg-dorado sm:mx-0" />
      </Reveal>

      <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ofertas.map((p) => (
          <ProductoCard key={p.id} producto={p} destacada />
        ))}
      </Reveal>
    </section>
  );
}
