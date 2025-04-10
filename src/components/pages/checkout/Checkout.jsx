import { useContext, useState } from "react";
import { CartContext } from "../../../context/CardContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import "../checkout/checkout.css";

const Checkout = () => {
    const { cart, getTotalAmount, resetCart } = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        telefono: "",
    });

    const [orderId, setOrderId] = useState(null);

    const handleSubmit = (evento) => {
        evento.preventDefault();
        setIsLoading(true);

        let total = getTotalAmount();
        let order = {
            buyer: user,
            items: cart,
            total: total,
        };

        let refCollection = collection(db, "orders");
        const promiseResponse = addDoc(refCollection, order);
        promiseResponse.then((res) => {
            setOrderId(res.id);
            resetCart();
            setIsLoading(false);
        });

        let productsCollection = collection(db, "products");
        order.items.forEach((item) => {
            let productRef = doc(productsCollection, item.id);
            updateDoc(productRef, { stock: item.stock - item.quantity });
        });
    };

    const handleChange = (evento) => {
        const { value, name } = evento.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className="checkout-container">
            <div className="checkout-card">
                <h2>Finalizar Compra</h2>
                {orderId ? (
                    <div className="order-confirmation">
                        <p>✅ Gracias por tu compra</p>
                        <p>🧾 Tu ID de orden es:</p>
                        <strong>{orderId}</strong>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Teléfono"
                            name="telefono"
                            onChange={handleChange}
                        />
                        <div className="button-group">
                            <button type="submit" disabled={isLoading}>Comprar</button>
                            <button type="button" onClick={resetCart}>Cancelar</button>
                        </div>
                    </form>
                )}
                {isLoading && <h2>Cargando...</h2>}
            </div>
        </div>
    );
};

export default Checkout;