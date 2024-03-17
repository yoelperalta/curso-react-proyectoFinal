import Item from "./Item";

const ItemList = ({productos}) => {
    return(
        <section className="container">
            <div className="columns is-centered is-multiline">
                    {productos.map(producto => <Item className="column is-full" key={producto.id} {...producto}/>)}
            </div>
        </section>
    );
}

export default ItemList;