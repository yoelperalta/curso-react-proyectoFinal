//import carritoIcono from "./img/carrito-de-compras.png"
import { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget(){
    const cantidadTotal = useContext(CartContext);

    return(
        <Link to="/cart" className="icon-text" style={{display: cantidadTotal > 0 ? "block" : "none"}}>
            <SlBasket />
            {cantidadTotal}
        </Link>
    );
}

export default CartWidget;