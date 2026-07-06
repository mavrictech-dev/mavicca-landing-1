# landing1

Landing corporativa para **Mavicca**, enfocada en consultoría ambiental, gestión ambiental y presentación de servicios.

## Estado actual

Este repositorio ya no es un starter genérico de Next.js. Actualmente está en una etapa de **refinamiento / cierre visual** con contenido de marca, secciones del negocio, acciones de contacto e interacciones de servicios ya implementadas.

## Qué incluye

- Header fijo con navegación y CTA de WhatsApp
- Hero con el posicionamiento de Mavicca
- Sección “Quiénes somos”
- Cards de misión y visión
- Catálogo de servicios con cards y modal de detalle
- Sección de contacto con acciones directas
- Footer con redes sociales vinculadas

## Stack tecnológico

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir en `http://localhost:3000`

## Scripts principales

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estructura del proyecto

| Ruta | Propósito |
|---|---|
| `src/app/page.tsx` | Composición principal de la landing |
| `src/data/site.ts` | Fuente central de textos, servicios y datos de contacto |
| `src/components/sections/header.tsx` | Header y CTA de WhatsApp |
| `src/components/sections/hero.tsx` | Sección hero |
| `src/components/sections/about.tsx` | Quiénes somos / misión / visión / pilares |
| `src/components/sections/services.tsx` | Cards de servicios y modal |
| `src/components/sections/contact.tsx` | Información de contacto y formulario |
| `src/components/social-links.tsx` | Íconos y enlaces de redes en el footer |

## Fuentes de contenido

### `info.md`
Se usa para:
- perfil de la empresa
- misión
- visión
- catálogo de servicios
- sectores atendidos

### `redes.md`
Se usa para:
- Facebook
- Instagram
- LinkedIn
- WhatsApp
- Correo

## Notas de implementación actuales

- El contenido de la empresa ya fue adaptado para **Mavicca**.
- La sección “Quiénes somos” ya muestra directamente la historia de la empresa dentro del layout.
- La sección de servicios ya soporta resumen en card + detalle en modal.
- Las acciones de contacto ya funcionan para:
  - WhatsApp
  - Correo
  - Dirección (búsqueda en Google Maps)
- El selector de servicios del formulario tiene altura controlada para no estirar el formulario.
- El botón de WhatsApp del header se ve en desktop y mobile.

## Pendientes / siguientes pasos recomendados

1. Confirmar si la dirección actual de la empresa es la definitiva.
2. Agregar íconos de TikTok y YouTube si también deben aparecer en la interfaz.
3. Conectar el formulario de contacto a un backend real, API o servicio de correo.
4. Hacer una revisión visual final responsive.
5. Revisar SEO, metadata y preparación para deploy.

## Punto en el que se está dejando

El proyecto se está dejando en una etapa donde:

- la estructura principal ya está definida
- la dirección visual ya está establecida
- el contenido del negocio ya está integrado
- las interacciones de servicios ya funcionan
- los enlaces de contacto y redes ya están conectados

Esto significa que lo siguiente es principalmente **pulido visual, integraciones faltantes y preparación para producción**.

## Documentación adicional

Para un contexto más completo del estado del proyecto, revisar:

- `PROJECT_DOCUMENTATION.md`
