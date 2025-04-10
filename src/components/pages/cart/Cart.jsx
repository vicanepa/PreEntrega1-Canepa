import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CardContext";
import Swal from "sweetalert2";
import "./cart.css";

const Cart = () => {
    const { resetCart, cart, removeById, getTotalAmount } = useContext(CartContext);
    const total = getTotalAmount();

    const resetCartWithAlert = () => {
        Swal.fire({
            title: "¿Vaciar el carrito?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showDenyButton: true,
            confirmButtonText: "Sí, vaciar",
            denyButtonText: "No, conservar",
            confirmButtonColor: "#e53935",
            denyButtonColor: "#43a047",
            backdrop: true,
        }).then((result) => {
            if (result.isConfirmed) {
                resetCart();
                Swal.fire({
                    icon: "success",
                    title: "Carrito vaciado",
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            } else if (result.isDenied) {
                Swal.fire({
                    icon: "info",
                    title: "Tu carrito sigue intacto",
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            }
        });
    };
    
    return (
        <div className="cart-container">
            <h2 className="cart-title">Tu carrito</h2>

            {cart.length === 0 ? (
                <p className="empty-cart">El carrito está vacío.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-details">
                                <h3>{item.title}</h3>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio unitario: ${item.price}</p>
                            </div>
                            <button
                                className="remove-btn"
                                onClick={() => {
                                    removeById(item.id);
                                    Swal.fire({
                                        position: "bottom-end",
                                        icon: "success",
                                        title: "Producto eliminado",
                                        showConfirmButton: false,
                                        timer: 3000,
                                    });
                                }}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}

                    <h3 className="cart-total">Total a pagar: ${total}</h3>

                    <div className="cart-actions">
                        <button className="clear-btn" onClick={resetCartWithAlert}>
                            Vaciar carrito
                        </button>
                        <Link to="/checkout" className="checkout-btn">
                            Finalizar compra
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;