import CartWidget from "../../common/CartWidget/CartWidget";
import { Link } from "react-router";
import "../navbar/navBar.css";
import logo1 from "../../../assets/img/logo1.png";

const Navbar = () => {
    return (
        <div className="navbar">
            
            <Link to="/" >
                <img className="navbar-logo" src={logo1} />
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