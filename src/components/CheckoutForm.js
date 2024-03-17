import { useState } from "react";

const CheckoutForm = ({onConfirm}) => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();

        const datosUsuario = {
            nombre, telefono, email
        }

        onConfirm(datosUsuario);
    }

    return(
        <div>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input type="text" value={nombre} onChange={({target}) => setNombre(target.value)}/>
                </label>

                <label>
                    Telefono
                    <input type="text" value={telefono} onChange={({target}) => setTelefono(target.value)}/>
                </label>

                <label>
                    Email
                    <input type="text" value={email} onChange={({target}) => setEmail(target.value)}/>
                </label>
            </form>
        </div>
    );
}

export default CheckoutForm;