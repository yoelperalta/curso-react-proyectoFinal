import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({id, nombre, precio, img, category, descripcion, stock}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const {agregarItem} = useContext(CartContext);

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada (cantidad);
        const item = {id, nombre, precio};
        agregarItem(item, cantidad);
    }
    
    return(
    <article className="card">
        <picture className="card-image">
            <img className="image" width={200} height={200} src={img} alt={nombre}/>
        </picture>
        <section className="card-content">
            <div className="media-content">
                <p className="title">{nombre}</p>
                <p className="subtitle">Categoria: {category}</p>
                <p className="subtitle">Descripcion: {descripcion}</p>
                <p className="subtitle">Precio: {precio}</p>
            </div>
        </section>
        <footer>
            {
                cantidadAgregada > 0 ? (
                    <Link to="/cart" className="column is-3 button is-fullwidth is-info">Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                )
            }
            </footer>
    </article>);
}

export default ItemDetail;