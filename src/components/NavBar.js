import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar (){
    return(
        <div className="navbar">
            <h1 className="navbar-brand"><p className="navbar-item">Chimehuin FlyShop</p></h1>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink className="navbar-item" to="/category/canas">Cañas</NavLink>
                    <NavLink className="navbar-item" to="/category/reels">Reels</NavLink>
                    <NavLink className="navbar-item" to="/category/lineas">Líneas</NavLink>
                    <NavLink className="navbar-item" to="/category/waders">Waders</NavLink>
                    <NavLink className="navbar-item" to="/category/moscas">Moscas</NavLink>
                </div>
                <div className="navbar-end">
                    <CartWidget/>
                </div>
            </div>  
        </div>
    );
}

export default NavBar;