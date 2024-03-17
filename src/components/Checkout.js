import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Timestamp, addDoc, collection, documentId, getDocs, writeBatch, query, where  } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const Checkout = () => {
    const [cargando, setCargando] = useState(false);
    const [orderId, setOrderId] = useState("");
    
    const {carrito, total, eliminarCarrito} = useContext(CartContext);

    const createOrder = async ({nombre, telefono, email}) => {
        setCargando(true);

        try {
            const objOrden = {
                cliente: {
                    nombre, telefono, email
                },
                items: carrito,
                total: total,
                fecha: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);

            const sinStock = [];

            const ids = carrito.map(producto => producto.id);

            const refProductos = collection(db, "productos");

            const productAgregadosDeFirestore = await getDocs(query(refProductos, where(documentId(), "in", ids)))
        
            const {docs} = productAgregadosDeFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productosCarrito = carrito.find(producto => producto.id === doc.id);
                const cantidadProducto = productosCarrito?.cantidad

                if(stockDb >= cantidadProducto){
                    batch.update(doc.ref, {stock: stockDb - cantidadProducto})
                } else {
                    sinStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(sinStock.length === 0){
                await batch.commit();

                const refOrden = collection(db, "ordenes");
                const ordenAgregada = await addDoc(refOrden, objOrden);

                setOrderId(ordenAgregada.id);
                eliminarCarrito();
            } else {
                console.error("Hay productos sin stock");
            }
        } catch (error){
            console.error(error)
        } finally {
            setCargando(false);
        }
    }

    if (cargando){
        return <h1>Se está generando su orden...</h1>
    }

    if (orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }
    
    return (
        <div>
            <h1>Checkout</h1>
            <Checkout onConfirm={createOrder}/>
        </div>
    );
}

export default Checkout;