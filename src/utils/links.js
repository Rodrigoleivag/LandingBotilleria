/** Utilidades de enlaces y formato. Sin dependencias externas. */

/** Deja solo dígitos (soporta números con +, espacios, guiones...). */
export function soloDigitos(numero) {
  return String(numero || "").replace(/\D/g, "");
}

/** true si hay un número de WhatsApp usable (>= 8 dígitos). */
export function hayWhatsapp(negocio) {
  return soloDigitos(negocio.whatsapp).length >= 8;
}

/**
 * Construye un enlace wa.me con mensaje prellenado.
 * Devuelve null si no hay número válido (el sitio oculta los botones).
 */
export function waLink(numero, mensaje) {
  const digitos = soloDigitos(numero);
  if (digitos.length < 8) return null;
  return `https://wa.me/${digitos}?text=${encodeURIComponent(mensaje)}`;
}

export function mensajePedido(nombreNegocio) {
  return `Hola, quiero hacer un pedido en ${nombreNegocio}`;
}

export function mensajeProducto(nombreProducto) {
  return `Hola, quiero pedir ${nombreProducto}. ¿Hay disponibilidad?`;
}

/** Enlace a Google Maps con la dirección codificada (sin iframes). */
export function mapsLink(local) {
  const consulta = encodeURIComponent(`${local.direccion}, ${local.nombre}, Chile`);
  return `https://www.google.com/maps/search/?api=1&query=${consulta}`;
}

/** Formato chileno: 11990 → "$11.990" */
export function clp(valor) {
  const n = Math.round(Number(valor));
  if (Number.isNaN(n)) return "";
  try {
    return `$${new Intl.NumberFormat("es-CL").format(n)}`;
  } catch {
    return `$${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  }
}
