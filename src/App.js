import "bulma/css/bulma.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
//import { CartProvider } from "./context/cartContext";
import CartProvider from "./context/cartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App (){
    const greeting = "Bienvenido a Chimehuin FlyShop";
    return (
        <div>
            <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/checkout" element={<Checkout/>}></Route>
                    <Route path="*" element={<h1>404 not found</h1>}/>
                </Routes>
                </CartProvider> 
            </BrowserRouter>
        </div>
    );
}

export default App;