# SPA Vanilla JavaScript - Rick and Morty

## Descripción

Este proyecto es un ejemplo de cómo construir una SPA (Single Page Application) utilizando únicamente JavaScript Vanilla, sin frameworks ni librerías externas.

La aplicación implementa:

- Routing básico SPA
- Renderizado dinámico de vistas
- Arquitectura modular
- Consumo de APIs REST
- Componentización
- Separación de responsabilidades
- Carga dinámica de archivos HTML
- Buenas prácticas de documentación con JSDoc

---

# Características

## Home

- Consume la API pública de Rick and Morty
- Obtiene personajes dinámicamente
- Renderiza cards reutilizables

## Contactos

- Formulario desacoplado
- Manejo de eventos JavaScript

## Quiénes Somos

- Página estática modular

## Arquitectura SPA

- Navegación sin recargar la página
- Hash Routing
- Carga dinámica de vistas

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Axios API
- ES Modules

---

# Estructura del proyecto

```txt
├───assets
│   ├───css
│   └───js
│       ├───components
│       ├───pages
│       ├───services
│       ├───utils
│       └───views
└───node_modules
```

# Ejecución del proyecto

## Crear un archivo .env

```bash
VITE_API_URL=https://rickandmortyapi.com/api
VITE_CONTENT_TYPE=application/json
VITE_TIME_OUT=5000
```

## Ejecutar el proyecto

Para ejecutar el proyecto, primero se debe instalar las dependencias y luego realizar el run del proyecto
```bash
npm install
npm run dev

```

```bash
 "scripts": {
    "vite": "vite",
    "dev": "npm run vite",
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview" }
```

---

# Preguntas de análisis
1. ¿Cómo manejarán el estado de personajes creados localmente?
Se manejará con un arreglo sincronizado con localStorage para mantener persistencia y renderizar los cambios dinámicamente.

 
2. ¿Cómo sincronizarán API, DOM, localStorage y renderizado SPA?
Mediante un flujo centralizado donde los datos obtenidos desde la API y localStorage actualizan el estado y luego el DOM dinámicamente.

3. ¿Cómo evitarán duplicación de lógica?
Utilizando funciones reutilizables, componentes dinámicos, helpers y servicios separados.
Esto permite que el código sea más limpio, escalable y fácil de mantener.
 
4. ¿Qué componentes pueden reutilizarse?
* Cards de personajes
* Navbar
* Loader
* Modal
* Botones dinámicos
* Renderizador de listas
  
---

## Diagarama de flujo 
<img width="1170" height="852" alt="IMG_1825" src="https://github.com/user-attachments/assets/6bb38bec-42c9-443d-8eef-4c0d7b91b5fa" />
