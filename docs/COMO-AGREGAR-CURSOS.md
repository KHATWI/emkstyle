# Cómo Agregar Nuevos Cursos a EMK STYLE

## Ubicación de los archivos

- **EMK Business**: `app/business/page.tsx`
- **EMK by Alma**: `app/alma/page.tsx`
- **EMK Kids**: `app/kids/page.tsx`

## Estructura de un curso

Cada curso sigue esta estructura:

\`\`\`tsx
<article className="group cursor-pointer">
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="/ruta-de-la-imagen.jpg"
      alt="Nombre del Curso"
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
    />
  </div>
  <div className="mt-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-2xl font-bold text-copper">$79</span>
      <div className="flex items-center gap-1">
        <span className="text-yellow-500">★</span>
        <span className="text-sm font-semibold">4.8</span>
        <span className="text-sm text-muted-foreground">(2,345)</span>
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-copper transition-colors">
      Nombre del Curso
    </h3>
    <p className="text-muted-foreground mb-4 leading-relaxed">
      Descripción del curso aquí
    </p>
    <a
      href="TU-ENLACE-DE-HOTMART-AQUI"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full text-center px-6 py-3 bg-copper text-charcoal font-semibold rounded-lg hover:bg-copper-light transition-colors"
    >
      Comprar Ahora
    </a>
  </div>
</article>
\`\`\`

## Pasos para agregar un curso

1. Abre el archivo correspondiente (business, alma o kids)
2. Busca la sección `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">`
3. Copia un curso existente completo (desde `<article>` hasta `</article>`)
4. Pégalo dentro del grid
5. Modifica estos campos:
   - **Imagen**: Cambia `src="/ruta-de-la-imagen.jpg"` por la ruta de tu nueva imagen
   - **Precio**: Cambia `$79` al precio de tu curso (entre $30-$100)
   - **Calificación**: Ajusta `4.8` y `(2,345)` según corresponda
   - **Título**: Cambia el texto dentro de `<h3>`
   - **Descripción**: Modifica el texto dentro de `<p>`
   - **Link de Hotmart**: Reemplaza `TU-ENLACE-DE-HOTMART-AQUI` con tu enlace de afiliado

## Ejemplo completo

\`\`\`tsx
<article className="group cursor-pointer">
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="/nuevo-curso-seo.jpg"
      alt="SEO Avanzado 2025"
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
    />
  </div>
  <div className="mt-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-2xl font-bold text-copper">$85</span>
      <div className="flex items-center gap-1">
        <span className="text-yellow-500">★</span>
        <span className="text-sm font-semibold">4.9</span>
        <span className="text-sm text-muted-foreground">(1,890)</span>
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-copper transition-colors">
      SEO Avanzado 2025
    </h3>
    <p className="text-muted-foreground mb-4 leading-relaxed">
      Domina el posicionamiento en Google con técnicas avanzadas de SEO y contenido optimizado para IA.
    </p>
    <a
      href="https://go.hotmart.com/X1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full text-center px-6 py-3 bg-copper text-charcoal font-semibold rounded-lg hover:bg-copper-light transition-colors"
    >
      Comprar Ahora
    </a>
  </div>
</article>
\`\`\`

## Agregar imágenes de cursos

1. Coloca tus imágenes en la carpeta `public/`
2. Nómbralas de forma descriptiva (ej: `curso-seo-avanzado.jpg`)
3. Referencia la imagen usando `/nombre-archivo.jpg`

## Notas importantes

- Mantén los precios entre $30 y $100
- Usa calificaciones entre 4.5 y 5.0 para credibilidad
- Las descripciones deben ser concisas (1-2 líneas)
- Siempre incluye el atributo `target="_blank" rel="noopener noreferrer"` en los enlaces
- El diseño responsive se ajusta automáticamente (1 columna en móvil, 2 en tablet, 3 en desktop)
