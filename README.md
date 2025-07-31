
#  Petunia Tienda

**Petunia Tienda** es una página web diseñada para ofrecer regalos únicos para cada ocasión especial. Es un sitio 100% responsivo, optimizado para SEO y desarrollado con tecnologías modernas de frontend.  
[Visítala aquí](https://www.petuniatienda.me)

---

## Tecnologías usadas

- HTML5
- CSS3 (con diseño responsive)
- JavaScript vanilla (en proceso)
- Google Fonts
- Hosting: GitHub Pages / Vercel / Netlify
- Dominio personalizado `.me`

---

##  Estructura del proyecto

```
PetuniaTienda/
├── index.html
├── about.html
├── contact.html
├── services.html
├── register.html
├── login.html
├── panel.html
│
├── css/
│   └── style.css
│
├── img/
│   ├── logo.png
│   └── otros recursos...
│
└── README.md
```

---

##  Cómo ejecutarlo localmente

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/petunia-tienda.git
```

2. Abre el archivo `index.html` con tu navegador:

```bash
start index.html      # Windows
open index.html       # macOS
xdg-open index.html   # Linux
```

---

## Características

- Diseño limpio, moderno y amigable
- Optimización SEO básica (`meta`, `alt`, `aria-label`)
- Responsive y accesible desde móviles
- Imágenes con carga diferida (`loading="lazy"`)
- Código limpio, organizado por secciones

---

##  Futuras mejoras

- Carrito de compras
- Backend con Node.js + Express
- Sistema de login real con validación
- Panel de administración para productos
- Base de datos con MongoDB o PostgreSQL
- Funcionalidades dinámicas con JavaScript

  ```mermaid
classDiagram
    class SitioWeb {
        +index.html
        +about.html
        +contact.html
        +services.html
        +login.html
        +register.html
        +panel.html
    }

    class CSS {
        +style.css
    }

    class Img {
        +logo.png
        +otros recursos...
    }

    class Usuario {
        <<HTML>>
        +registrarse()
        +iniciarSesion()
        +verPanel()
    }

    SitioWeb --> CSS
    SitioWeb --> Img
    SitioWeb --> Usuario
```

