import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-fondo">
           <div className="container-fluid">
             <a className="navbar-brand navbar-texto" href="#">
                <img src={logo} alt="" width="80" height="55"/>
                Libreria Arkam
            </a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                   <a className="nav-link active navbar-texto" aria-current="page" href="#">Ir a Inicio</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link active navbar-texto" aria-current="page" href= "#">Ver Ventas</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link active navbar-texto" aria-current="page" href= "#">Ver Vendedores</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link active navbar-texto" aria-current="page" href= "#">Control de Libros</a>
                 </li>
               </ul>
             </div>
           </div>
         </nav>
    );
}

export default Navbar;