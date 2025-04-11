import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import "../productCard/productCard.css";

const ProductCard = ({ price, title, stock, id, imageUrl }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const openDetail = () => {
        navigate(`/itemDetail/${id}`, { state: { backgroundLocation: location } });
    };

    return (
        <div className="gothic-card">

            <div className="image-container">
                <img
                    src={imageUrl}
                    alt={title}
                    className="product-image"
                />
                <div className="image-overlay" />
            </div>

            <h2 className="product-title">{title}</h2>
            <h2 className="product-price">${price}</h2>
            <h2 className={`product-stock ${stock <= 5 ? 'low-stock' : ''}`}>
                {stock > 0 ? `${stock} disponibles` : "Agotado"}
            </h2>

            <Button
                variant="outlined"
                className="gothic-button"
                fullWidth
                onClick={openDetail}
            >
                Ver detalle
            </Button>

        </div>
    );
};

export default ProductCard;