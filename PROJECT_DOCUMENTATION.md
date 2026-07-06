# Documentación del Proyecto — landing1

Este documento resume el estado actual del repositorio, lo que ya fue implementado y los puntos principales para continuar el trabajo de forma segura.

## Repositorio

- **Nombre del repositorio en GitHub:** `landing1`
- **Nombre local del proyecto:** `landing-ambiental`
- **Empresa representada en la landing:** **Mavicca**

## Estado actual

El proyecto actualmente es una landing corporativa personalizada para Mavicca, enfocada en consultoría ambiental y servicios de gestión ambiental.

El contenido base del starter de Next.js ya fue reemplazado por contenido específico del negocio, estilo visual propio y secciones interactivas.

### Estado implementado actualmente

- La landing ya incluye estas secciones:
  - Header
  - Hero
  - About / “Quiénes somos”
  - Servicios
  - Contacto
  - Footer con redes sociales
- Se integró el contenido real de la empresa desde `info.md`.
- Se integraron los datos sociales y de contacto desde `redes.md`.
- La sección de servicios funciona con cards + modal de detalle.
- La sección de contacto ya tiene acciones clickeables para WhatsApp, correo y dirección.
- El CTA de WhatsApp del header se ve tanto en desktop como en mobile.

## Stack tecnológico

- **Next.js:** `16.2.9`
- **React:** `19.2.4`
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**

## Scripts principales

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Fuentes de contenido

### `info.md`
Se usa para cargar:
- descripción de la empresa
- misión
- visión
- servicios
- sectores atendidos

### `redes.md`
Se usa para cargar:
- Facebook
- Instagram
- LinkedIn
- WhatsApp
- Correo

## Estructura actual del proyecto

### Entrada principal
- `src/app/page.tsx`
  - Ensambla las secciones de la landing en orden.

### Contenido compartido
- `src/data/site.ts`
  - Fuente central de textos, servicios, datos de contacto y labels compartidos.

### Secciones principales
- `src/components/sections/header.tsx`
  - Header fijo con navegación y CTA de WhatsApp.
- `src/components/sections/hero.tsx`
  - Sección principal de apertura.
- `src/components/sections/about.tsx`
  - “Quiénes somos”, misión, visión y pilares de la empresa.
- `src/components/sections/services.tsx`
  - Cards de servicios y modal de detalle.
- `src/components/sections/contact.tsx`
  - Información de contacto y formulario.

### UI de apoyo
- `src/components/social-links.tsx`
  - Íconos sociales y enlaces de destino.
- `src/components/motion/reveal.tsx`
  - Helpers reutilizables de animación.
- `src/components/section-organic-pattern.tsx`
  - Patrón decorativo de fondo para secciones.
- `src/components/footer-organic-pattern.tsx`
  - Decoración del footer.
- `src/components/ambient-falling-leaves.tsx`
  - Efecto ambiental animado.

## Qué ya está personalizado

### 1. Branding y contenido del negocio
- El nombre de la empresa fue actualizado a **Mavicca**.
- Se integró el mensaje comercial de consultoría ambiental.
- Los servicios fueron reemplazados desde placeholders genéricos al portafolio real de la empresa.

### 2. Sección “Quiénes somos”
- Se eliminó la imagen extra que se superponía.
- “Quiénes somos” ahora muestra la historia de la empresa directamente en la sección.
- Misión y visión fueron reorganizadas en cards premium.
- El bloque inferior de pilares actualmente muestra:
  - ícono
  - título
  - sin párrafo descriptivo

### 3. Sección de servicios
- Todos los servicios de `info.md` están representados.
- Cada servicio tiene:
  - resumen en la card
  - detalle completo en modal
- La animación del modal fue diseñada con una sensación premium y prolija.

### 4. Sección de contacto
- WhatsApp usa su propio ícono visual.
- El número de WhatsApp abre el chat.
- El correo abre el cliente de mail.
- La dirección abre una búsqueda en Google Maps.
- El selector de servicios fue restringido para que el formulario no siga creciendo en altura.

### 5. Redes sociales
- Los íconos del footer están conectados a enlaces reales desde `redes.md`.
- Actualmente están vinculados:
  - Facebook
  - Instagram
  - LinkedIn
  - WhatsApp
  - Correo

## Notas importantes de implementación

### Nota sobre la dirección
El valor actual de dirección en código es:

`Av. Ambiental 123, Lima — Perú`

Esto parece un valor de ejemplo, así que conviene confirmar si es la dirección real final de la empresa.

### Nota sobre redes sociales
`redes.md` también contiene referencias para:
- TikTok
- YouTube

Actualmente esas redes **todavía no están representadas con íconos en la interfaz**.

## Punto en el que actualmente se está dejando el proyecto

En este momento, la landing ya es funcional como sitio corporativo de marca e incluye el contenido principal de la empresa, catálogo de servicios, acciones de contacto y redes sociales vinculadas.

El proyecto se está dejando en una etapa de **refinamiento / finalización**, no en una etapa inicial de construcción.

### Más específicamente, actualmente queda con:
- estructura principal ya definida
- estilo visual ya establecido
- contenido ya integrado
- interacciones de servicios ya funcionando
- acciones de contacto ya funcionando
- CTA responsive de WhatsApp ya activo en el header

## Próximos pasos recomendados

1. **Confirmar la dirección final de la empresa** si `Av. Ambiental 123, Lima — Perú` es temporal.
2. **Agregar íconos de TikTok y YouTube** si esas redes también deben aparecer en el footer o en contacto.
3. **Conectar el formulario de contacto a un backend real o servicio de correo**, porque actualmente el formulario es solo UI salvo que exista otra integración fuera de este repo.
4. **Hacer una revisión visual final** en mobile y desktop.
5. **Revisar SEO y metadata** si el sitio está cerca de salir a producción.

## Verificación ya utilizada durante la implementación

El proyecto fue validado previamente usando:

```bash
npm run lint
npm run build
```

## Resumen rápido para quien continúe el proyecto

Si alguien retoma este proyecto, debería empezar por acá:

1. Revisar primero `src/data/site.ts`.
2. Revisar después las secciones dentro de `src/components/sections/`.
3. Confirmar qué datos del negocio todavía faltan cerrar.
4. Definir si el siguiente paso será:
   - pulido visual,
   - agregar redes faltantes,
   - integrar backend al formulario,
   - o preparar SEO / deploy.
