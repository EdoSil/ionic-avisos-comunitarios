# Aplicación de Avisos Comunitarios

Aplicación híbrida desarrollada con **Ionic** y **Angular**, cuyo objetivo es permitir la creación, visualización y eliminación de avisos comunitarios, incorporando validaciones, persistencia local y uso de funcionalidades nativas del dispositivo.

Este proyecto fue desarrollado como parte de una evaluación académica, aplicando buenas prácticas de organización, reutilización de componentes y separación de responsabilidades.

---

##  Funcionalidades principales

- Crear avisos comunitarios ingresando:
  - Título
  - Descripción
- Validación de datos mediante formularios reactivos
- Captura de imágenes utilizando la **cámara del dispositivo**
- Visualización de los avisos en una lista
- Eliminación de avisos con **confirmación mediante ventana modal**
- Persistencia de datos local utilizando **Capacitor Preferences**
- Formateo de fechas mediante un **pipe personalizado**

---

## Arquitectura del proyecto

El proyecto se encuentra organizado utilizando una arquitectura por capas:

- **Presentación**  
  Contiene las páginas y componentes visuales de la aplicación.

- **Negocio**  
  Incluye los servicios encargados de la lógica principal, como la creación, eliminación y persistencia de avisos.

- **Modelo**  
  Define las entidades utilizadas por la aplicación, como el modelo `Aviso`.

La persistencia de datos se implementa directamente en el servicio de negocio utilizando Capacitor Preferences, dado el alcance del proyecto.

---

##  Tecnologías utilizadas

- Ionic
- Angular (standalone components)
- Capacitor
- Capacitor Preferences
- Capacitor Camera
- TypeScript

---

##  Cámara

La aplicación integra el plugin de cámara de Capacitor, permitiendo capturar una fotografía desde el dispositivo móvil.  
La imagen se muestra en pantalla y se asocia al aviso correspondiente.

---

##  Persistencia de datos

Los avisos creados se almacenan localmente en el dispositivo utilizando **Capacitor Preferences**, asegurando que la información no se pierda al cerrar o recargar la aplicación.

---

## Ejecución del proyecto

Para ejecutar el proyecto en entorno de desarrollo:

```bash
npm install
ionic serve
