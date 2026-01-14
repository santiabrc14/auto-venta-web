# Auto Venta Web

Sitio web moderno para vender tu auto con galería de imágenes y detalles completos.

## Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Sass** - Estilos avanzados
- **Vercel** - Hosting gratuito

## Instalación

```bash
npm install
npm run dev
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.scss
├── components/
│   ├── Header.tsx
│   ├── Gallery.tsx
│   └── CarDetails.tsx
└── styles/
    └── globals.scss
```

## Personalización

1. **Imágenes**: Agrega las fotos de tu auto en `public/images/`
2. **Datos**: Modifica la información en `src/components/CarDetails.tsx`
3. **Estilos**: Personaliza colores y diseño en los archivos `.scss`

## Deploy en Vercel

1. Sube el código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Deploy automático

## Ramas Sugeridas

- `main` - Producción
- `develop` - Desarrollo
- `feature/gallery` - Mejoras de galería
- `feature/contact` - Formulario de contacto