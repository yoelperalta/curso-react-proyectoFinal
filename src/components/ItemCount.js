import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        if (cantidad < stock){
            setCantidad(cantidad + 1);
        }
    }

    const restar = () => {
        if (cantidad > 0){
            setCantidad(cantidad - 1);
        }
    }
    return(
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-1">
                    <button className="button is-danger" onClick={restar}>-</button>
                </div>
                <h4 className="column is-1">{cantidad}</h4>
                <div className="column">
                    <button className="button is-success" onClick={sumar}>+</button>
                </div>
            </div>
            <div className="columns">
                <button className="column is-3 button is-fullwidth is-info" onClick={() => onAdd(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    );
}

export default ItemCount;