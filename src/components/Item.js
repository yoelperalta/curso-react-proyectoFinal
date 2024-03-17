import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, img, category, descripcion, stock}) => {
    return(
    <article className="card">
        <picture className="card-image">
            <img className="image" width={200} height={200} src={img} alt={nombre}/>
        </picture>
        <section className="card-content">
            <div className="media-content">
                <p className="title">{nombre}</p>
                <p className="subtitle">Precio: {precio}</p>
                <p className="subtitle">Stock: {stock}</p>
            </div>
        </section>
        <footer>
                <Link to={`/item/${id}`} className="button is-info is-fullwidth">Ver detalle</Link>
        </footer>
    </article>);
}

export default Item;