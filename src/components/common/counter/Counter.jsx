import { useContext, useState } from "react";
import { CartContext } from "../../../context/CardContext";
import Swal from "sweetalert2";
import "./counter.css";

const Counter = ({ item }) => {
    const [contador, setContador] = useState(1);
    const { addToCart } = useContext(CartContext);

    const sumar = () => {
        if (contador < item.stock) {
            setContador(contador + 1);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Lo siento, no hay más stock',
                confirmButtonText: 'Entendido',
            });
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El mínimo es 1 producto',
                confirmButtonText: 'Entendido'
            });
        }
    };
    
    const onAdd = () => {
        let cartObject = { ...item, quantity: contador };
        addToCart(cartObject);
        Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
            timerProgressBar: true,
        });
    };


    return (
        <div className="button-group">
            <div className="counter-container">
                <button onClick={restar} className="counter-button">
                    Restar
                </button>
                <h2>{contador}</h2>
                <button onClick={sumar} className="counter-button">
                    Sumar
                </button>
            </div>
            <button onClick={onAdd} className="counter-button">
                Agregar al carrito
            </button>
        </div>
    );
};

export default Counter;