import { useState } from 'react';
import Alert from './Alert';

const Formulario = () => {
    // Estados del formulario
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmacionContraseña, setConfirmacionContraseña] = useState("");

    // Estado para los errores
    const [error, setError] = useState(false);
    const [errorCorreo, setErrorCorreo] = useState(false);
    const [errorContraseña, setErrorContraseña] = useState(false);

    //Función antes de enviar el formulario
    const validarDatos = (e) => {
        e.preventDefault();

        // Validación
        if(nombre === "" || email === "" || contraseña === "" || confirmacionContraseña === "") {
            setError(true);
            return;
        } else if(!isValidEmail(email)) {
            setErrorCorreo(true);
            return;
        } else if(contraseña !== confirmacionContraseña) {
            setErrorContraseña(true);
            return;
        }
        // Si el formulario se envía correctamente, devolvemos los estados al inicial y reseteamos el formulario
        setError(false);
        setErrorCorreo(false);
        setErrorContraseña(false);
        setNombre("");
        setEmail("");
        setContraseña("");
        setConfirmacionContraseña("");
    };

    const isValidEmail = (email) => {
        // Expresión regular para validar el formato de correo electrónico
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

  return (
    <>
        <form onSubmit={validarDatos} className='formulario'>
    
            <div className='form-group'>
                <input 
                    placeholder='Nombre'
                    type="text"
                    name="nombre"
                    className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />
            </div>

            <div className='form-group mt-3'>
                <input 
                    placeholder='Email'
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>

            <div className='form-group mt-3'>
                <input 
                    placeholder='Contraseña'
                    type="text"
                    name="contraseña"
                    className="form-control"
                    onChange={(e) => setContraseña(e.target.value)}
                    value={contraseña}
                />
            </div>

            <div className='form-group mt-3'>
                <input 
                    placeholder='Confirma tu contraseña'
                    type="text"
                    name="confirmacionContraseña"
                    className="form-control"
                    onChange={(e) => setConfirmacionContraseña(e.target.value)}
                    value={confirmacionContraseña}
                />
            </div>

            <button onSubmit={validarDatos} type='submit' className='btn btn-primary my-3'>Registrarse</button>
            
            {error ? <p>Todos los campos son obligatorios</p> : null}
            {errorCorreo ? <p>Escribe un correo válido</p> : null}
            {errorContraseña ? <p>Tus contraseñas deben ser iguales</p> : null}

        </form>
    </>
  )
}

export default Formulario