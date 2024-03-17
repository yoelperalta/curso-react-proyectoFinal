import { useState, useEffect } from "react";
import { getProductsById } from "./asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);

    const {itemId} = useParams();


    useEffect(() => {
        /*getProductsById(itemId)
            .then(response =>{
                setProducto(response);
            })
            .catch(error => {
                console.error(error);
            })*/
        setCargando(true);

        const docRef = doc(db, "productos", itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productoAdaptado = {id: response.id, ...data};
                setProducto(productoAdaptado);   
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setCargando(false);
            })
    }, [itemId]);  
    return(
        <section className="container">
            <div className="columns">
                    <ItemDetail className="column is-4" {...producto}/>
            </div>
        </section>
    );
}

export default ItemDetailContainer;