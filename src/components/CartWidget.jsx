
import React from "react";


const CartWidget = () => {
    return (
        <div>
            <i class="fa-solid fa-cart-plus"></i>
            <span
                style={{
                    top: "-5px",
                    right: "-10px",
                }}
            >
                2
            </span>
        </div>
    );
};

export default CartWidget;
