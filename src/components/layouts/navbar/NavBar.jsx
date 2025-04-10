import CartWidget from "../../common/CartWidget/CartWidget";
import { Link } from "react-router";
import "../navbar/navbar.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-logo">
                <img
                    src="https://res.cloudinary.com/djfqykqlx/image/upload/v1744239847/logo1_dlsngq.png"
                    alt=""
                    className="navbar-logo-img"
                />
            </Link>
            
            <ul className="navbar-links">
                <Link to="/" className="navbar-link">HOME</Link>
                <Link to="/category/ropa" className="navbar-link">ROPA</Link>
                <Link to="/category/gorras" className="navbar-link">GORRAS</Link>
                <Link to="/category/bazar" className="navbar-link">BAZAR</Link>
            </ul>
            <Link to="/cart" className="navbar-cart">
                <CartWidget />
            </Link>
        </div>
    );
};

export default Navbar;