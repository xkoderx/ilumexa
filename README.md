# Ilumexa — Iluminando México

La nueva página web de **Ilumexa**, empresa mexicana dedicada a la
fabricación y comercialización de productos de iluminación: alumbrado
público, industrial, residencial y decorativo, además de accesorios
eléctricos.

Es la versión moderna del sitio oficial
[iluminandomexico.com.mx](https://iluminandomexico.com.mx), con la misma
información, pero con un diseño actual, rápido y que se ve bien en
computadora, tableta y celular.

## Cómo se ve

Vista en computadora:

![Vista de la página de Ilumexa en computadora](screenshots/escritorio.png)

Vista en celular:

![Vista de la página de Ilumexa en celular](screenshots/movil.png)

## Qué tiene la página

Todo está en una sola página, que se recorre de arriba a abajo:

- **Portada:** foto de una calle iluminada de noche, con el nombre de la
  empresa y sus ventajas principales. La foto tiene un efecto que la
  deja fija mientras bajas por la página.
- **Marcas aliadas:** un carrusel con los logotipos de las marcas con las
  que trabaja Ilumexa (TORK, OSRAM, Philips, entre otras).
- **En números:** 12 categorías de productos, 2 servicios y 10 marcas
  líderes.
- **Video:** el video oficial de Ilumexa.
- **Quiénes somos:** la historia y el compromiso de la empresa.
- **Catálogo:** las 12 categorías de productos.
- **Cómo trabajamos:** asesoría, instalación y mantenimiento, en 3 pasos.
- **Servicios:** mantenimiento e instalación, y asesoría de proyectos.
- **Contacto:** dirección, teléfonos, correos y un formulario que abre tu
  correo ya redactado para Ilumexa.

En el celular el menú se convierte en un botón de hamburguesa animado
que se abre y se cierra sin perderte.

## Cómo verla en tu computadora

Necesitas tener instalado [Node.js](https://nodejs.org) (versión LTS) y
luego, desde la carpeta del proyecto:

```sh
npm install   # instala las dependencias (solo la primera vez)
npm run dev   # abre la página en http://localhost:4321
```

Para hacer la versión final lista para publicar:

```sh
npm run build    # genera la carpeta dist/
npm run preview  # vista previa de esa versión final
```

## De dónde salió la información

Todo el contenido se tomó del sitio oficial de Ilumexa
(iluminandomexico.com.mx), revisado el 6 de noviembre de 2026. En esa
fecha solo cargaba su página de inicio, así que aquí solo se usa lo que
se pudo comprobar ahí: el texto de la empresa, los nombres de las
categorías y servicios, las marcas y los datos de contacto. No se
inventó ningún producto, precio ni dato.

## Créditos de las fotos

- Foto de la portada: [Darya Grey_Owl / Pexels](https://www.pexels.com/photo/lighted-street-lights-between-a-highway-12348285/)
  (carretera con farolas encendidas de noche, entre la niebla).
- Foto de "Quiénes somos": [Vova Kras / Pexels](https://www.pexels.com/photo/black-asphalt-road-during-night-time-10313578/)
  (avenida de noche).
- Los logotipos son de las marcas aliadas de Ilumexa.

## Contacto de Ilumexa

- Dirección: Raymundo Montoya Mz. 22 Lt. 7, Col. Benito Juárez,
  C.P. 08930, Iztacalco, México D.F.
- Guillermina Osorno: 5614-8172
- Efraín Quintero: 551486-0549
- Correos: gop_ilumex@hotmail.com y gop.ilumex@gmail.com

## Qué sigue

- **La tiendita:** más adelante se agregará una pequeña tienda en línea
  para vender los productos desde la página.
- **Catálogo detallado:** las fichas técnicas de cada producto están
  pendientes de que el negocio comparta su catálogo, porque las páginas
  del sitio oficial no cargaban.

---

*Hecho con Astro y Tailwind CSS.*
