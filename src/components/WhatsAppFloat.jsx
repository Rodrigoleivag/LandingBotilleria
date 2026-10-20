import { negocio } from "../data/negocio";
import { waLink, mensajePedido } from "../utils/links";
import { IconoWhatsApp } from "./Iconos";

/** Botón flotante de WhatsApp. Si no hay número, no se renderiza. */
export default function WhatsAppFloat() {
  const wa = waLink(negocio.whatsapp, mensajePedido(negocio.nombre));
  if (!wa) return null;

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-turquesa text-negro shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition hover:scale-105 hover:brightness-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-crema sm:right-6"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <IconoWhatsApp className="h-7 w-7" />
    </a>
  );
}
