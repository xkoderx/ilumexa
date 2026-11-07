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
│   └── images/            # Logos de marcas aliadas (carrusel)
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro    # Inicio: hero + carrusel de logos + contacto
│   │   ├── about.astro    # Acerca de Ilumexa
│   │   ├── products.astro # Categorías de productos
│   │   ├── services.astro # Servicios
│   │   └── contact.astro  # Contacto + formulario (sin backend)
│   └── styles/
│       └── global.css     # Tailwind + animación del carrusel
├── astro.config.mjs
├── package.json
└── tailwind.config.js
```

## Páginas

- `/` — Inicio: presentación, carrusel de marcas aliadas y llamada a la acción.
- `/about` — Quiénes somos, proveedores y ventajas competitivas.
- `/products` — Las 12 categorías de productos del sitio oficial.
- `/services` — Mantenimiento e Instalación, y Asesoría de Proyectos.
- `/contact` — Dirección, contactos y correos. El formulario todavía no
  tiene backend: aún no envía mensajes.

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
- **Vigencia de los teléfonos:** en este trabajo no se publicaron números de
  teléfono; hay que confirmar cuáles siguen vigentes antes de añadirlos.
- **Formulario de contacto:** conectar el formulario a un backend o a un
  servicio de envío de correos.
- **Carrusel de logos:** no modificarlo sin proponerlo antes. A Gepeto le
  gusta cómo quedó.

## Contacto (verificado en el sitio oficial)

- Dirección: Raymundo Montoya Mz. 22 Lt. 7, Col. Benito Juárez,
  C.P. 08930, Iztacalco, México D.F.
- Contactos: Guillermina Osorno, Efraín Quintero.
- Correos: gop_ilumex@hotmail.com y gop.ilumex@gmail.com.
