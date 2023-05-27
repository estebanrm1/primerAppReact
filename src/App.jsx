import './App.css'
import Contador from './components/Contador';
import Lista from './components/Lista';
import Titulos from './components/Titulos';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //Aqui va la logica del componente
  return (
    //Puedo escribir algo de logica
    <>
      {/* Esto es un comentario del html */}
        <Titulos nuevoTitulo='Este titulo fue creado con props' estado={true} ></Titulos>
      <section className='container'>
        <h3>Servicios:</h3>
        <hr/>
        <Lista />
        <Contador/>
        {/* <Titulos/> */}
      </section>
    </>
  )
}

export default App;
