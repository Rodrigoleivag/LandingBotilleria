import { useEffect } from "react";
import { negocio } from "../data/negocio";

/**
 * Modal de mayoría de edad. La respuesta vive solo en el estado de App
 * (sin localStorage): en cada visita se vuelve a preguntar.
 */
export default function EdadModal({ onRespuesta }) {
  useEffect(() => {
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previo;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-negro/95 p-4 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-edad"
    >
      <div className="w-full max-w-sm rounded-3xl border border-dorado/40 bg-white/5 p-6 text-center">
        <span className="font-display text-6xl leading-none text-dorado">18+</span>
        <h2 id="titulo-edad" className="mt-3 font-display text-3xl tracking-wide text-crema">
          Venta solo a mayores de 18 años
        </h2>
        <p className="mt-2 text-sm text-crema/80">¿Eres mayor de edad?</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button type="button" className="btn-primario" onClick={() => onRespuesta(true)}>
            Sí
          </button>
          <button type="button" className="btn-secundario" onClick={() => onRespuesta(false)}>
            No
          </button>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-crema/60">{negocio.avisoLegal}</p>
      </div>
    </div>
  );
}

/** Mensaje de salida cuando el usuario indica que no es mayor de edad. */
export function PantallaSalida() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-7xl leading-none text-dorado">18+</span>
      <h1 className="mt-4 font-display text-4xl tracking-wide text-crema">
        Vuelve cuando seas mayor de edad
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-crema/75">
        El consumo de alcohol está prohibido para menores de 18 años.
      </p>
      <p className="mt-6 max-w-md text-xs leading-relaxed text-crema/60">{negocio.avisoLegal}</p>
    </main>
  );
}
