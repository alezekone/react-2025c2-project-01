import {useState} from "react";

function CarritoBasico() {
    {/* Lista de productos */}
    const listaProductos = [
        {id: 1, nombre: "Remera", precio: 1000},
        {id: 2, nombre: "Short", precio: 1500},
        {id: 3, nombre: "Zapatillas", precio: 2000}
    ];

    {/* Variable de estado "carrito"*/}
    const [carrito, setCarrito] = useState([]);

    {/* Función "Agregar al carrito" */}
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
        console.log(carrito);
    };

    {/*Función "Vaciar carrito"*/}
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    {/* Renderización */}
    return (
        <div id="tarjeta">
            <h3>Productos</h3>
            <ul>
                {listaProductos.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre}: ${producto.precio.toFixed(2)}
                        <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                    </li>
                )
                )}
            </ul>
            <hr />
            <h3>Contenido del Carrito</h3>
            {carrito.map((producto) => (
                    <p key={producto.id}>
                        {producto.nombre}: ${producto.precio.toFixed(2)}
                    </p>
            ))}
            <hr />
            <h3>Acciones disponibles</h3>
            {/*Obervar que la función se puede asociar al evento onClick de 2 maneras: */}
            {/* onClick={() => vaciarCarrito()} <-- usando el formato de función flecha. */}
            {/* onClick={vaciarCarrito}         <-- función sin paréntesis. */}
            <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    );
};

export default CarritoBasico;
