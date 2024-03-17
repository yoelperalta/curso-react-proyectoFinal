import { useState, useEffect } from "react";
import {getProducts, getProductsById, getProductsByCategory} from "./asyncMock";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

function ItemListContainer({greeting}){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const {categoryId} = useParams();   

    useEffect(() => {
        setCargando(true);

        const collectionRef = categoryId
            ? query(collection(db, "productos"), where("categoria", "==", categoryId))
            : collection(db, "productos");

        getDocs(collectionRef)
            .then(response => {
                const productosAdaptados = response.docs.map(doc => {
                    const data = doc.data();
                    return ({id: doc.id, ...data})
                })
                setProductos(productosAdaptados);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setCargando(false);
            })

        /*const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        
        asyncFunc(categoryId)
            .then(response => {
                setProductos(response);
            })
            .catch(error => {
                console.error(error);
            })*/
        }, [categoryId]);

        return(
            <div>
                <h1>{greeting}</h1>
                <ItemList productos={productos}/>
            </div>
        );
}

export default ItemListContainer;