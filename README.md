# Landing Page Genérica para Negocios

Plantilla de **landing page de una página** para dar **presencia online** a pequeños
negocios (botillerías, restaurantes, tiendas, etc.). El sitio muestra el negocio,
sus productos u ofertas, formas de contacto y ubicación, sin backend ni pagos.

**Ventaja clave:** todo el contenido del negocio vive en **un solo archivo**
(`src/data/negocio.js`). Para adaptarla a otro negocio basta con editar ese archivo
(textos, locales, productos, precios, enlaces, colores de marca vía config) sin tocar
los componentes.

**Ejemplo de uso:** [Botillería Hoy Me Lanzo](src/data/negocio.js) — San Miguel y San Joaquín, Santiago.

---

## Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│  Navegador (SPA estática, sin servidor)                 │
│                                                         │
│  index.html ──► main.jsx ──► App.jsx                    │
│                               │                         │
│         ┌─────────────────────┼──────────────────┐      │
│         ▼                     ▼                  ▼      │
│   Componentes UI        src/data/negocio.js   Schema.jsx│
│   (Navbar, Hero,        (ÚNICA fuente de      (JSON-LD  │
│    Ofertas, ...)         datos del negocio)    SEO)     │
│         │                     │                         │
│         └──────── utils/links.js ────────┘              │
│           (wa.me, Google Maps, formato CLP)             │
└─────────────────────────────────────────────────────────┘
                        │
                        ▼  npm run build
                  dist/  (HTML + CSS + JS estático)
                        │
            ┌───────────┴───────────┐
            ▼                       ▼
        Netlify              Cloudflare Pages
```

- **Frontend:** React 18 (solo `react` y `react-dom`) + Vite 5 (dev server y build).
- **Estilos:** Tailwind CSS 3 (mobile first, clases utilitarias, colores como variables).
- **Sin backend, sin base de datos, sin pagos online, sin librerías pesadas** (JS: 52 kB gzip).
- **Despliegue:** sitio 100% estático en `dist/`, apto para cualquier CDN.
- **Tipografías:** Bebas Neue (títulos) e Inter (cuerpo) desde Google Fonts.
- **Imágenes:** propias del negocio en `public/img/productos/`, con `loading="lazy"`.

## Stack tecnológico

| Tecnología | Versión | Rol |
| --- | --- | --- |
| React | 18.3 | UI en componentes, estado (modal 18+, filtros) |
| Vite | 5.4 | Dev server y build de producción → `dist/` |
| Tailwind CSS | 3.4 | Estilos utilitarios, variables de color, responsive |
| HTML semántico + JSON-LD | — | SEO (LiquorStore con locales y teléfono) |

## Módulos del sistema y su ubicación

| Módulo | Ubicación | Qué hace |
| --- | --- | --- |
| **Datos del negocio** | `src/data/negocio.js` | Único archivo editable: nombre, redes, WhatsApp, horario, locales, categorías, productos y precios, avisos legales |
| **Utilidades** | `src/utils/links.js` | Arma enlaces `wa.me` con mensaje prellenado, links de Google Maps codificados y formato de precios chileno (`$11.990`) |
| **App / orquestador** | `src/App.jsx` | Orden de secciones y estado del aviso de mayoría de edad |
| **Navbar** | `src/components/Navbar.jsx` | Barra fija con logo, enlaces ancla y botón "Pedir ahora" (menú hamburguesa en móvil) |
| **Hero** | `src/components/Hero.jsx` | Título, subtítulo y CTAs principales (WhatsApp / PedidosYa) |
| **Ofertas destacadas** | `src/components/Ofertas.jsx` | Tarjetas grandes de productos con etiqueta OFERTA/PROMO |
| **Productos** | `src/components/Productos.jsx` | Filtros por categoría + grilla de tarjetas + aviso de precios |
| **Tarjeta de producto** | `src/components/ProductoCard.jsx` | Foto o ícono, precio, sello y botón "Pedir" por WhatsApp |
| **Cómo pedir** | `src/components/ComoPedir.jsx` | 3 pasos del proceso de pedido |
| **Locales** | `src/components/Locales.jsx` | Tarjetas por local con dirección y "Cómo llegar" (Google Maps) |
| **Footer** | `src/components/Footer.jsx` | Contacto, medios de pago y aviso legal (id `#contacto`) |
| **WhatsApp flotante** | `src/components/WhatsAppFloat.jsx` | Botón flotante en todas las pantallas |
| **Modal 18+** | `src/components/EdadModal.jsx` | Control de mayoría de edad (solo estado React) + pantalla de salida |
| **Schema SEO** | `src/components/Schema.jsx` | JSON-LD `LiquorStore` generado desde `negocio.js` |
| **Íconos** | `src/components/Iconos.jsx` | SVG inline (cerveza, combo, pin, reloj, Instagram, WhatsApp) |
| **Reveal** | `src/components/Reveal.jsx` | Animación de aparición al hacer scroll (sin librerías) |
| **Estilos globales** | `src/index.css` | Tailwind + botones (`.btn-primario`, `.btn-secundario`, `.btn-suave`) + motion reducido |
| **Config. de marca** | `tailwind.config.js` | Colores (negro/dorado/crema/turquesa) y tipografías |
| **Config. de build** | `vite.config.js`, `postcss.config.js`, `netlify.toml` | Build, Tailwind y deploy en Netlify |
| **Assets** | `public/` | `logo.png` (agregar), `favicon.svg`, `img/productos/*.jpg|webp|png` |

## Requisitos

- **Node.js 18+** y npm
- Cuenta gratuita en [Netlify](https://www.netlify.com) y/o [Cloudflare](https://dash.cloudflare.com)
- (Opcional) `netlify-cli` o `wrangler` para desplegar desde terminal

## Comandos

```bash
npm install        # instalar dependencias (una sola vez)
npm run dev        # desarrollo local → http://localhost:5173
npm run build      # build de producción → carpeta dist/
npm run preview    # probar el build localmente en http://localhost:4173
```

## Deploy

### Netlify (opción 1: panel web)

1. Sube el proyecto a GitHub/GitLab
2. En Netlify: **Add new site → Import an existing project**
3. Configuración (ya viene en `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Netlify (opción 2: terminal)

```bash
npm install -g netlify-cli
netlify deploy --prod    # desde la raíz del proyecto
```

### Cloudflare Pages

1. En Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**
2. Framework preset: **Vite**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

O desde terminal:

```bash
npm run build
npx wrangler pages deploy dist
```

## Módulos opcionales (se activan en `negocio.js`)

| Módulo | Cómo activarlo | Si queda vacío |
| --- | --- | --- |
| **WhatsApp** ✅ activo | `whatsapp: "56990509129"` | Se ocultan flotante, hero y botón "Pedir" |
| **Delivery por PedidosYa** | `pedidosYa: "https://www.pedidosya.cl/..."` | Se ocultan esos botones |
| **Horario** | `horario: "Lun a Dom, 10:00 a 22:00"` | Se oculta la sección de horario |
| **Medios de pago** | `mediosDePago: ["Efectivo", "Débito"]` | Se oculta el bloque |
| **Fotos de productos** | `imagen: "/img/productos/archivo.webp"` | La tarjeta muestra un ícono |

## Personalización

- **Colores de marca:** `tailwind.config.js` → `theme.extend.colors`
  (`negro`, `dorado`, `crema`, `turquesa`) + `index.css` para botones.
- **Tipografías:** link de Google Fonts en `index.html` + `fontFamily` en `tailwind.config.js`.
- **Contenido:** solo `src/data/negocio.js`.
- **SEO:** título, description y Open Graph en `index.html` (usar URL absoluta en
  `og:image` una vez publicado para que WhatsApp/Instagram muestren la imagen).

## SEO incluido

- `lang="es-CL"`, `<title>`, meta description, Open Graph y Twitter Card
- HTML semántico (`header`, `main`, `section`, `article`, `footer`) y `alt` en imágenes
- JSON-LD `LiquorStore` con locales y teléfono (generado desde `negocio.js`)
- `favicon.svg` en `public/`

## Imágenes de productos

Las fotos viven en `public/img/productos/` y se enlazan con el campo `imagen` de cada
producto en `negocio.js` (si `imagen` no existe, la tarjeta muestra el ícono).

Para **agregar o reemplazar una foto**: pon el archivo en `public/img/productos/`
(por ejemplo `mi-foto.jpg`) y agrega `imagen: "/img/productos/mi-foto.jpg"` al producto.
Consejos: formato WebP o JPEG, cuadradas o verticales, mínimo 600 px, y optimizadas
(macOS: `sips -Z 800 foto.png --out foto.jpg` reduce el peso sin perder calidad útil).

### Créditos de imágenes

| Archivo | Producto | Origen | Licencia |
| --- | --- | --- | --- |
| Todas (excepto Hendrick's) | Productos de la botillería | Fotos propias del negocio | Sin restricción |
| `hendricks.png` | Gin Hendrick's | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hendrick%27s_Gin_-_Bottle.png) — Mikaf1fan / Bruce The Deus | CC BY-SA 4.0 |

La licencia CC BY-SA del Hendrick's exige atribución: deja esta línea. Si reemplazas
esa foto por una propia, puedes borrar la tabla.

## Adaptar esta plantilla a otro negocio

1. Editar `src/data/negocio.js` (nombre, locales, productos, enlaces).
2. Cambiar colores/tipografías en `tailwind.config.js`.
3. Reemplazar `public/logo.png` y `public/favicon.svg`.
4. Actualizar `<title>`, description y OG en `index.html`.
5. Revisar los campos pendientes:

### Campos por completar (ejemplo Botillería Hoy Me Lanzo)

- [x] `whatsapp` → `56990509129`
- [ ] `horario`
- [ ] `pedidosYa` (enlace completo)
- [ ] `mediosDePago`
- [ ] Precio de Becker y precio promo del Gin Hendrick's
- [ ] Revisar las fotos de productos (`public/img/productos/`)
- [ ] `public/logo.png` (si no existe, se muestra el nombre en texto)

## Notas legales

- Aviso 18+ al ingresar (respuesta solo en estado de React, sin localStorage).
- Footer con prohibición de venta a menores y advertencia sobre el abuso del alcohol.
- Sin carrito ni pagos online: los pedidos se coordinan por WhatsApp o PedidosYa.
