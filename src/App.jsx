import './App.css'
import Lista from './components/Lista';
import Titulos from './components/Titulos';

function App() {
    //Aqui va la logica del componente
  return (
    //Puedo escribir algo de logica
    <>
      {/* Esto es un comentario del html */}
      <Titulos></Titulos>
      {/* <Titulos/> */}
      <h3>Servicios:</h3>
      <Lista/>
    </>
  )
}

export default App;
