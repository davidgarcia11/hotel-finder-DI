# 🏨 Hotel Finder

Aplicación web para búsqueda y consulta de hoteles con sistema de filtros dinámicos.

**Proyecto:** Diseño de Interfaces - 2º DAM  
**Curso:** 2025-2026  
**Autor:** David García

---

## 📋 Descripción

Hotel Finder es una Single Page Application (SPA) desarrollada con React que permite a los usuarios buscar y explorar hoteles de forma intuitiva. La aplicación cuenta con un sistema de filtros dinámicos que actualiza los resultados en tiempo real mientras el usuario interactúa con los controles.

---

## ✨ Características

### Funcionalidades Principales

- ✅ **Búsqueda en tiempo real** por nombre o ciudad del hotel
- ✅ **Filtrado dinámico** por rango de precio, desayuno incluido y aceptación de mascotas
- ✅ **Ordenación flexible** por precio (ascendente/descendente)
- ✅ **Visualización detallada** de cada hotel con información completa
- ✅ **Navegación fluida** entre lista y detalle sin recargas de página
- ✅ **Feedback inmediato** con contador de resultados y mensajes informativos

### Aspectos Técnicos

- 🎨 **Diseño basado en Leyes de Gestalt** (Proximidad y Similitud)
- 🔄 **API REST** simulada con JSON Server
- 📱 **Diseño responsivo** con CSS Grid y Flexbox
- 🚀 **Componentes reutilizables** (9 componentes en total)
- 🌳 **Control de versiones** con Git y metodología Gitflow

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Librería de JavaScript para interfaces de usuario
- **React Router DOM** - Navegación entre páginas
- **CSS-in-JS** - Estilos inline con objetos JavaScript

### Backend (Mock)
- **JSON Server** - API REST simulada

### Herramientas
- **Git/GitHub** - Control de versiones
- **Node.js & npm** - Gestión de dependencias
- **VS Code** - Entorno de desarrollo

---

## 📦 Instalación

### Requisitos Previos

- Node.js (v18 o superior)
- npm (incluido con Node.js)
- Git

### Pasos de Instalación

1. **Clonar el repositorio:**

```bash
git clone https://github.com/davidgarcia11/hotel-finder-DI.git
cd hotel-finder-DI
```

2. **Instalar JSON Server (si no lo tienes):**

```bash
npm install -g json-server
```

3. **Instalar dependencias del frontend:**

```bash
cd frontend
npm install
```

---

## 🚀 Uso

### Iniciar la Aplicación

Necesitas **dos terminales** abiertas simultáneamente:

**Terminal 1 - API (Backend):**

```bash
# Desde la raíz del proyecto
json-server --watch db.json --port 3001
```

Deberías ver:
```
Resources
http://localhost:3001/hotels
```

**Terminal 2 - Frontend:**

```bash
# Desde la carpeta frontend
cd frontend
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

---

## 📁 Estructura del Proyecto

```
hotel-finder-DI/
├── db.json                          # Base de datos (15 hoteles)
├── DOCUMENTACION.md                 # Documentación del proyecto
├── README.md                        # Este archivo
├── docs/
│   └── capturas/                    # Capturas de pantalla
│
└── frontend/                        # Aplicación React
    ├── public/
    │   └── index.html
    │
    ├── src/
    │   ├── components/
    │   │   ├── layout/              # Header, Footer
    │   │   ├── common/              # Tarjeta, Loading, ErrorMessage
    │   │   └── hoteles/             # PanelFiltros, InfoHotel
    │   │
    │   ├── pages/                   # Páginas principales
    │   │   ├── ListaHoteles.jsx
    │   │   └── DetalleHotel.jsx
    │   │
    │   ├── services/                # Lógica de API
    │   │   └── hotelService.js
    │   │
    │   ├── App.js                   # Componente raíz
    │   ├── App.css
    │   └── index.js
    │
    └── package.json
```

---

## 🎯 Funcionalidades Detalladas

### 1. Lista de Hoteles (Página Principal)

- **Búsqueda por texto:** Filtra hoteles por nombre o ciudad en tiempo real
- **Filtro de precio:** Slider para seleccionar precio máximo (0€ - 500€)
- **Filtro de desayuno:** Checkbox para mostrar solo hoteles con desayuno incluido
- **Filtro de mascotas:** Checkbox para mostrar solo hoteles que aceptan mascotas
- **Ordenación:** Dropdown para ordenar por precio (menor a mayor / mayor a menor)
- **Contador de resultados:** Muestra la cantidad de hoteles encontrados
- **Mensaje sin resultados:** Indica cuando no hay hoteles que cumplan los filtros

### 2. Detalle del Hotel

- **Información completa:** Nombre, valoración, dirección, descripción
- **Servicios del hotel:** Lista visual de servicios disponibles
- **Habitaciones:** Grid con todas las habitaciones disponibles del hotel
- **Información por habitación:** Tipo, capacidad, precio, desayuno incluido

### 3. Navegación

- **Rutas dinámicas:** `/hotel/:id` permite acceder a cualquier hotel
- **Sin recargas:** Navegación instantánea entre páginas (SPA)
- **Header consistente:** Navegación siempre visible

---

## 🎨 Principios de Diseño

### Leyes de Gestalt Aplicadas

#### 1. Proximidad
- Las tarjetas de hoteles están separadas con un gap de 1.5rem
- La información dentro de cada tarjeta está agrupada con poco espacio
- Esto permite al cerebro identificar claramente cada hotel como una unidad

#### 2. Similitud
- Todas las tarjetas comparten el mismo estilo visual
- Bordes redondeados, sombras sutiles, estructura consistente
- Comunica que todos los elementos son del mismo tipo (hoteles disponibles)

---

## 📊 Endpoints de la API

La API mock proporciona los siguientes endpoints:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/hotels` | Obtiene todos los hoteles |
| GET | `/hotels/:id` | Obtiene un hotel específico por ID |

**Base URL:** `http://localhost:3001`

**Ejemplo de respuesta:**

```json
{
  "id": 1,
  "nombre": "Hotel Paradise",
  "ciudad": "Barcelona",
  "valoracion": 4.5,
  "estrellas": 4,
  "aceptaMascotas": true,
  "servicios": ["wifi", "piscina", "gimnasio"],
  "habitaciones": [
    {
      "id": 1,
      "tipo": "Individual",
      "precio": 80,
      "desayunoIncluido": false,
      "capacidad": 1
    }
  ]
}
```

---

## 🌳 Metodología Git

El proyecto sigue la metodología **Gitflow**:

### Ramas Principales

- **`main`** - Código de producción (versión final)
- **`develop`** - Rama de desarrollo (trabajo continuo)

### Ramas Feature

Cada funcionalidad se desarrolla en su propia rama:

- `feature/header`
- `feature/footer`
- `feature/hotel-service`
- `feature/componentes-auxiliares`
- `feature/tarjeta-hotel`
- `feature/detalle-hotel`
- `feature/filtros`
- `feature/documentacion-gestalt`

### Flujo de Trabajo

1. Crear rama desde `develop`: `git checkout -b feature/nombre`
2. Desarrollar la funcionalidad
3. Commit: `git commit -m "feat: Descripción"`
4. Push: `git push origin feature/nombre`
5. Pull Request en GitHub: `feature/nombre` → `develop`
6. Merge y borrado de la rama feature

---

## 🧪 Testing

### Pruebas Manuales Recomendadas

1. **Filtros dinámicos:**
   - Escribir en el buscador y verificar resultados instantáneos
   - Mover el slider de precio y comprobar actualizaciones
   - Marcar/desmarcar checkboxes

2. **Navegación:**
   - Hacer clic en "Ver más" de un hotel
   - Verificar que la URL cambie a `/hotel/:id`
   - Usar el botón "Inicio" del header

3. **Estados de carga:**
   - Refrescar la página y observar el spinner
   - (Opcional) Detener JSON Server y ver mensaje de error

---

## 📝 Comandos Útiles

### Desarrollo

```bash
# Iniciar API mock
json-server --watch db.json --port 3001

# Iniciar React (en otra terminal)
cd frontend && npm start

# Ver logs
# Los errores aparecen en la consola del navegador (F12)
```

### Git

```bash
# Ver estado actual
git status

# Ver ramas
git branch

# Ver historial
git log --oneline

# Crear nueva rama
git checkout -b feature/nueva-funcionalidad
```

---

## 🐛 Solución de Problemas

### Problema: "Cannot GET /hotels"

**Causa:** JSON Server no está corriendo

**Solución:**
```bash
json-server --watch db.json --port 3001
```

### Problema: Puerto 3000 ya en uso

**Causa:** Ya hay una aplicación corriendo en el puerto 3000

**Solución:**
1. Detén la aplicación anterior (Ctrl+C en la terminal)
2. O usa otro puerto: `PORT=3001 npm start`

### Problema: Cambios no se reflejan

**Causa:** El navegador tiene caché

**Solución:**
1. Refresca con Ctrl+Shift+R (hard refresh)
2. O abre en modo incógnito

### Problema: "Module not found"

**Causa:** Faltan dependencias

**Solución:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentación Adicional

- **[DOCUMENTACION.md](./DOCUMENTACION.md)** - Documentación completa del proyecto
- **[GUIA_ESTUDIO.md](./GUIA_ESTUDIO.md)** - Guía de estudio para entender el código

---

## 🎓 Conceptos Aprendidos

Este proyecto demuestra conocimientos en:

- ✅ React (componentes, hooks, estado)
- ✅ React Router (navegación SPA)
- ✅ Consumo de APIs REST
- ✅ Gestión de estado con useState
- ✅ Efectos secundarios con useEffect
- ✅ Componentes reutilizables
- ✅ Props y comunicación entre componentes
- ✅ Filtrado y ordenación de arrays
- ✅ Renderizado condicional
- ✅ Listas con key
- ✅ Estilos CSS-in-JS
- ✅ CSS Grid y Flexbox
- ✅ Principios de diseño (Gestalt)
- ✅ Git y Gitflow
- ✅ Pull Requests

---

## 🚀 Mejoras Futuras

Funcionalidades que se podrían añadir:

- [ ] **Tema oscuro/claro** con persistencia en localStorage
- [ ] **Formulario de reserva** con React Hook Form
- [ ] **Favoritos** guardados en localStorage
- [ ] **Integración con API de mapas** para mostrar ubicación
- [ ] **Subida de imágenes** con Cloudinary
- [ ] **Sistema de valoraciones** interactivo
- [ ] **Tests unitarios** con Jest y React Testing Library
- [ ] **Tests E2E** con Cypress
- [ ] **Deploy** en Vercel/Netlify

---

## 📄 Licencia

Este proyecto es un trabajo académico desarrollado para la asignatura de Diseño de Interfaces del ciclo formativo de Desarrollo de Aplicaciones Multiplataforma.

---

## 👤 Autor

**David García**

- GitHub: [@davidgarcia11](https://github.com/davidgarcia11)
- Proyecto: [hotel-finder-DI](https://github.com/davidgarcia11/hotel-finder-DI)

---

## 🙏 Agradecimientos

- **SEAS - Centro de Formación Abierta** por la formación
- **Fundación San Valero** por facilitar los recursos
- **Comunidad de React** por la documentación y recursos

---

## 📞 Soporte

Si tienes problemas ejecutando el proyecto:

1. Verifica que Node.js esté instalado: `node --version`
2. Verifica que npm esté instalado: `npm --version`
3. Asegúrate de tener ambos servidores corriendo (API + React)
4. Revisa la sección de **Solución de Problemas**

---

## 🎯 Objetivos del Proyecto (Cumplidos)

### Funcionalidades Obligatorias (5 puntos)

- [x] Consumir datos de al menos 3 endpoints de una API
- [x] Implementar navegación con rutas dinámicas
- [x] Control de búsqueda con filtrado y ordenación dinámicos
- [x] Utilizar al menos 7 componentes reutilizables
- [x] Aplicar 2 Leyes de Gestalt justificadas

### Funcionalidades Extra (implementadas)

- [x] Utilizar Git y metodología Gitflow
- [x] Proporcionar retroalimentación clara e inmediata

**Nota final estimada: 7/10**

---

## 📸 Capturas de Pantalla

### Página Principal
![Lista de hoteles con filtros](docs/capturas/grid-hoteles.png)

*Aplicación de las Leyes de Gestalt: Proximidad y Similitud*

### Página de Detalle
*(Captura disponible en la carpeta docs/capturas/)*

---

**¡Gracias por revisar este proyecto! 🚀**

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio.

---

*Última actualización: Enero 2026*
