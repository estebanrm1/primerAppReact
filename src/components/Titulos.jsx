const Titulos = ({nuevoTitulo}) => {

    return (
        <section className="text-center my-5">
        <h1 className="display-4">Primera web con React</h1>
        <h2 className="display-5">{nuevoTitulo}</h2>
    </section>
    );
};

export default Titulos;