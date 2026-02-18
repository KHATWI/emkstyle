# Guía de Publicación y Edición - EMK STYLE

## 🚀 Cómo Publicar tu Sitio Web

### Opción 1: Publicar con Vercel (RECOMENDADO - Más Fácil)

**Desde v0.dev:**
1. Haz clic en el botón "Publish" en la esquina superior derecha
2. Conecta tu cuenta de Vercel (es gratis)
3. Tu sitio se publicará automáticamente en minutos
4. Obtendrás un dominio como: `emk-style.vercel.app`
5. Puedes conectar tu propio dominio después

**Ventajas:**
- Publicación en 1 clic
- Actualizaciones automáticas cuando edites
- Hosting gratis e ilimitado
- SSL (https) incluido
- Muy rápido y confiable

---

### Opción 2: Descargar y Subir a tu Hosting

**Si tienes hosting propio (cPanel, Hostinger, etc.):**

1. **Descargar el código:**
   - Haz clic en los 3 puntos en la parte superior derecha
   - Selecciona "Download ZIP"
   - Extrae el archivo ZIP en tu computadora

2. **Instalar Node.js en tu computadora:**
   - Descarga desde: https://nodejs.org
   - Instala la versión LTS (recomendada)

3. **Preparar el sitio para producción:**
   \`\`\`bash
   # Abre la terminal en la carpeta del proyecto
   npm install
   npm run build
   \`\`\`

4. **Subir al hosting:**
   - Necesitarás hosting que soporte Node.js
   - Sube la carpeta completa vía FTP
   - Configura el servidor para ejecutar: `npm start`

**NOTA:** La mayoría de hostings tradicionales (cPanel) NO soportan Next.js directamente. Por eso recomendamos Vercel.

---

## 📝 Cómo Editar tu Página Después

### Método 1: Editar desde v0.dev (Más Fácil)

1. Vuelve a v0.dev y abre este chat
2. Pídeme que edite lo que necesites:
   - "Cambia el precio del curso X a $75"
   - "Agrega un nuevo curso sobre redes sociales"
   - "Cambia el color del header"
3. Los cambios se actualizan automáticamente si publicaste con Vercel

---

### Método 2: Editar con GitHub (Para Equipos)

1. **Conectar a GitHub:**
   - Haz clic en el botón de GitHub en la parte superior
   - Sube tu código a un repositorio

2. **Editar desde GitHub:**
   - Cualquier cambio que hagas en GitHub se despliega automáticamente
   - Tu equipo puede colaborar fácilmente

3. **Usar GitHub Desktop (Sin código):**
   - Descarga GitHub Desktop: https://desktop.github.com
   - Clona tu repositorio
   - Edita los archivos con un editor de texto
   - Haz "commit" y "push" para publicar

---

### Método 3: Editar Localmente (Avanzado)

1. **Descargar el código** (ZIP o GitHub)

2. **Instalar dependencias:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Ejecutar en modo desarrollo:**
   \`\`\`bash
   npm run dev
   \`\`\`
   - Abre http://localhost:3000 en tu navegador
   - Los cambios se ven en tiempo real

4. **Editar archivos:**
   - Usa Visual Studio Code (recomendado): https://code.visualstudio.com
   - O cualquier editor de texto

---

## 🖼️ Cómo Agregar o Cambiar Fotos

### Opción 1: Pídeme a mí (v0)

Simplemente escribe en el chat:
- "Agrega una foto de un equipo trabajando en el curso de LinkedIn"
- "Cambia la imagen del curso de PNL"
- Yo generaré o buscaré la imagen adecuada

### Opción 2: Usar tus Propias Fotos

**Si editas localmente:**

1. **Guardar tu imagen en la carpeta correcta:**
   \`\`\`
   public/
   ├── mi-foto-curso.jpg
   \`\`\`

2. **Actualizar el archivo del curso:**

   Busca en `app/business/page.tsx` (o alma/kids):
   
   \`\`\`tsx
   // ANTES
   <Image
     src="/ai-automation-dashboard.jpg"
     alt="Curso"
   />
   
   // DESPUÉS
   <Image
     src="/mi-foto-curso.jpg"
     alt="Descripción de tu foto"
   />
   \`\`\`

3. **Formato recomendado:**
   - Tamaño: 800x500 píxeles
   - Formato: JPG o PNG
   - Peso: Menos de 200KB

---

## 🔗 Cómo Cambiar los Enlaces de Hotmart

**Ubicación:** Cada curso tiene un botón con este código:

\`\`\`tsx
<Link href="https://go.hotmart.com/TU-ENLACE-AQUI">
  Comprar Ahora
</Link>
\`\`\`

**Para cambiar:**

1. Copia tu enlace de afiliado de Hotmart
2. Busca el curso correspondiente en:
   - `app/business/page.tsx`
   - `app/alma/page.tsx`
   - `app/kids/page.tsx`

3. Reemplaza "https://go.hotmart.com/TU-ENLACE-AQUI" con tu enlace real

**Ejemplo:**
\`\`\`tsx
// ANTES
<Link href="https://go.hotmart.com/TU-ENLACE-AQUI">

// DESPUÉS
<Link href="https://go.hotmart.com/B12345678X">
\`\`\`

---

## 🎯 Resumen: Opción Recomendada

### Para Principiantes:
1. ✅ **Publica con Vercel** (botón "Publish" arriba)
2. ✅ **Edita pidiendo cambios en v0.dev** (este chat)
3. ✅ **Actualiza enlaces de Hotmart** manualmente

### Para Usuarios Avanzados:
1. ✅ **Sube a GitHub** (botón GitHub arriba)
2. ✅ **Conecta con Vercel** para despliegue automático
3. ✅ **Edita localmente** con Visual Studio Code

---

## 📞 Necesitas Ayuda?

Pregúntame cualquier cosa:
- "Cómo cambio el precio del curso X"
- "Quiero agregar un video en la página principal"
- "Cómo agrego mi dominio personalizado"
- "Necesito cambiar el color del logo"

Estoy aquí para ayudarte con cualquier cambio o duda.

---

**Consejo Final:** 
La forma más fácil es publicar con Vercel desde v0.dev y pedirme que haga los cambios que necesites. Así no necesitas programar nada y todo se actualiza automáticamente.
