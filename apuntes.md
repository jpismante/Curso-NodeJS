-Instalar nodemon con npm install -g nodemon -> con esto podemos acceder a usar las funciones e iniciar el servidor con nodemon app.js
-Para desplegar una aplicación a un host web hay que tener en cuenta el puerto en el cual esta va correr.

-Configurar variables de entorno en archivo ENV y usando libreria DOTENV.

    PORT = 8080
-En archivo de configuración APP.JS se debe llamar el puerto desde el archivo ENV configurado.

    require('dotenv').config();
    port=process.env.PORT;

-Para levantar la conexión del servidor se usa el siguiente comando:

    app.listen(port, ()=>{
        
        console.log(`Servidor corriendo en localhost:${port}`);

    });

-Hay que configurar comando START en archivo de PACKAGE.JSON 

    "start": "node app.js"

