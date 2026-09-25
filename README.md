# padronbermejoabogado.es

Web de **Francisco Padrón Bermejo**, abogado en Las Palmas de Gran Canaria (colegiado n.º 2489, ICA Las Palmas).

Sitio estático publicado con GitHub Pages desde la rama `main`.

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html` | Página principal |
| `aviso-legal.html`, `privacidad.html`, `cookies.html` | Páginas legales (LSSI / RGPD) |
| `404.html` | Página de error |
| `assets/css/styles.css` | CSS compilado con Tailwind (**generado**, no editar a mano) |
| `assets/fonts/` | Playfair Display e Inter alojadas en el propio dominio (sin Google Fonts) |
| `assets/img/` | Favicon, iconos e imagen para redes sociales (`og.png`) |
| `src/input.css`, `tailwind.config.js` | Fuente del CSS |
| `robots.txt`, `sitemap.xml` | SEO |

## Modificar la web

```bash
npm install
npm run build        # copia las fuentes y compila el CSS
npm run watch:css    # recompila el CSS al guardar mientras editas
```

Después de cambiar clases de Tailwind en los HTML hay que ejecutar `npm run build:css` y subir también `assets/css/styles.css`.

## Formulario de contacto

Lo gestiona [FormSubmit](https://formsubmit.co), que reenvía cada consulta a `padronbermejo@gmail.com` y muestra un CAPTCHA.
El primer envío genera un correo de activación que hay que confirmar una sola vez.

## Pendiente antes de producción

- Completar el **NIF** del titular en `aviso-legal.html` y `privacidad.html` (buscar `COMPLETAR`).
- Configurar el dominio `padronbermejoabogado.es` (ver abajo).

## Dominio propio

1. En el proveedor del dominio, crear estos registros DNS:
   - `A` para `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` para `www` → `hectorlagocarrera.github.io`
2. En GitHub: *Settings → Pages → Custom domain* → `padronbermejoabogado.es` → *Save*, y marcar *Enforce HTTPS* cuando esté disponible.
