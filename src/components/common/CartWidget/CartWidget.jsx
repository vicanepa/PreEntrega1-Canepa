import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "../../../context/CardContext";

const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext);
    const total = getTotalQuantity()

    return (
        <div>
            <Badge badgeContent={total} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </div>
    );
};

export default CartWidget;