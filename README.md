# Dramas Virales con IA — Página de venta

Página de venta del ebook **Dramas Virales con IA** de **Reyes de la Justicia**.
Es un sitio estático (HTML + CSS + JS): no necesita servidor, base de datos ni instalar nada.

## Estructura

```
dramas-virales/
├── index.html          ← la página de venta
├── 404.html            ← página de error (redirige al inicio)
├── robots.txt
├── render.yaml         ← configuración para Render
└── assets/
    ├── css/styles.css  ← diseño (colores, letras, móvil y PC)
    ├── js/main.js      ← animaciones y preguntas frecuentes
    └── img/            ← logo, imágenes y portada
```

## Enlace de pago

Todos los botones llevan a: `https://pay.hotmart.com/H108662631J`
Si algún día cambia, búscalo dentro de `index.html` y reemplázalo.

## Publicar en GitHub Pages (gratis)

1. Crea un repositorio público llamado `dramas-virales`.
2. Sube **todo el contenido** de esta carpeta (no la carpeta, lo que hay dentro).
3. Ve a **Settings → Pages**, en **Branch** elige `main` y `/ (root)`, y guarda.
4. En 1–3 minutos tu página estará en `https://TU-USUARIO.github.io/dramas-virales/`.

## Publicar en Render (gratis)

1. Sube primero la carpeta a GitHub (pasos 1 y 2 de arriba).
2. En [render.com](https://render.com), entra con tu cuenta de GitHub.
3. **New → Static Site**, elige el repositorio `dramas-virales`.
4. Build Command: déjalo vacío. Publish Directory: `.`
5. Dale a **Create Static Site**. Te da una dirección tipo `https://dramas-virales.onrender.com`.

(También puedes usar **New → Blueprint** y Render lee solo el archivo `render.yaml`.)

## Imagen al compartir el enlace

Cuando ya tengas tu dirección final, abre `index.html` y en la línea
`<meta property="og:image" content="assets/img/og-image.jpg">`
cambia el contenido por la dirección completa, por ejemplo:
`https://dramas-virales.onrender.com/assets/img/og-image.jpg`
Así Facebook y WhatsApp muestran la portada al compartir el enlace.
