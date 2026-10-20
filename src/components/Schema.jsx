import { useEffect } from "react";
import { negocio } from "../data/negocio";
import { soloDigitos } from "../utils/links";

/**
 * JSON-LD (LiquorStore) generado desde negocio.js para mantener
 * un único origen de verdad. Se inyecta en <head> al montar.
 */
export default function Schema() {
  useEffect(() => {
    const digitos = soloDigitos(negocio.whatsapp);

    const schema = {
      "@context": "https://schema.org",
      "@type": "LiquorStore",
      name: negocio.nombre,
      description: negocio.descripcion,
      image: "/logo.png",
      sameAs: [negocio.instagram].filter(Boolean),
      ...(digitos.length >= 8 ? { telephone: `+${digitos}` } : {}),
      address: negocio.locales.map((l) => ({
        "@type": "PostalAddress",
        streetAddress: l.direccion,
        addressLocality: l.nombre,
        addressCountry: "CL",
      })),
    };

    let script = document.getElementById("schema-ld");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "schema-ld";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  return null;
}
