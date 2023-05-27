import { useState } from "react";

const Contador = () => {
//Aqui creo mi estado o state
const [numero, setNumero] = useState(0);

    return (
        <section className="my-5">
            <h3>Contador</h3>
            <hr/>
            <h4>{numero}</h4>
            <button className="btn btn-primary" onClick={()=> setNumero(numero + 1) }>+1</button>
            <button className="btn btn-primary mx-2" onClick={()=> setNumero(numero - 1) }>-1</button>
            <button className="btn btn-primary" onClick={()=> setNumero(0) }>Reiniciar</button>
        </section>
    );
};

export default Contador;