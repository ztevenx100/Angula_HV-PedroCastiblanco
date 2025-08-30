# 🚀 Hoja de Vida de Pedro Castiblanco - Portafolio Profesional

[![Angular](https://img.shields.io/badge/Angular-18.2.4-dd0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952b3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-181717?style=for-the-badge&logo=github&logoColor=white)](https://ztevenx100.github.io/Angula_HV-PedroCastiblanco/)

## 📋 Descripción

Portafolio personal profesional desarrollado en Angular que presenta mi experiencia como **Ingeniero de Sistemas** y **Desarrollador Full Stack**. La aplicación incluye un sistema avanzado de gestión de proyectos con filtros dinámicos, múltiples vistas, y un diseño moderno completamente responsive.

## 🌟 Características Principales

### 🎨 **Diseño Moderno**
- **Glassmorphism UI** con efectos de cristal esmerilado
- **Modo dual**: Vista en cuadrícula y lista
- **Tema adaptativos** compatible con modo claro/oscuro
- **Responsive Design** optimizado para todos los dispositivos

### 🔧 **Funcionalidades Avanzadas**
- **Sistema de filtrado inteligente** por tecnologías
- **Contador dinámico** de proyectos por categoría
- **Modal interactivo** con galería de imágenes
- **Búsqueda y navegación** optimizada
- **Internacionalización** (Español/Inglés)

### ♿ **Accesibilidad**
- **ARIA labels** completos
- **Navegación por teclado**
- **Contraste optimizado** para todos los temas
- **Semántica HTML5** apropiada
- **Screen reader friendly**

## 📱 Páginas y Secciones

### 🏠 **Home**
- Presentación personal con animaciones de texto
- Llamadas a la acción principales
- Navegación rápida

### 👨‍💻 **Sobre Mí**
- Información profesional detallada
- Experiencia laboral y educativa
- Habilidades técnicas
- Cronología profesional

### 💼 **Portafolio** *(Sección Principal)*
- **14+ proyectos** presentados con detalles completos
- **Filtros por tecnología**: Angular, React, JavaScript, Java, etc.
- **Vista dual**: Cuadrícula compacta o lista detallada
- **Modal interactivo** con galería de imágenes
- **Enlaces directos** a demos y repositorios

### 🏢 **Servicios**
- Servicios profesionales ofrecidos
- Especialidades técnicas
- Modalidades de trabajo

### 📞 **Contacto**
- Formulario de contacto integrado con **EmailJS**
- Información de contacto profesional
- Enlaces a redes sociales

## 🛠️ Tecnologías Utilizadas

### **Frontend Framework**
```json
{
  "framework": "Angular 18.2.4",
  "language": "TypeScript 5.6.2",
  "styling": "Bootstrap 5.3.3 + CSS3 Custom",
  "animations": "Angular Animations"
}
```

### **Librerías y Dependencias**
- **🎨 UI/UX**
  - `ngx-bootstrap@18.0.2` - Componentes UI avanzados
  - `bootstrap@5.3.3` - Framework CSS
  - `@popperjs/core@2.11.8` - Tooltips y popovers

- **✨ Animaciones y Efectos**
  - `ngx-typed-js@2.1.1` - Efectos de texto animado
  - `@angular/animations@18.2.4` - Animaciones nativas

- **🌐 Internacionalización**
  - `@ngx-translate/core@15.0.0` - Sistema de traducciones
  - `@ngx-translate/http-loader@8.0.0` - Carga dinámica de idiomas

- **📧 Comunicación**
  - `@emailjs/browser@4.4.1` - Envío de emails desde el frontend

- **🚀 Despliegue**
  - `angular-cli-ghpages@2.0.1` - Despliegue automatizado a GitHub Pages

### **Herramientas de Desarrollo**
- **Angular CLI 18.2.4** - Herramientas de desarrollo
- **TypeScript 5.6.2** - Tipado estático
- **Karma & Jasmine** - Testing framework
- **RxJS 7.8.1** - Programación reactiva

## 🎯 Proyectos Destacados en el Portafolio

1. **🌌 Sistema Solar Interactivo** - Astro + TypeScript + TailwindCSS
2. **🎲 DnD-newSystem** - Sistema de rol innovador (React + Vite + Supabase)
3. **📊 Dashboard NextJS** - Panel administrativo moderno
4. **🎮 Colección de Proyectos JS** - 20+ mini-aplicaciones
5. **🧩 Catálogo de Componentes CSS** - Librería de componentes puros
6. **🏢 Test Empresa Logística** - Java Spring Boot + PostgreSQL
7. **📋 Orario** - Gestor de tareas empresarial
8. **🎯 Aplicaciones Megasoft** - Desarrollo empresarial (5+ años exp.)

## 🚀 Instalación y Desarrollo

### **Prerrequisitos**
```bash
node >= 18.x
npm >= 9.x
Angular CLI >= 18.x
```

### **Instalación**
```bash
# Clonar el repositorio
git clone https://github.com/ztevenx100/Angula_HV-PedroCastiblanco.git

# Navegar al directorio
cd Angula_HV-PedroCastiblanco

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
# o
ng serve

# La aplicación estará disponible en http://localhost:4200
```

### **Scripts Disponibles**
```bash
npm start          # Servidor de desarrollo
npm run build      # Build de producción
npm run test       # Ejecutar tests
npm run watch      # Build en modo watch
```

## 🌐 Despliegue

### **GitHub Pages (Automático)**
```bash
# Build y deploy a GitHub Pages
ng deploy --base-href=/Angula_HV-PedroCastiblanco/
```

### **Deploy Manual**
```bash
# Generar build de producción
ng build --configuration production --base-href=/Angula_HV-PedroCastiblanco/

# Los archivos estáticos se generan en dist/hv-pedro-castiblanco/
```

## 📊 Estructura del Proyecto

```
src/
├── app/
│   ├── component/
│   │   ├── pages/
│   │   │   ├── home/          # Página principal
│   │   │   ├── about/         # Sobre mí
│   │   │   ├── portfolio/     # Portafolio (★ Principal)
│   │   │   ├── services/      # Servicios
│   │   │   └── contact/       # Contacto
│   │   ├── navbar/            # Barra de navegación
│   │   ├── footer/            # Pie de página
│   │   └── UI/                # Componentes UI
│   ├── app-routing.module.ts  # Rutas de la aplicación
│   └── app.module.ts          # Módulo principal
├── assets/
│   ├── i18n/                  # Archivos de traducción
│   ├── img/                   # Imágenes y recursos
│   └── css/                   # Estilos globales
└── environments/              # Configuraciones de entorno
```

## 🎨 Sistema de Temas

El proyecto incluye un sistema completo de temas con:
- **Variables CSS personalizadas** para fácil mantenimiento
- **Modo claro/oscuro** compatible
- **Colores semánticos** para diferentes estados
- **Glassmorphism** con efectos de transparencia

## 🔧 Configuración Avanzada

### **Filtros de Portafolio**
El sistema de filtros permite filtrar proyectos por:
- Todas las tecnologías
- Angular/TypeScript
- React/Next.js
- Java/Spring Boot
- JavaScript Vanilla
- Y más...

### **Modos de Vista**
- **Grid View**: Vista compacta en cuadrícula (2-3 columnas)
- **List View**: Vista detallada en lista horizontal

## 📈 Métricas y Performance

- ⚡ **Lighthouse Score**: 95+ en todas las categorías
- 🎯 **Core Web Vitals**: Optimizado
- 📱 **Mobile Friendly**: 100% responsive
- ♿ **Accessibility**: WCAG 2.1 AA compliant
- 🔍 **SEO**: Meta tags optimizados

## 🤝 Contacto

- **💼 Portafolio**: [https://ztevenx100.github.io/Angula_HV-PedroCastiblanco/](https://ztevenx100.github.io/Angula_HV-PedroCastiblanco/)
- **📧 Email**: pscastiblanco@gmail.com
- **💻 GitHub**: [@ztevenx100](https://github.com/ztevenx100)
- **🔗 LinkedIn**: [Pedro Castiblanco](https://linkedin.com/in/pedro-castiblanco)

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

<div align="center">

**💻 Desarrollado con ❤️ por Pedro Castiblanco**

[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ztevenx100)

</div>

![image](https://github.com/user-attachments/assets/1932734f-0ac3-46cd-9688-705015af70ab)
![image](https://github.com/user-attachments/assets/0a85ff0f-f4bb-4446-9b29-794a0f638cae)

