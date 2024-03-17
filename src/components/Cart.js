import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const {carrito, eliminarCarrito, cantidadTotal, total} = useContext(CartContext);

    if(cantidadTotal === 0){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/">Productos</Link>
            </div>
        );
    }

    return(
        <div>
            {carrito.map((producto) => <CartItem key={producto.id} {...producto}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => eliminarCarrito()}>Limpiar carrito</button>
            <Link to="/checkout">Checkout</Link>
        </div>
    );
}

export default Cart;