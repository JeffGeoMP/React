import React from 'react';


const NewBook = ({book, setBook}) =>{

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let {Nombre, Cantidad, Precio, Autor, Fecha, Genero} = book

    const handleSubmit = () => {
        Cantidad = parseInt(Cantidad);
        Precio = parseFloat(Precio);

        //Validacion de los datos
        if(book.Nombre === ''){
            alert('Todos los campos son Obligatorios');
            return
        }

        const requestInit = {
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify({
                Nombre: Nombre,
                Cantidad: Cantidad,
                Precio : Precio,
                Autor : Autor, 
                Fecha: Fecha,
                Genero: Genero
            })
        }
        //Consulta
        fetch('http://192.168.28.35:3030/book/new', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setBook({
            Nombre: "",
            Cantidad : 0,
            Precio: 0,
            Autor: "",
            Fecha: "",
            Genero : ""
        })
    }
     
    return (
        <form className="container mt-5 mb-3" onSubmit={handleSubmit} > 
            <div className= "mt-5 mb-5">
                <h2>Ingreso de Nuevo Libro</h2>
            </div>
            <div className= "col-md-6 offset-3">
                <div className= "row mb-3">
                    <div className= "col-md-4">
                        <label for="exampleInputEmail1" class="col-form-label">Nombre del Libro</label>
                    </div>
                    <div className = "col-md-8">
                    <input name = "Nombre" onChange={handleChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                </div>

                <div className= "row mb-3">
                    <div className= "col-md-4">
                        <label for="exampleInputEmail1" class="col-form-label">Autor del Libro</label>
                    </div>
                    <div className = "col-md-8">
                    <input name = "Autor" onChange={handleChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                </div>
                <div className= "row mb-3">
                    <div className= "col-md-4">
                        <label for="exampleInputEmail1" class="col-form-label">Cantidad de Libros</label>
                    </div>
                    <div className = "col-md-8">
                    <input name = "Cantidad" onChange={handleChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                </div>

                <div className= "row mb-3">
                    <div className= "col-md-4">
                        <label for="exampleInputEmail1" class="col-form-label">Precio (Q)</label>
                    </div>
                    <div className = "col-md-8">
                    <input name = "Precio" onChange={handleChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                </div>

                <div className= "row mb-3">
                    <div className= "col-md-4">
                        <label for="exampleInputEmail1" class="col-form-label">Fecha de Lanzamiento</label>
                    </div>
                    <div className = "col-md-8">
                    <input name = "Fecha" onChange={handleChange} type="Date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                </div>

                <div className= "row mb-3">
                    <div className= "col-md-4">
                        <label for="exampleInputEmail1" class="col-form-label">Genero Literario</label>
                    </div>
                    <div className = "col-md-8">
                    <input name = "Genero" onChange={handleChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                </div>

                <div className= "row mb-3">
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-success" type="submit">Registrar Libro</button>
                    </div>
                </div>
            
            </div>
        </form>
    );
} 

export default NewBook