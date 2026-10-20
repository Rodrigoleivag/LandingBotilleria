import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Ofertas from "./components/Ofertas.jsx";
import Productos from "./components/Productos.jsx";
import ComoPedir from "./components/ComoPedir.jsx";
import Locales from "./components/Locales.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import EdadModal, { PantallaSalida } from "./components/EdadModal.jsx";
import Schema from "./components/Schema.jsx";

export default function App() {
  // null = sin responder | true = mayor de edad | false = salida
  // (solo estado de React, sin localStorage)
  const [mayorDeEdad, setMayorDeEdad] = useState(null);

  if (mayorDeEdad === false) return <PantallaSalida />;

  return (
    <>
      <Schema />
      <Navbar />
      <main>
        <Hero />
        <Ofertas />
        <Productos />
        <ComoPedir />
        <Locales />
      </main>
      <Footer />
      <WhatsAppFloat />
      {mayorDeEdad === null && <EdadModal onRespuesta={setMayorDeEdad} />}
    </>
  );
}
