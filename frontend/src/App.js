import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import CardsBooks from './Components/Books'
import NewLibro from './Components/NewLibro'
import Ventas from './Components/Ventas'
import Vendedores from './Components/Vendedores'

function App() {

  /**Hooks pra poder actualizar los componentes */
	const [books, setBooks] = useState([])
  const [ventas, setVentas] = useState([])
  const [vendedores, setVendedores] = useState([])
  const [book, setBook] = useState({
    Nombre: '',
    Cantidad : 0,
    Precio: 0,
    Autor: '',
    Fecha: '',
    Genero : ''
  });

	useEffect(() => {
		const getBooks = () => {
			fetch("http://192.168.1.104:3030/book/all")
				.then(res => res.json())
				.then(res => setBooks(res))
		}

    const getVentas = () =>{
      fetch("http://192.168.1.104:3030/book/sales")
        .then(res => res.json())
        .then(res => setVentas(res.resp))
    }

    const getVendedores =() =>{
      fetch("http://192.168.1.104:3030/seller/all")
        .then(res => res.json())
        .then(res => setVendedores(res.resp))
    }

		getBooks();
    getVentas();
    getVendedores();
	}, []);

   return(
    <Fragment>
      <Navbar/>
      <CardsBooks ListBooks={books}/>
      <NewLibro book = {book} setBook = {setBook}/>
      <Vendedores vendedores = {vendedores} setVendedores = {setVendedores}/>
      <Ventas ventas = {ventas} setVentas = {setVentas}/>
      <Footer/>
    </Fragment>

  );
}

export default App;
