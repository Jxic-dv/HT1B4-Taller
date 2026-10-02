# Actividad 1: Proyecto Angular con CLI

**Estudiante:** Jose Lionzo Xic Chay · **Fundación Kinal**

## Cómo se creó el proyecto

El proyecto se creó con Angular CLI desde la terminal, usando el comando `ng new frontend --no-standalone --style=scss --package-manager=pnpm`. Se eligió `--no-standalone` para que el proyecto tenga un módulo principal (`AppModule`). Para ejecutarlo se usa `pnpm install` y `pnpm start`.

## Componentes generados

Con el comando `ng generate component` se crearon tres componentes: **Libro** (título, autor y páginas), **Película** (título, director y año) y **Ciudad** (nombre, país y habitantes). Cada uno muestra sus datos como una tarjeta y se usa en la página principal con su selector (`<app-libro />`, `<app-pelicula />` y `<app-ciudad />`).

## Estructura principal

Dentro de `src/app` está el módulo principal (`AppModule`), el componente raíz (`AppComponent`) y una carpeta por cada componente generado, con su `.ts`, `.html`, `.scss` y `.spec.ts`. Los tres componentes son standalone, por eso se registraron en el arreglo `imports` del módulo. La aplicación arranca desde `main.ts`, que inicia `AppModule`, y este muestra el componente raíz con los tres componentes.

## Conexión con el backend

Se dejó una carpeta `services` con un `ApiService`, donde estará la URL base de la API. La idea es que un backend en Node.js/TypeScript ofrezca una API REST y los componentes obtengan sus datos desde ese servicio, en lugar de tenerlos escritos en el código.