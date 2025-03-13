import { useState } from "react";
import "../counter/counter.css";

const Counter = ({ item }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < item.stock) {
            setContador(contador + 1)
        } else {
            alert('Lo siento, no hay stock')
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        } else {
            alert('Agregar minimo un producto')
        }
    };


    const onAdd = () => {
        console.log('agregar al carrito');

        let cartObject = { ...item, quantity: contador };
        console.log(cartObject);
    };

    return (
        <div className="counter">
            <div>
                <button onClick={restar}>restar</button>
                <h2>{contador}</h2>
                <button onClick={sumar}>sumar</button>
            </div>
            <button onClick={onAdd}>agregar al carrito</button>
        </div>
    );
};

export default Counter;