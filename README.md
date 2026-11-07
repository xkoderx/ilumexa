# Ilumexa — Iluminando México

Sitio web moderno de **Ilumexa**, empresa dedicada a la fabricación y
comercialización de productos para alumbrado público, industrial, residencial
y decorativo, así como a la comercialización de accesorios eléctricos.

El sitio está construido con [Astro](https://astro.build) y
[Tailwind CSS](https://tailwindcss.com).

## Stack

- Astro 5.16.15
- Tailwind CSS 3.4.19 (`@astrojs/tailwind` 6.0.2)
- Node.js (se recomienda una versión LTS reciente)

## Cómo correrlo

```sh
npm install
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # compila el sitio a ./dist/
npm run preview  # vista previa local de la compilación
```

## Estructura

```text
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/            # Foto del hero y logos de marcas aliadas
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro    # Landing de una sola página
│   └── styles/
│       └── global.css     # Tailwind + animación del carrusel
├── astro.config.mjs
├── package.json
└── tailwind.config.js     # Paleta azul rey y verde claro
```

## Landing de una sola página

Todo el sitio vive en `/` (`index.astro`), en secciones con ancla. El
header no redirecciona a otras páginas, solo baja a cada sección:

- `#inicio` — Hero con foto de alumbrado público, video de YouTube
  integrado y carrusel de marcas aliadas.
- `#nosotros` — Quiénes somos, proveedores y ventajas competitivas.
- `#productos` — Las 12 categorías de productos del sitio oficial.
- `#servicios` — Mantenimiento e Instalación, y Asesoría de Proyectos.
- `#contacto` — Dirección, contactos y correos. El formulario abre el
  correo del visitante ya redactado para Ilumexa (mailto, sin backend).

## Diseño

Paleta del logotipo de la empresa: **azul rey** (`royal`, `#1e3a8a` /
`#1d4ed8`) como color principal y **verde claro** (`brand-green`,
`#86efac` / `#4ade80`) como acento, definidos en `tailwind.config.js`.
Un solo tema claro, sin modo oscuro. Header blanco con el nombre en
negro (sin logotipo en imagen y sin sticky) y footer verde.

- **Logotipo:** el banner oficial (`public/images/logo-ilumexa.jpg`,
  960x219) ya no se muestra en el header ni en el footer; el nombre va
  en texto. La imagen sigue guardada en `public/images/`.
- **Hero:** foto de stock de Pexels (Darya Grey_Owl, carretera con
  farolas encendidas de noche entre la niebla, 1125x750 px, licencia
  gratuita), a todo el ancho, `h-[45vh]` en móvil y `h-[60vh]`/`h-[70vh]`
  en escritorio. Es un slider de una sola imagen, sin rotación
  automática, con los textos en blanco dentro de una tarjeta azul rey
  semitransparente y centrada, y debajo tres píldoras con las ventajas
  (asesoría, ahorro de energía, marcas líderes). Sustituye a la foto del
  sitio oficial (`images/4a.png`, 500x250 px), que se veía pixelada.
- **Video:** iframe de YouTube (`https://www.youtube.com/embed/eVwipVw4YxI`)
  con `aspect-video` y bordes redondeados.
- **Carrusel de logos:** lista duplicada (segunda copia con
  `aria-hidden="true"`) para que la animación `animate-scroll`
  (`translateX -50%`) gire sin salto. Gira siempre, sin pausa al pasar
  el mouse. La primera lista conserva el orden y las imágenes originales.
- **Corrección de build:** `Layout.astro` importa `global.css` en vez de
  enlazarlo con `<link>`, para que la animación del carrusel y los estilos
  personalizados también estén en la compilación de producción
  (GitHub Pages), no solo en desarrollo.

## Fuente de la información

El contenido de este sitio se basa en la información verificada del sitio
oficial de Ilumexa, [iluminandomexico.com.mx](https://iluminandomexico.com.mx)
(Joomla), revisado el 2026-11-06.

> **Nota:** en esa fecha solo cargaba la página de inicio del sitio oficial;
> sus páginas de Productos, Servicios y Novedades devolvían 404. Por eso aquí
> solo se usan los datos verificables de la página de inicio: el texto de
> Acerca de, los nombres de las categorías de productos y de los servicios,
> las marcas proveedoras y los datos de contacto del pie de página.

## Pendiente

- **Catálogo detallado y fichas técnicas:** las fichas de producto no se
  pudieron verificar porque las páginas correspondientes del sitio oficial
  devuelven 404. No se inventaron productos, precios ni especificaciones.
  Falta que el negocio comparta su catálogo o fichas para completar cada
  categoría.
- **Vigencia de los teléfonos:** los números publicados son los del pie
  del sitio oficial sin Nextel: Guillermina Osorno 5614-8172 y Efraín
  Quintero 551486-0549. El número 5654-4906 quedó fuera pendiente de
  confirmar, porque en el sitio oficial aparece junto a una línea Nextel.
- **Formulario de contacto:** ya abre el correo del visitante redactado
  (mailto a gop.ilumex@gmail.com con copia a gop_ilumex@hotmail.com). Un
  envío silencioso desde la web requeriría un backend o un servicio como
  Formspree / Netlify Forms.
- **Foto del hero:** la foto original es de solo 500x250 px, así que a
  todo el ancho puede verse algo suave en pantallas grandes. Una versión
  de mayor resolución mejoraría el hero.
- **Carrusel de logos:** duplicado en la versión 2 con la aprobación de
  Gepeto, para que gire sin salto; desde la versión 8 gira siempre, sin
  pausa al pasar el mouse.

## Contacto (verificado en el sitio oficial)

- Dirección: Raymundo Montoya Mz. 22 Lt. 7, Col. Benito Juárez,
  C.P. 08930, Iztacalco, México D.F.
- Contactos: Guillermina Osorno, Efraín Quintero.
- Correos: gop_ilumex@hotmail.com y gop.ilumex@gmail.com.
