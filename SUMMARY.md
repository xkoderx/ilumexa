# Resumen — Modernización local de ilumexa (rama muse, trabajo local)

Fecha: 2026-11-06.
Origen: copia local de `xkoderx/ilumexa` (main, 2 commits) en
`~/workspace/ilumexa-muse/`. **No se subió nada a GitHub**: la creación de la
rama `muse` en el repositorio falló con 403 porque la app de Muse no está
instalada, así que este trabajo es solo local, listo para revisar antes de
subirlo por otro medio.

## Build

- `npm install` — OK.
- `npm run build` — **OK, pasó sin errores**. 5 páginas generadas en `dist/`:
  `/`, `/about`, `/products`, `/services`, `/contact`.
- No hubo errores de build que corregir.

## Archivos cambiados

- `README.md` — Reescrito por completo: qué es Ilumexa, stack
  (Astro 5.16.15 + Tailwind 3), cómo correr dev/build/preview, estructura,
  páginas, fuente verificada y pendientes.
- `src/pages/about.astro` — Ampliado: resumen verificado de la empresa,
  compromiso, lista completa de 10 proveedores (incluye LEXALITE),
  4 ventajas competitivas, áreas de iluminación y enlace al video de YouTube.
  Corregido “Phillips” → “Philips”.
- `src/pages/products.astro` — Reescrito: las 12 categorías del menú oficial
  (Alumbrado Público, Alumbrado Exterior, Iluminación LED, Luminario,
  Postes, Alumbrado Decorativo, Alumbrado Industrial, Postes - Fichas
  Técnicas, Exterior Decorativo, Interior Decorativo, Mobiliario Decorativo,
  Accesorios y Bases de Concreto), cada una solo con su nombre y una
  descripción genérica basada en el nombre. **Eliminadas** las imágenes
  rotas `/images/luminaria-led.jpg`, `/images/industrial-light.jpg` y
  `/images/decor-light.jpg`, que no existen en `public/images/`.
  Botón “Más información” ahora enlaza a `/contact`. Nota de que las fichas
  detalladas están pendientes.
- `src/pages/services.astro` — **Nuevo**: los 2 servicios verificados,
  Mantenimiento e Instalación y Asesoría de Proyectos, con descripciones
  genéricas y nota de que el detalle está pendiente por el 404 oficial.
- `src/components/Header.astro` — Añadido el enlace “Servicios” al menú
  (Inicio, Acerca de, Productos, Servicios, Contacto).
- `src/pages/contact.astro` — Añadido bloque con la dirección, los contactos
  (Guillermina Osorno, Efraín Quintero) y los correos verificados encima del
  formulario, con la aclaración de que el formulario aún no tiene backend y
  no envía mensajes.
- `src/components/Footer.astro` — Añadidas la dirección y los dos correos
  verificados, además del © 2026.

## Archivos que NO se tocaron

- `src/pages/index.astro` — **El carrusel de logos quedó exactamente igual**:
  mismo orden, imágenes, clases y animación. Verificado por hash SHA-256
  antes y después del trabajo:
  `3291c8efa9c1be54ea996b9599c1d826e140520ca931545b529813cc95c08fe4`.
  No se duplicó ni se mejoró en este paso.
- `src/styles/global.css`, `astro.config.mjs`, `tailwind.config.js`,
  `package.json` y las imágenes de `public/images/` no se modificaron.

## Qué se verificó

- Fuente: sitio oficial `iluminandomexico.com.mx`, revisado el 2026-11-06.
  Solo cargaba su página de inicio; Productos, Servicios y Novedades
  devolvían 404, por lo que su contenido detallado no se pudo verificar.
- Empresa: fabricación y comercialización de productos para alumbrado
  público, industrial, residencial y decorativo, y accesorios eléctricos.
- Proveedores: TORK, OSRAM, LUMICOM, SOLA BASIC, Philips, AMG, MAGG,
  TECNO LIGHT, LEXALITE, FORLIGHTING.
- Ventajas: asesoramiento en desarrollo de proyectos, bajos costos en
  suministros, garantía de bajos costos de mantenimiento, modernos sistemas
  de ahorro de energía.
- Categorías (12) y servicios (2): solo sus nombres, tomados del menú
  oficial.
- Contacto: Raymundo Montoya Mz. 22 Lt. 7, Col. Benito Juárez,
  C.P. 08930, Iztacalco, México D.F.; Guillermina Osorno, Efraín Quintero;
  gop_ilumex@hotmail.com y gop.ilumex@gmail.com.
- Video: https://youtu.be/eVwipVw4YxI
- No se inventaron precios, fichas técnicas, productos específicos,
  WhatsApp ni redes sociales. No se publicaron números de teléfono.

## Qué quedó pendiente

- **Catálogo y fichas técnicas:** las fichas de producto no se pudieron
  verificar (404 oficial). Falta que el negocio comparta su catálogo o
  fichas para completar cada categoría con datos reales.
- **Vigencia de los teléfonos:** no se publicaron números; hay que confirmar
  cuáles siguen vigentes antes de añadirlos.
- **Formulario de contacto:** sigue sin backend; hay que conectarlo a un
  servicio de envío o a un backend propio.
- **Subir el trabajo a GitHub:** la rama `muse` no se pudo crear por el 403
  (app no instalada). Este trabajo local hay que subirlo por otro medio
  cuando Gepeto lo apruebe (por ejemplo, clonando con sus credenciales y
  haciendo push, o creando la rama desde GitHub).
- **Carrusel:** cualquier mejora (por ejemplo, duplicar los logos para un
  giro continuo) debe proponerse primero; en este paso no se hizo.

---

# Versión 2 — Diseño moderno y elegante (2026-11-07)

Base sincronizada con la rama `muse` de GitHub (commit `6abfcf4`, “tailwindcss
add + chavo intervention + updated readme”). La copia local solo se
diferenciaba de esa rama en `astro.config.mjs` (la rama ya trae la
integración de Tailwind) y en el formulario mailto, así que se copió la
configuración de Tailwind de la rama y se conservó el mailto local. La rama
`muse` NO trae el formulario mailto: se conservó el `contact.astro` local
(`id="contact-form"`, mailto a `gop.ilumex@gmail.com` con copia a
`gop_ilumex@hotmail.com`) y el texto del README sobre mailto. No se subió
nada a GitHub en este paso.

## Build (v2)

- `npm install` — OK (sin cambios).
- `npm run build` — **OK, pasó sin errores**. 5 páginas generadas en `dist/`:
  `/`, `/about`, `/products`, `/services`, `/contact`.
- Verificado en el HTML compilado: iframe de YouTube, foto del hero,
  logotipo en Header y Footer, carrusel duplicado (11 + 11 logos),
  `id="contact-form"` y mailto con copia, y `@keyframes scroll` en el CSS
  compilado.

## Paleta y diseño

- **Azul rey** (`royal`, `#1e3a8a` / `#1d4ed8`) como color principal y
  **verde claro** (`brand-green`, `#86efac` / `#4ade80`) como acento, del
  logotipo de la empresa, definidos en `tailwind.config.js` y aplicados en
  hero, botones, enlaces, títulos de sección, tarjetas, Header y Footer.
  El modo oscuro sigue funcionando (`darkMode: class`).
- Tipografía con más jerarquía (`tracking-tight`, títulos `text-3xl` /
  `text-4xl`, subtítulos en mayúsculas con `tracking-[0.2em]`), secciones
  con más aire (`py-20` / `md:py-24`), tarjetas con sombras suaves
  (`shadow-md`, `hover:shadow-xl`, `hover:-translate-y-1`), bordes
  redondeados (`rounded-2xl`) y una barra superior con degradado azul
  rey → verde claro en las tarjetas de Productos y Servicios.

## Logotipo

- `public/images/logo-ilumexa.jpg` (banner oficial de 960x219, con el
  skyline nocturno y “Ilumexa - Iluminando a México e Innovando” a la
  derecha). **No** se usó `images/4a.png` como logo: es una foto de
  alumbrado, no el logo.
- En el Header va en un contenedor fijo `w-44 h-12` con `object-cover` y
  `object-right`, que recorta el banner para que se lea “Ilumexa” sin
  deformarlo, y al hacer clic va a `/`. En el Footer va a tamaño pequeño
  (`w-40 h-11`) con el mismo recorte. Cómo se resolvió: el banner es
  mucho más ancho que alto, así que mostrarlo completo a `h-12` dejaría
  el texto ilegible; el recorte a la derecha muestra el panel del logo.
  Verificado en el HTML compilado: el logo aparece 2 veces en Inicio
  (Header y Footer).

## Hero con foto de la calle (pedido nuevo de Gepeto)

- Foto verificada del sitio oficial (`images/4a.png`), ya descargada en
  `public/images/calle-iluminada.jpg`: alumbrado público nocturno en una
  avenida, **500x250 px**.
- Hero a todo el ancho, responsivo: `h-[45vh]` (mínimo 380 px) en móvil,
  `h-[60vh]` en escritorio medio y `h-[70vh]` en escritorio grande,
  `object-cover`, con degradado oscuro azul rey encima (horizontal y
  vertical) para que el título y el texto se lean bien. El título
  “Ilumexa” y el texto principal van encima de la foto, alineados a la
  izquierda.
- Es un slider tipo carrusel de **una sola imagen** (`role="region"`,
  `aria-roledescription="carrusel"`), con un solo indicador: no se
  inventaron más fotos ni hay rotación automática.
- **Limitación:** la foto original es de solo 500x250 px, así que a todo
  el ancho puede verse algo suave o pixelada en pantallas grandes; no se
  escaló con inventos. Una versión de mayor resolución mejoraría el hero.

## Video de YouTube

- Integrado con iframe en Inicio, después del hero:
  `https://www.youtube.com/embed/eVwipVw4YxI`, con `title="Video de Ilumexa"`,
  `allowfullscreen`, `aspect-video` y borde redondeado. No se inventó otro
  video. En Acerca de se mantiene el enlace al video.

## Carrusel de logos (duplicado, aprobado por Gepeto)

- En `src/pages/index.astro`, la lista de 11 logos se duplicó: la segunda
  copia lleva `aria-hidden="true"`, para que la animación `animate-scroll`
  (`translateX -50%`) gire sin salto. Se añadió pausa al pasar el mouse
  (`hover:[animation-play-state:paused]` y regla en `global.css`).
- La primera lista conserva el orden y las imágenes originales; no se
  quitó ninguna marca. Verificado: `tork.png` aparece 2 veces en el HTML
  compilado.
- **Corrección importante:** `Layout.astro` enlazaba `global.css` con
  `<link>`, así que en la compilación de producción ese CSS no se incluía
  y la animación del carrusel no funcionaba fuera de desarrollo. Ahora
  `Layout.astro` importa `global.css`, y el CSS compilado sí trae
  `@keyframes scroll` y `.animate-scroll`. Esto afecta también a GitHub
  Pages.

## Qué cambió en cada página

- **Inicio (`/`):** hero nuevo con la foto de la calle a todo el ancho y
  degradado azul rey; video de YouTube integrado; carrusel duplicado con
  pausa al pasar el mouse y bordes con degradado; llamada a la acción con
  fondo azul rey y botón verde claro; más espaciado entre secciones.
- **Acerca de (`/about`):** mismo contenido verificado, con mejor
  jerarquía: proveedores como insignias, 4 ventajas en tarjetas
  numeradas, 3 áreas en tarjetas azul rey, y más espaciado.
- **Productos (`/products`):** las mismas 12 categorías, en tarjetas con
  barra superior en degradado, número, sombra suave y más espaciado; nota
  de fichas pendientes en un recuadro azul.
- **Servicios (`/services`):** los mismos 2 servicios, en tarjetas
  grandes con numeración, más espaciado y una llamada a la acción nueva
  al final.
- **Contacto (`/contact`):** mismos datos verificados y mismo formulario
  mailto (sin cambios de comportamiento), ahora en dos columnas: tarjeta
  azul rey con ubicación, contactos y correos, y formulario con campos
  redondeados y botón azul rey.
- **Header:** fijo en la parte superior (`sticky`), con logotipo, navegación
  (Inicio, Acerca de, Productos, Servicios, Contacto), botón de tema y
  navegación secundaria en móvil. **Footer:** fondo azul rey oscuro, con
  logotipo pequeño, contacto y navegación en tres columnas.
- **Layout:** ahora importa `global.css` (corrección del carrusel en
  producción), añade `viewport`, descripción y título con sufijo
  “| Ilumexa”; el contenido principal ya no lleva `p-6` genérico, cada
  página controla su propio contenedor.

## Archivos tocados en la v2

- `tailwind.config.js` — paleta `royal` y `brand-green`.
- `src/styles/global.css` — pausa del carrusel, selección verde clara,
  desplazamiento suave.
- `src/layouts/Layout.astro` — importa `global.css`, meta viewport y
  descripción, título con sufijo.
- `src/components/Header.astro` — logotipo + navegación moderna.
- `src/components/Footer.astro` — fondo azul rey, logotipo y columnas.
- `src/pages/index.astro` — hero con foto, video, carrusel duplicado, CTA.
- `src/pages/about.astro`, `src/pages/products.astro`,
  `src/pages/services.astro` — rediseño con el mismo contenido verificado.
- `src/pages/contact.astro` — rediseño en dos columnas; mailto intacto.
- `README.md` — sección de diseño (v2) y estructura actualizada.
- `SUBIR_A_GITHUB.md` — lista actualizada a los 13 archivos de la v2.
- `cambios-rama-muse.zip` — regenerado con los 13 archivos de la v2
  (antes 7 de la v1); verificado con `unzip -t`, sin errores.
- `public/images/logo-ilumexa.jpg` y `public/images/calle-iluminada.jpg`
  (archivos nuevos que hay que subir al repo).

## Qué quedó pendiente (para que Gepeto apruebe y fusione a main)

- Revisar la v2 en local y aprobarla; luego subirla a la rama `muse`
  (guía actualizada en `SUBIR_A_GITHUB.md`, zip regenerado), fusionarla
  a `main` y publicar con GitHub Pages. Nada se subió a GitHub desde aquí.
- **Catálogo y fichas técnicas:** siguen pendientes (404 oficial).
- **Vigencia de los teléfonos:** no se publicó ninguno; confirmar cuáles
  siguen vigentes.
- **Formulario de contacto:** sigue con mailto (sin backend); un envío
  silencioso requeriría backend o un servicio como Formspree / Netlify
  Forms.
- **Foto del hero:** conseguir una versión de mayor resolución que
  500x250 px para que no se vea suave en pantallas grandes.

---

# Versión 3 — Correcciones de Patron (2026-11-07)

Patron revisó la v2 ya subida a la rama `muse` y pidió tres cambios:

1. **Quitar el logo del header.** El banner oficial recortado no se veía
   como el logo de la página. Se quitó la imagen del Header y se puso el
   nombre "Ilumexa" en texto: "I" blanca sobre cuadro azul rey + nombre
   en azul rey y subtítulo "Iluminando a México" en verde. La imagen
   `logo-ilumexa.jpg` sigue en `public/images/` y el footer aún la
   muestra; si Patron quiere, también se quita de ahí.
2. **Textos del hero dentro de una tarjeta semitransparente.** Antes iban
   directos sobre la foto y en las zonas claras no se leían. Ahora van en
   una tarjeta `bg-royal-950/60` con `backdrop-blur-md`, borde blanco
   tenue y sombra; el degradado sobre la foto se suavizó.
3. **Layout con la paleta del logo en toda la página.** Fondo general
   azul rey muy claro (`bg-royal-50` en `Layout.astro`); sección de video
   en banda blanca; carrusel de marcas en banda verde claro
   (`bg-brand-green-50`); páginas internas con banda de encabezado en
   degradado azul rey donde el texto blanco sí tiene fondo oscuro detrás;
   notas de Productos/Servicios en verde claro. Se auditó el HTML
   compilado: cada `text-white` está sobre fondo oscuro o de color
   (tarjeta del hero, bandas azul rey, botones azul rey, footer).

## Build (v3)

- `npm run build` — **OK, pasó sin errores**. 5 páginas.
- Verificado en `dist/`: `logo-ilumexa` aparece 1 sola vez en Inicio
  (footer); tarjeta del hero (`bg-royal-950/60`, `backdrop-blur-md`)
  presente; banda `from-royal-900 via-royal-800` en las 4 páginas
  internas.

## Archivos tocados en la v3

- `src/components/Header.astro` — logo en texto, sin imagen.
- `src/layouts/Layout.astro` — fondo `bg-royal-50`.
- `src/pages/index.astro` — tarjeta semitransparente en el hero, banda
  blanca para el video, banda verde claro para el carrusel.
- `src/pages/about.astro`, `src/pages/products.astro`,
  `src/pages/services.astro`, `src/pages/contact.astro` — banda de
  encabezado en degradado azul rey; notas en verde claro (Productos y
  Servicios).

---

# Versión 4 — Ajustes de Patron (2026-11-07)

1. **Hero: tarjeta sin borde y centrada.** Se quitó el anillo blanco
   (`ring-1 ring-white/25`) y la tarjeta quedó centrada en el hero, con
   el texto, la insignia y los botones centrados.
2. **CTA "Ilumina tus proyectos con nosotros" en claro.** Ya no es fondo
   azul rey con texto blanco: ahora es banda verde claro con título azul
   rey, texto gris oscuro y botón azul rey. El CTA de Servicios
   ("¿Tienes un proyecto en mente?") se cambió igual para no repetir el
   problema.
3. **Footer sin logo y con color.** Se quitó la imagen del logo; el
   nombre va en texto ("Ilumexa." blanco con punto verde y subtítulo
   verde) y arriba lleva una barra de color con el degradado azul rey →
   verde claro del logo.
4. **Interruptor de tema rehecho.** El botón anterior (🌞 / 🌙) solo
   cambiaba la clase `dark` y se perdía al cambiar de página, por eso no
   funcionaba del todo. Ahora: `Layout.astro` trae un script en línea en
   `<head>` que aplica el tema guardado antes de pintar (sin parpadeo),
   leyendo `localStorage` (`ilumexa-theme`) o la preferencia del sistema;
   el botón es una pastilla con sol y luna y una bolita que se desliza,
   guarda la elección al hacer clic y sincroniza `aria-checked`. Sigue
   en el header, a la derecha de la navegación.

---

# Versión 5 — Header azul, footer verde y tema visible (2026-11-07)

Patron notó que el header y el footer no cambiaban con el tema (el
footer no tenía ninguna variante `dark:`) y que los textos del carrusel
tampoco se notaba que cambiaran.

1. **Header azul rey.** Fondo `royal-800` en claro y `royal-950` en
   oscuro, con textos blancos en los dos temas: nombre en blanco,
   subtítulo verde claro, enlaces `royal-100` con hover blanco
   translúcido, botón Contacto verde claro con texto azul rey, y la
   pastilla del interruptor ahora es blanca translúcida para que se vea
   sobre el azul.
2. **Footer verde.** Fondo `brand-green-700` en claro y
   `brand-green-900` en oscuro (se añadieron los tonos 800 `#166534` y
   900 `#14532d` a la paleta en `tailwind.config.js`), textos
   `brand-green-50`/`brand-green-100` que cambian con el tema, títulos
   en blanco y arriba una franja azul rey que une los dos colores del
   logo.
3. **Textos del carrusel con cambio visible.** La sección ahora es
   verde claro en modo claro y azul rey oscuro (`dark:bg-royal-950`) en
   modo oscuro; la insignia pasó a `brand-green-700` /
   `dark:text-brand-green-300` y la nota a `slate-600` /
   `dark:text-slate-300`. (Las variantes oscuras sí existían en el CSS
   compilado de la v4; lo que no cambiaba era el footer, que no tenía
   variantes `dark:`, y el header, que cambiaba muy poco.) Los logos del
   carrusel no se tocaron: son imágenes y conservan su fondo.

---

# Versión 6 — Sin modo oscuro, sin "I", textos en blanco y botón negro (2026-11-07)

Patron dijo que los colores se estaban haciendo un lío porque ni se
mostraban, así que se simplificó todo:

1. **Sin modo oscuro.** Se quitó el interruptor del header, su script y
   el script de `<head>` que aplicaba el tema, y se borraron las 41
   variantes `dark:` de todos los archivos `src/`. Ya no hay `dark` en
   el HTML ni en el CSS compilado: el sitio tiene un solo tema, claro,
   con header azul rey y footer verde. (En `tailwind.config.js` se dejó
   `darkMode: "class"` con un comentario: como nada añade la clase
   `dark`, el modo oscuro no se puede activar por accidente.)
2. **Sin la "I" del header.** Se quitó el cuadrito con la "I"; el nombre
   quedó solo en texto, "Ilumexa" en blanco con el punto verde.
3. **Texto del hero en blanco.** El subtítulo "Soluciones de
   iluminación pública, industrial, residencial y decorativa con marcas
   líderes" pasó de `text-royal-100` a `text-white` sobre la tarjeta
   oscura del hero.
4. **Botón "Contáctanos" con texto negro.** En "Ilumina tus proyectos
   con nosotros" (y en el CTA de Servicios, igual) el botón ahora es
   verde claro con el texto en negro, para que se lea bien.

**Nota para ver el sitio:** hay que correrlo con servidor (`npm run dev`
o `npm run preview` dentro de la carpeta), no con doble clic al
`index.html`, porque las rutas de estilos e imágenes son absolutas y con
doble clic no cargan. Eso explica en parte que los colores "ni se
mostraran".

---

# Versión 7 — Header blanco con logo negro y sin sticky (2026-11-07)

Patron veía el fondo del header en blanco y el texto del logo también
en blanco, así que no se veía:

- **Header blanco con logo en negro.** Fondo `bg-white` con borde
  inferior azul claro; "Ilumexa" en `text-black` con el punto en verde
  oscuro y el subtítulo en verde oscuro (`brand-green-700`); enlaces en
  azul rey (`royal-800`) con hover en azul claro. El botón Contacto
  sigue verde claro con texto azul rey. (Se abandona el header azul rey
  de la v5: en la pantalla de Patron el fondo se veía blanco y el texto
  blanco era invisible.)
- **Sin sticky.** Se quitó `sticky top-0 z-50`: el header ya no sigue al
  bajar, se queda arriba de la página.

---

# Versión 8 — Carrusel sin pausa ni texto (2026-11-07)

- Se quitó el texto "Pasa el cursor sobre el carrusel para pausarlo" y
  la pausa misma: ya no hay `hover:[animation-play-state:paused]` en el
  carrusel ni regla `.animate-scroll:hover` en `global.css`. El carrusel
  sigue girando siempre, sin detenerse al pasar el mouse.

---

# Versión 9 — Landing de una sola página y textos en negro (2026-11-07)

Patron quería una landing page: una sola página para que al clicar algo
del header no se redireccione a otra página.

- **Todo en `index.astro`.** El contenido de las antiguas páginas
  Acerca de, Productos, Servicios y Contacto ahora vive en secciones con
  ancla en el inicio: `#inicio` (hero), video, carrusel de marcas,
  `#nosotros`, `#productos` (12 categorías), `#servicios` (2 servicios),
  CTA y `#contacto` (datos + formulario mailto). El header y el footer
  enlazan a las anclas; el desplazamiento es suave
  (`scroll-behavior: smooth` en `global.css`).
- **Páginas separadas eliminadas.** Se borraron `about.astro`,
  `products.astro`, `services.astro` y `contact.astro`. El build genera
  **1 sola página**.
- **Textos blancos a negro.** En Nosotros, Productos, Servicios y
  Contacto ya no hay texto blanco: las bandas de encabezado azul rey con
  texto blanco se quitaron, las tarjetas azul rey con texto blanco
  (áreas, datos de contacto) pasaron a tarjetas blancas con texto negro,
  y los botones azul rey con texto blanco pasaron a verde claro con texto
  negro (como el botón de "Ilumina tus proyectos"). El único texto blanco
  que queda es el del hero (sobre la tarjeta oscura de la foto) y el del
  footer verde, donde se lee bien. Verificado en el HTML compilado.
- **README actualizado** a la landing de una sola página.

---

# Versión 10 — Foto nueva en alta resolución y diseño más profesional (2026-11-07, COMPLETA en la rama muse)

Patron pidió cambiar la foto del hero (tenía razón: 500x250 px era muy
poca resolución) y un diseño más profesional, porque todo se veía muy
simple. Textos subidos en commit 4bab7be (verificado) y foto nueva
subida por la web de GitHub en commit 350c916 (2026-11-07 16:25 CST,
verificado en el navegador: 2400x1600). La aprobación para el push de
textos expiró dos veces (~16:00 CST) y se logró al reintentar cuando
Patron lo pidió (~16:24 CST).

1. **Foto nueva.** Carretera con farolas encendidas de noche entre la
   niebla, de Darya Grey_Owl en Pexels (licencia gratuita),
   2400x1600 px en JPEG real — casi cinco veces el ancho de la anterior
   (500x250 px, que además era PNG con nombre .jpg). Se guarda con el
   mismo nombre (`public/images/calle-iluminada.jpg`) y lleva crédito
   discreto en la esquina del hero con enlace a la foto en Pexels. La
   foto anterior era del sitio oficial; esta es de stock, parecida en
   tema (alumbrado público nocturno en carretera). Hay que subirla a
   GitHub por la web, porque el conector no acepta binarios. (La primera versión descargada era 1125x750 px; luego se sustituyó por
   la misma foto a 2400x1600 px. La foto alternativa (Vova Kras) pasó a
   `public/images/avenida-noche.jpg` y se usa en la sección Nosotros
   desde la v11.)
2. **Tipografía Inter.** Se carga Inter de Google Fonts y se pone como
   `font-sans` en `tailwind.config.js`, con fallback al sistema.
3. **Barra superior de contacto.** Franja azul rey oscuro sobre el
   header con los dos teléfonos, el correo y el lema "Iluminando a
   México e Innovando".
4. **Hero con ventajas.** Debajo de la tarjeta, tres píldoras de vidrio
   con iconos y afirmaciones verificadas: Asesoría de proyectos, Ahorro
   de energía y Marcas líderes.
5. **Secciones numeradas.** Los subtítulos llevan número: 01 Nosotros,
   02 Catálogo, 03 Servicios, 04 Contacto.
6. **Iconos en tarjetas.** Las 12 tarjetas de producto llevan un icono
   de foco; las de servicio, rayo (Mantenimiento) y chat (Asesoría); los
   datos de contacto, iconos de ubicación, teléfono y correo.

---

# Versión 11 — Rediseño WOW con estructura de landing gratuita AstroWind (2026-11-07)

Patron dijo que le gusta la v10 pero que le falta un toque profesional
para decir "WOW, este sitio es increíble", y pidió basarlo en un
landing gratuito de otro sitio, con toda la información dada, sin tocar
el carrusel de marcas.

Referencia: **AstroWind**, plantilla gratuita de Astro + Tailwind
(licencia MIT, la más usada del ecosistema), estructura: hero, logos,
features, steps, stats, CTA. No se copió su código ni sus textos, solo
la estructura de secciones, adaptada a Ilumexa con contenido verificado.

Cambios:
1. **Hero más espectacular.** Más alto (88-92vh), zoom lento Ken Burns
   sobre la foto, brillos decorativos de la paleta, nombre "Ilumexa" con
   degradado blanco a verde, entrada escalonada de los textos (fade-up) y
   botones con escala al pasar el mouse. El punto indicador se cambió por
   una flecha "Desliza" con rebote.
2. **Banda de cifras** (nueva, solo números verificados): 12 categorías
   de productos, 2 servicios, 10 marcas líderes, sobre degradado azul rey.
3. **Video** enmarcado más grande (rounded-3xl, sombra 2xl).
4. **Nosotros en dos columnas.** A la derecha, segunda foto: avenida de
   noche con farolas (Vova Kras / Pexels, 2400x1800,
   `public/images/avenida-noche.jpg`), con zoom al pasar el mouse y una
   tarjeta flotante animada con el dato verificado "10 marcas líderes".
   Hay que subirla por la web de GitHub (binario).
5. **Productos:** tarjetas con reveal escalonado al hacer scroll, más
   elevación al pasar el mouse y el icono que se vuelve degradado.
6. **Cómo trabajamos** (nueva sección, pasos 01-03): Asesoría de
   proyectos → Instalación → Mantenimiento, sacados de los 2 servicios
   verificados, con línea punteada conectora en escritorio.
7. **Servicios** ahora 04 y **Contacto** 05. La llamada a la acción es
   una banda con degradado azul rey, brillos y botón verde.
8. **Reveal al hacer scroll** en todas las secciones (IntersectionObserver
   en Layout.astro, clases en global.css), con respeto a
   `prefers-reduced-motion`. El carrusel de marcas NO se tocó.

---

# Versión 12 — Sin texto blanco, header sticky con hamburguesa, parallax y fondos alternos (2026-11-07)

Patron revisó la v11: le gusta mucho más, pero pidió pulir detalles.

1. **Cero texto blanco.** Todo el texto es negro u oscuro: la tarjeta
   del hero pasó a vidrio claro (`bg-white/85`) con degradado azul-verde
   en el nombre y subtítulo gris oscuro; las píldoras, la flecha
   "Desliza" y el crédito de la foto son píldoras claras; la banda de
   cifras y la llamada a la acción son claras con números y textos
   oscuros; la barra superior es azul muy claro con texto azul oscuro.
   Verificado: cero `text-white` en el HTML compilado (ni siquiera los
   iconos: los de los pasos y las tarjetas son azul rey y verde claro).
2. **Header sticky.** El header blanco sigue al bajar (`sticky top-0`).
   En móvil y tableta hay menú de hamburguesa animado: las 3 rayas se
   convierten en X y el panel se despliega con animación; al pulsar un
   enlace se cierra solo y la navegación sigue a su ancla.
3. **Parallax en el carrusel.** La sección de marcas aliadas lleva de
   fondo la foto de la avenida, fija al hacer scroll en escritorio, con
   un velo claro encima. En táctil y pantallas pequeñas se desactiva.
   El carrusel en sí NO se tocó (mismo orden, imágenes y animación).
4. **El carrusel debajo del hero.** A petición de Patron, el carrusel de
   marcas aliadas va justo debajo del hero y sustituye a la lista de
   texto "Nuestros proveedores" (esa lista se quitó).
5. **Sin numeración.** Se quitaron los números de los subtítulos de
   sección, de las tarjetas de producto y servicio, y de los pasos (que
   ahora llevan iconos: chat, rayo y check).
6. **Sin redundancia.** Se quitaron de Nosotros la cuadrícula de ventajas
   (todo eso ya está en los párrafos y en el hero), la de áreas (ya está
   en el párrafo) y el enlace "Conoce más de Ilumexa en video" (el video
   ya tiene su sección). Se quitaron las notas de "fichas técnicas
   pendientes" y "detalle de servicios pendiente".
7. **Fondos alternos azul rey / blanco.** Video en blanco, Quiénes somos
   en azul, Catálogo en blanco, Cómo trabajamos en azul, Servicios en
   blanco y Contacto en azul. El azul es un tono claro (royal-100) para
   que todo el texto oscuro se siga leyendo bien, sin texto blanco.
8. **Footer verde vida.** Fondo verde claro (brand-green-400) con todos
   los textos en negro y la franja azul rey arriba.

Estado: COMPLETA en la rama muse, commit 37fc507 (verificado leyendo
la rama: carrusel, bandas azules, sin numeración, sin texto blanco,
header sticky con hamburguesa y footer verde vida). Siguiente paso de
Patron: revisar, fusionar muse a main y publicar con GitHub Pages;
después, la tiendita.

---

# Versión 13 — Hero anterior con parallax, carrusel en blanco y colores que sí se ven (2026-11-07)

Patron aclaró lo que quiso decir:

1. **El hero anterior estaba perfecto.** Se restauró la tarjeta oscura
   de la v11 (textos blancos sobre la foto) y solo se le añadió el
   **parallax**: la foto del hero ahora queda fija al hacer scroll en
   escritorio y el contenido se desliza encima. El "cero texto blanco"
   de la v12 no aplicaba al hero.
2. **El carrusel en fondo blanco.** La sección de marcas aliadas volvió
   a `bg-white` (así estaba bien) y se le quitó el parallax y la foto
   de fondo. El carrusel en sí no se tocó.
3. **Textos quitados.** Se borraron "Categorías de productos de Ilumexa,
   según el menú del sitio oficial" y "Servicios de Ilumexa, según el
   menú del sitio oficial".
4. **Los colores no se veían — causa encontrada.** El azul de las
   secciones era `royal-100` (#DBEAFE), tan pálido que parece blanco;
   por eso Patron nunca lo vio. Ahora las secciones azules usan
   `royal-300` (#93C5FD, azul claramente visible) con textos oscuros:
   Nosotros, Cómo trabajamos y Contacto. La banda de cifras es
   `royal-200` y la llamada a la acción `brand-green-200` (verde
   claro visible). El footer sigue en verde vida `brand-green-400`
   (#4ADE80), que ya era un verde fuerte. Verificado en el CSS
   compilado: las clases existen con sus valores correctos.
5. **Ojo al revisar:** para ver la v13 hay que traer lo último de la
   rama `muse` (`git pull`), reiniciar `npm run dev` y recargar la
   página sin caché (Ctrl + Shift + R), porque una copia local vieja
   no muestra los cambios nuevos.

Estado: COMPLETA en la rama muse, commit aa33e00 (verificado leyendo
la rama: parallax en el hero con tarjeta oscura, carrusel en blanco,
sin los textos "según el menú", royal-300 en secciones, CTA verde-200).
Siguiente paso de Patron: revisar, fusionar muse a main y publicar
con GitHub Pages; después, la tiendita.

---

# Versión 14 — Capturas en el README y README menos técnico (2026-11-07)

Para cerrar el proyecto por ahora:

1. **Capturas de pantalla.** Se tomó la página completa en escritorio
   (1280 px) y en celular (390 px) con Chromium sin interfaz gráfica,
   recorriendo la página para que aparecieran todas las secciones. Los
   archivos quedaron en `screenshots/escritorio.png` y
   `screenshots/movil.png` (commit 70f2d76, subidos por la web de
   GitHub; la primera subida falló por un error de concesión de
   archivo y funcionó al re-adjuntar las imágenes).
2. **README menos técnico.** Reescrito en palabras sencillas: qué es la
   página, qué tiene, cómo verla en tu computadora, de dónde salió la
   información y qué sigue. Las capturas van arriba del todo para que
   cualquiera que entre al repo vea cómo se ve el sitio. La tienda
   queda para después.

Estado: COMPLETA en la rama muse — capturas en commit 70f2d76 y README
nuevo en commit 05e3eb6 (verificado leyendo la rama). Proyecto pausado
por ahora: la tiendita queda para después. Lo siguiente es el proyecto
del estudio de tatuajes, cuando Patron pase el repositorio.
