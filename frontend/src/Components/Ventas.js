import React from 'react'

const Ventas = ({ventas}) =>{
    return (
        <div className="container mt-5">
            <h2 className="mt-5 mb-5" >Ventas</h2>

            <div className= "table-responsive">
                <table className= "table align-middle table-striped">
                    <thead>
                        <th className="align-center">Codigo</th>
                        <th >Nombre del Libro</th>
                        <th className="align-center">Precio Unitario</th>
                        <th className="align-center">Cantidad</th>
                        <th className="align-center">Total</th>
                        <th >Vendedor</th>
                        <th>Fecha de Venta</th>
                    </thead>
                    <tbody>
                        {ventas.map(venta =>(
                            <tr>
                                <td className="align-center">SKU-1000{venta.Id_Libro}</td>
                                <td>{venta.Libro}</td>
                                <td className="align-center">{venta.Precio}</td>
                                <td className="align-center">{venta.Cantidad}</td>
                                <td className="align-center">{venta.Total}</td>
                                <td>{venta.Nombre}</td>
                                <td>{venta.Fecha_Venta}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Ventas;