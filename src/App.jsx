import './App.css'
import Lista from './components/Lista';
import Titulos from './components/Titulos';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //Aqui va la logica del componente
  return (
    //Puedo escribir algo de logica
    <>
      {/* Esto es un comentario del html */}
      <section className='container'>
        <Titulos></Titulos>
        {/* <Titulos/> */}
        <h3>Servicios:</h3>
        <hr/>
        <Lista />
      </section>

    </>
  )
}

export default App;
