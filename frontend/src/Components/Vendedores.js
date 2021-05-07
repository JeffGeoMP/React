import React from 'react'

const Vendedores = ({vendedores}) =>{
    return (
        <div className="container mt-5">
            <h2 className="mt-5 mb-5" >Vendedores</h2>

            <div className= "table-responsive">
                <table className= "table align-middle table-striped">
                    <thead>
                        <th className="align-center">Codigo Empleado</th>
                        <th >Nombre</th>
                        <th className="align-center">Direccion</th>
                        <th className="align-center">Telefono</th>
                    </thead>
                    <tbody>
                        {vendedores.map(vendedor =>(
                            <tr>
                                <td className="align-center">COD-100{vendedor.Id_Vendedor}</td>
                                <td>{vendedor.Nombre} {vendedor.Apellido}</td>
                                <td >{vendedor.Direccion}</td>
                                <td className="align-center">{vendedor.Telefono}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Vendedores;