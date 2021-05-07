import React, { useState, useEffect } from "react";
import libro from '../assets/libro.png'

const Books = ({ListBooks}) => {
    
    

    const handleComprar = (Id_Libro, Precio) =>{
        let Fecha = new Date();
        let StringFecha = Fecha.getFullYear() + "-" + (Fecha.getMonth() + 1) + "-" + Fecha.getDate();
        let Cantidad = 1;
        let Total = Cantidad * Precio;
    
        console.log(StringFecha);

        const requestInit = {
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify({
                Fecha: StringFecha,
                Libros: [{Id_Libro: Id_Libro, Cantidad: Cantidad, Total: Total}]
            })
        }
        
         //Consulta
         fetch('http://localhost:3030/seller/sale', requestInit)
         .then(res => res.json())
         .then(res => console.log(res))
    }

	return (
		<div className="container mt-5 mb-5">
			<h2 className= "mb-3">Libros Disponibles</h2>
           <div className= "row row-cols-1 row-cols-md-3 g-4">
                    {ListBooks.map(book =>(
                        <div className= "col">
                            <div className="card" key={book.Id_Libro}>
                            <img src={libro} class="card-img-top px-5" alt="..." width="80" height="200"/>
                            <div class="card-body">
                                <h5 class="card-title">SKU-1000{book.Id_Libro}</h5>
                                <p class="card-text">Nombre: {book.Nombre}</p>
                                <p class="card-text">Genero: {book.Genero}</p>
                                <p class="card-text">Cantidad: {book.Cantidad}</p>
                                <p class="card-text">Autor: {book.Autor}</p>
                                <p class="card-text">Fecha de Lanzamiento: {book.Fecha}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Precio: Q{book.Precio}</small>
                            </div>
                            </div> 
                            <div className="d-grid gap-2">
                                <button onClick={() => handleComprar(book.Id_Libro, book.Precio)} class="btn btn-outline-primary btn-sm" type="button">Comprar</button>
                            </div>   
                        </div>
                        
                    ))}
           </div>
		</div>
	);
}

export default Books;
