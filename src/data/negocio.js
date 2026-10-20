/**
 * ÚNICO ARCHIVO DE DATOS DEL NEGOCIO.
 * Edita aquí nombre, locales, horarios, enlaces, productos y precios.
 * Nada de este contenido está escrito dentro de los componentes, así que
 * puedes reutilizar la plantilla para otro negocio cambiando solo este archivo.
 *
 * Campos con "[COMPLETAR]" = déjalos vacíos ("") y la sección correspondiente
 * se oculta automáticamente sin romper el sitio.
 */

export const negocio = {
  nombre: "Botillería Hoy Me Lanzo",
  lema: "Hoy me lanzo",
  descripcion: "Variedad de cervezas, ofertas semanales y delivery.",
  subtitulo: "Variedad de cervezas, ofertas y delivery en San Miguel y San Joaquín.",

  // Enlaces y contacto ------------------------------------------------------
  instagram: "https://www.instagram.com/botilleriahoymelanzo",

  // Número de WhatsApp del negocio (con código de país, sin + ni espacios).
  // Si está vacío, se ocultan todos los botones de WhatsApp (flotante, hero y "Pedir" de cada producto).
  whatsapp: "56990509129",

  // [COMPLETAR] Ej: "Lun a Dom, 10:00 a 22:00". Si está vacío, se oculta la sección de horario.
  horario: "",

  // [COMPLETAR] Enlace completo de tu perfil/tienda en PedidosYa.
  // Si está vacío, se ocultan los botones de PedidosYa.
  pedidosYa: "",

  // [COMPLETAR o dejar fuera] Ej: ["Efectivo", "Débito", "Crédito"]
  mediosDePago: [],

  // Avisos legales ----------------------------------------------------------
  avisoPrecios:
    "Precios referenciales, sujetos a cambio y a disponibilidad. Consulta por WhatsApp o en el local.",
  avisoLegal:
    "El consumo de alcohol en menores de 18 años se encuentra prohibido. El abuso del alcohol es dañino.",

  // Locales -----------------------------------------------------------------
  locales: [
    { id: "san-miguel", nombre: "San Miguel", direccion: "Departamental #582" },
    { id: "san-joaquin", nombre: "San Joaquín", direccion: "Avenida Haydn #5189" },
  ],

  // Categorías para los filtros de la sección Productos ---------------------
  categorias: [
    { id: "cervezas", nombre: "Cervezas" },
    { id: "combos", nombre: "Combos y licores" },
  ],

  // Productos ---------------------------------------------------------------
  // Campos: nombre, formato, precio (null = "Consultar"), categoria (id),
  //         etiqueta opcional ("OFERTA" | "PROMO"),
  //         precioAnterior opcional (se muestra tachado),
  //         precioNormal opcional (referencia cuando no hay precio),
  //         imagen opcional (ruta "/img/....jpg" con loading="lazy").
  productos: [
    {
      id: "coors-710",
      nombre: "Coors Banquet",
      formato: "Lata 710cc",
      precio: 1000,
      categoria: "cervezas",
      imagen: "/img/productos/coors-banquet.jpeg",
    },
    {
      id: "royal-guard-470",
      nombre: "Royal Guard",
      formato: "Lata 470cc · Six pack",
      precio: 5000,
      categoria: "cervezas",
      imagen: "/img/productos/royal-guard-470-sixpack.webp",
    },
    {
      id: "royal-guard-650",
      nombre: "Royal Guard",
      formato: "Botella 650cc · Caja x12 botellas",
      precio: 1000,
      categoria: "cervezas",
      etiqueta: "PROMO",
      imagen: "/img/productos/royal-guard-650.webp",
    },
    {
      id: "heineken-650",
      nombre: "Heineken",
      formato: "Botella 650cc",
      precio: 1100,
      categoria: "cervezas",
      etiqueta: "OFERTA",
      imagen: "/img/productos/heineken-botella.webp",
    },
    {
      id: "heineken-six",
      nombre: "Heineken",
      formato: "Lata · Six pack",
      precio: 2990,
      precioAnterior: 6000,
      categoria: "cervezas",
      etiqueta: "OFERTA",
      imagen: "/img/productos/heineken-sixpack.jpeg",
    },
    {
      id: "stella-355",
      nombre: "Stella Artois",
      formato: "Lata 355cc · Six pack",
      precio: 3000,
      categoria: "cervezas",
      imagen: "/img/productos/stella-sixpack.webp",
    },
    {
      // [COMPLETAR] precio de Becker
      id: "becker-lata",
      nombre: "Becker",
      formato: "Lata",
      precio: null,
      categoria: "cervezas",
      imagen: "/img/productos/becker-lata.jpeg",
    },
    {
      id: "pack-fiestas-patrias",
      nombre: "Pack Fiestas Patrias",
      formato: "Pipeño 5L · Granadina Mitjans · Helado de piña",
      precio: 11990,
      categoria: "combos",
      imagen: "/img/productos/pack-fiestas-patrias.png",
    },
    {
      // [COMPLETAR] precio promo (precio normal: $28.000)
      id: "gin-hendricks",
      nombre: "Gin Hendrick's",
      formato: "Botella",
      precio: null,
      precioNormal: 28000,
      categoria: "combos",
      etiqueta: "PROMO",
      imagen: "/img/productos/hendricks.png",
    },
  ],
};
