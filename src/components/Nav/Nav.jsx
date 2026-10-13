import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
    const { getTotalItem } = useCart();
    const totalItems = getTotalItem();

    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/cart"}>
                    Carrito
                    {totalItems > 0 && <span className="incart">{totalItems}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};