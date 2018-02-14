/* primer servidor e nodejs, no es una aplicación, es una aplicación de servidor que corra en la
 compu tome un puerto y entregue un resultado via protocolo http
 ____________________________________________________________________________________________________*/

 //declarar el servidor con el modulo de protocolo http
 const http = require('http');
const fs = require('fs');
const log4js = require ('log4js');


//procesar de manera global
const logger = log4js.getLogger();
logger.level = 'debug';


          //metodo de http para crear servidor de 3 maneras:

          /*
          let server = function(){
          };
           http.createServer(server);
          --------------------
          http.createServer(function(){
          //  function es una funcion anonima porque no tiene nombre
          });
          --------------------
          http.createServer(()=>{
            Ejemplo de una funcion anonima
          });*/
//los parametros que recibe create server son request y response porque son las acciones que hará el servidor
http.createServer((request, response)=>{

    fs.readFile('./index.html',(err, html)=>{
      logger.info('Conexion a la ap.');
    /*el primer parametro es error que recibira en caso de existir y el segundo es el
    resutado de si fue exitoso*/
    logger.warn('404 NOT FOUND');
    if(err){
      logger.error('No se encontro el link');
      response.writeHead(404,{'Content-Type':'text/html'});//funcion que recibe como primer parametro el status y el segundo es un objeto que dce el tipo de metadato que estamos enviando. BUSCAR HTML CONTENT TYPE

      response.write('404 - Not found');
      response.end();
    }else {
      logger.info('200 - ok ');
      response.write(html);//manda el contenido que tiene file
      response.end();
    }

  });//lector asincrono de archivo,primer parametro es nombre de archivo y segundo recibe un callback

}).listen(3000);//al resultado de create server le decimos en que puerto va a correr;
