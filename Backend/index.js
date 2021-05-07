const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


/**
 * Configuracion del servidor
 */
 
const app = express();
const port = 3030;

app.set('port', port);


/**
 * Miiddlewares
 */

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/**
 * Rutas del Servidor
 */
app.use(require('./src/routes/Products'));


/**
 * Archivos estaticos de la pagina
 */
app.use(express.static(__dirname + '/public'));


/**
 * Ejecucion del Servidor
 */
app.listen(app.get('port'), ()=>{
    console.log(`API Correindo en http://localhost:${port}`);
});