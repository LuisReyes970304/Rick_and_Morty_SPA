# SPA Vanilla JavaScript - Rick and Morty

## TEAM:
- valentina Cabas
- Luis Reyes
- Dilan Chavez

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

## Gestión de personajes

- Crear personajes
- Editar personajes
- Eliminar personajes

## Episodios

- Consumo dinámico de episodios desde la API
- Renderizado SPA de episodios

## Ubicaciones

- Consumo dinámico de locations desde la API
- Navegación dinámica entre vistas

## Contactos

- Formulario desacoplado
- Manejo de eventos JavaScript

## Quiénes Somos

- Página estática modular

## Persistencia de datos

- Uso de localStorage para guardar personajes creados localmente

## Arquitectura SPA

- Navegación sin recargar la página
- Hash Routing
- Carga dinámica de vistas

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Axios 
- ES Modules

---

# Estructura del proyecto

```txt
.
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       ├── app.js
│       ├── components
│       │   ├── characterCard.js
│       │   ├── episodeCard.js
│       │   ├── locationCard.js
│       │   └── navbar.js
│       ├── pages
│       │   ├── about.js
│       │   ├── contacts.js
│       │   ├── create.js
│       │   ├── episode.js
│       │   ├── home.js
│       │   └── location.js
│       ├── router.js
│       ├── services
│       │   ├── api.js
│       │   ├── httpClient.js
│       │   └── localStorage.js
│       ├── utils
│       │   ├── helpers.js
│       │   └── renderList.js
│       └── views
│           ├── about.html
│           ├── contacts.html
│           ├── create.html
│           ├── episode.html
│           ├── home.html
│           └── location.html
├── index.html
├── package.json
├── package-lock.json
└── README.md
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

