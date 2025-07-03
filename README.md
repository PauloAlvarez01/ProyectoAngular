# 🍷 VinotecaAngular

Aplicación web desarrollada en Angular para la gestión y compra de vinos.

## 📌 Temática

La app permite a los usuarios visualizar una lista de vinos, seleccionar cantidad y agregarlos a un carrito de compras. Además, cuenta con un panel de administrador con autenticación para crear, editar y eliminar productos (vinos).

## 👤 Datos del desarrollador

- **Nombre y Apellido:** Paulo Manuel Alvarez  
- **DNI:** 25906507 
- **Email:** palvarez@alumnos.exa.unicen.edu.ar  
- **Sede:** Tandil

## 🔐 Acceso al panel de administración

- **Usuario:** admin  
- **Contraseña:** admin123  

Solo usuarios autenticados pueden acceder a la sección de administración.

## 🔗 Backend simulado (MockAPI)

Los datos se obtienen desde una API REST simulada mediante MockAPI:

https://68500da9e7c42cfd17972d0f.mockapi.io/vinos


- Cada vino contiene: `nombre`, `cepa`, `bodega`, `precio`, `stock`, `imagen`, `liquidacion` y `cantidad`.
- El campo `cantidad` es manejado únicamente desde el frontend.

## 🖼️ Imágenes

Las imágenes de los vinos se cargan mediante URLs externas. No se almacenan localmente.

## 🔁 Reutilización de componentes

Se reutilizó el componente `input-cantidad` tanto para seleccionar la cantidad de vinos como para definir los kilómetros de envío en el cálculo del costo de entrega, promoviendo modularidad y consistencia.

# VinotecaAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
