# Cinema App para Prex by Martin Rios

Este proyecto es una aplicación desarrollada con Ionic y Angular que permite mostrar, editar, borrar y puntuar películas. La app incluye funcionalidades de Login, Registro, Recuperación de Contraseña, un Dashboard con las películas y una vista para editarlas.

## Características del Proyecto

- **Últimas versiones**: La app está realizada con las últimas versiones disponibles de Ionic y Angular.
- **Simulación de backend**: La aplicación no tiene conexión con ningún tipo de backend, sin embargo, se implementó una simulación desde el frontend para emular los tiempos de carga de una llamada a API. Podrán corroborar que tanto en el Login, Create Account y Forgot Password se puede ingresar cualquier tipo de valor y al hacer submit la app funcionará correctamente. (En el caso particular del login los datos se guardarán en el storage hasta que se realice el logout).
- **Persistencia de datos**: Todos los cambios que se realicen (editar, eliminar, etc.) se reflejarán en el momento y persistirán incluso al refrescar la página, esto es gracias a la utilización de un manejador de estados que en este caso es NGXS. Se pueden resetear los valores por defecto haciendo logout y volviendo a ingresar.

## Instrucciones de Instalación y Ejecución

1. **Instalación de paquetes**: Ejecutar el siguiente comando para instalar todos los paquetes necesarios (Es necesaria la versión 18 o más de node para la correcta instalación y funcionamiento de la app):
    ```bash
    npm i
    ```
2. **Levantar el proyecto localmente**: Utilizar uno de los siguientes comandos (Tener en cuenta que el primer comando solo funcionará si se tiene instalado el CLI de Ionic):
    ```bash
    ionic serve
    ```
    o

    ```bash
    npm run start
    ```
3. **Visualización en dispositivo móvil**: Se sugiere utilizar la extensión "Mobile Simulator" de Google Chrome para ver la app de forma más cómoda. También se puede utilizar la herramienta de visualización responsive por defecto del navegador.
4. **Puerto del localhost**: El proyecto se levantará en el puerto 8100 si se usa `ionic serve`, o en el puerto 4200 si se usa `npm run start`.

## Funcionalidades de la Aplicación

### Login
El login está compuesto por dos campos de texto para ingresar un username y una password, ambos con sus validaciones pertinentes. Contiene tres botones: Login, Create Account y Forgot Password. 

- **Validaciones**: Se pueden corroborar las validaciones haciendo click en el botón de Login sin haber completado los campos, lo que mostrará los mensajes de error pertinentes.
- **Ingreso simulado**: Dado que no hay conexión real con un backend, puedes ingresar cualquier dato y, al hacer click en Login, serás redirigido a la página principal de la app.

### Create Account
Al hacer click en el botón de Create Account en la vista de Login, serás redirigido a una nueva pantalla con un pequeño formulario para crear una cuenta.

- **Validaciones**: Todos los campos tienen sus respectivas validaciones. Al hacer click en Submit sin completar algún input, se mostrarán los mensajes de error. Además, se valida que la password y su confirmación coincidan.
- **Simulación de registro**: Una vez completados todos los campos sin errores, puedes hacer click en Submit, lo que simulará una llamada al backend. Al terminar este tiempo, serás redirigido al Login con un toast indicando que el proceso terminó correctamente.

### Forgot Password
Al hacer click en este botón en la vista de Login, la app abrirá un modal para recuperar la contraseña perdida.

- **Modal de recuperación**: Este modal tiene un input y dos botones para cerrarlo o hacer un submit. Si los campos son correctos y haces click en Submit, se simulará una llamada al backend y se cerrará el modal, mostrando un toast de éxito.

### Dashboard
Es la vista principal de la app, donde puedes ver todas las películas listadas.

- **Funciones del Dashboard**: Puedes filtrar por película en la barra de búsqueda. Al hacer click en el botón del sidemenu, verás el username del usuario que ingresó y un botón para hacer logout.
- **Puntuación de películas**: Puedes puntuar cada película en una escala de 1 a 5 estrellas, y estos datos se guardarán. Al hacer refresh, los datos persistirán.
- **Editar y eliminar películas**: Si deslizas la tarjeta de la película hacia la izquierda, verás las opciones Edit y Delete. Al hacer click en Delete, se desplegará un alert para confirmar la acción, si se confirma, se simulará una llamada al backend y se eliminará la película, mostrando un toast de éxito. Al hacer click en Edit, serás redirigido a una nueva vista para editar la película.

### Edit Movie
En esta vista podrás ver en detalle el título, imagen, puntuación, descripción y fecha de la película seleccionada.

- **Editar película**: Puedes puntuar la película y cambiar la descripción. Si haces click en el botón para volver a la vista anterior, no se aplicará ningún cambio. Si haces click en el botón de Save, se simulará una llamada al backend y serás devuelto al listado de películas con la lista actualizada.

---

Muchas gracias!
