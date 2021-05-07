const { Router } = require('express');

const database = require('../config/database');
const app = Router();

/**
 * Comprobacion de conexion
 */
database.connect((err) =>{
    if(err) throw err;
});


/**
 * @description Ruta de prueba
 */
app.get('/product/prueba', async (req, res)=>{
    try {
        const query = 'SELECT * FROM Libro L';

        database.query(query, (error, result) =>{
            if(error){
                res.status(400).send(error);
                return;
            }    

            if(result.length){
                res.status(200).json(result);
            }else{
                res.status(200).json({});
            }
        });

    } catch (error) {
        res.status(500).send(error);
    }
});


/**
 * @description Ruta para insertar Nuevos productos
 */
app.post('/book/new', (req, res) =>{
    try {
        const Query = `INSERT INTO Libro (Nombre, Cantidad, Precio, Autor, Fecha, Genero) ` +
                        `VALUES  ('${req.body.Nombre}', ${req.body.Cantidad}, ${req.body.Precio}, '${req.body.Autor}', STR_TO_DATE('${req.body.Fecha}','%Y-%m-%d'), '${req.body.Genero}')`;
        
        database.query(Query, (error, result) =>{
            if(error){
                console.log(error);
                res.status(400).send();
                return
            }

            res.status(200).json({status:200, resp: "Libro Añadido Correctamente"});
        });  
                    
    } catch (error) {
        res.status(500).json();
    }
});



/**
 * @description Ruta para Consultar Productos
 */
 app.get('/book/all', async (req, res)=>{
    try {
        const query = 'SELECT l.Id_Libro, l.Nombre, l.Cantidad, l.Precio, l.Autor, (DATE_FORMAT(l.Fecha, \'%d/%m/%Y\')) AS  Fecha, l.Genero FROM Libro l';

        database.query(query, (error, result) =>{
            if(error){
                res.status(400).send(error);
                return;
            }    

            if(result.length){
                res.status(200).json(result);
            }else{
                res.status(200).json();
            }
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

/***
 * @description Ruta para ver los vendedores
 */
app.get('/seller/all', async (req, res)=>{
    try {
        const query = 'SELECT * FROM Vendedor';

        database.query(query, (error, result) =>{
            if(error){
                res.status(400).send(error);
                return;
            }    

            if(result.length){
                res.status(200).json({status: 200, resp: result});
            }else{
                res.status(200).json({});
            }
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * @description Ruta para vender un producto
 */
app.post('/seller/sale', (req, res)=>{
    try {
        const Id_Vendedor = Math.floor(1 + (Math.random() * 4));    //Obtenemos el vendedor de manera aleatoria

        Query = `INSERT INTO Venta (Fecha, Cantidad, Total, ID_LIBRO, ID_VENDEDOR) \nVALUES `; 
        req.body.Libros.forEach(element => {
            Query += `(STR_TO_DATE('${req.body.Fecha}', '%Y-%m-%d'), ${element.Cantidad}, ${element.Total}, ${element.Id_Libro}, ${Id_Vendedor}), \n`
        });
        
        Query = Query.substring(0, Query.length - 3) + ';';
        console.log(Query);
        
        
        database.query(Query, (error, result)=>{
            if(error){
                res.status(400).json();
                return
            }

            res.status(200).json({status: 200, resp: "Venta Procesada Exitosamente"});
        });
    } catch (error) {
        res.status(500).json();
    }
});


/**
 * @description Ruta para ver las ventas realizadas
 */
app.get('/book/sales', (req, res)=>{
    try {
        Query = 'SELECT Libro.Id_Libro, Libro.Nombre AS Libro, Libro.Precio, v.Cantidad, v.Total, Vendedor.Nombre, Vendedor.Apellido, (DATE_FORMAT(v.Fecha, \'%d/%m/%Y\')) AS  Fecha_Venta ' +
                'FROM Venta v ' +
                'INNER JOIN Vendedor ON v.ID_VENDEDOR = Vendedor.Id_Vendedor ' +
                'INNER JOIN Libro ON v.ID_LIBRO = Libro.Id_Libro; '


        database.query(Query, (error, result)=>{
            if(error){
                res.status(400).json();
            }

            if(result.length){
                res.status(200).json({status:200, resp:result});
            }else{
                res.status(200).json({status:200, resp:[]})
            }
        });
    } catch (error) {
        res.status(500).json();
    }
});

module.exports = app;