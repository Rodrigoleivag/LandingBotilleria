import { useEffect, useRef, useState } from "react";

/**
 * Aparición sutil al hacer scroll (IntersectionObserver, sin librerías).
 * Si el navegador no lo soporta, el contenido se muestra de inmediato.
 */
export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entradas) => {
        if (entradas[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
