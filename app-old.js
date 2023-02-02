const http = require('http');

//Req es lo que se está solicitando al web server.
//Response es lo que el servidor responde al cliente.

http.createServer( (req, res ) => {
    res.write("Hola mundo");
    res.end();
})
.listen( 8080 );

console.log('Escuando el puerto', 8080);