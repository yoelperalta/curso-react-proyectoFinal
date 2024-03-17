import { createContext, useState } from "react";

export const CartContext = createContext({
    carrito: []
})

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    console.log(carrito);

    const agregarItem = (item, cantidad) => {
        if (!enCarrito(item.id)) {
            setCarrito(prev => [...prev, {...item, cantidad}])
        } else {
            console.error("Producto ya agregado")
        }
    }

    const eliminarItem = (itemID) => {
        const carritoActualizado = carrito.filter(producto => producto.id !== itemID)
        setCarrito(carritoActualizado);
    }

    const eliminarCarrito = () => {
        setCarrito([]);
    }

    const enCarrito = (itemID) => {
        return carrito.some((producto) => producto.id === itemID);
    }

    return(
        <CartContext.Provider value={{carrito, agregarItem, eliminarItem, eliminarCarrito}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;