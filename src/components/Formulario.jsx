import { useState } from 'react';
import Alert from './Alert';

const Formulario = ({setAlert}) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmacionContraseña, setConfirmacionContraseña] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (nombre === "" || email === "" || contraseña === "" || confirmacionContraseña === "") {
      setAlert({
        error: true,
        msg: "Completa los campos",
        color: "bg-danger"
      })
    } else if (!isValidEmail(email)) {
      setAlert({
        error: true,
        msg: "Completa los campos",
        color: "bg-danger"
      })
    } else if (contraseña !== confirmacionContraseña) {
      setAlert({
        error: true,
        msg: "Tus contraseñas deben ser iguales",
        color: "bg-danger"
      })
    } else {
      setNombre("")
      setEmail("")
      setContraseña("")
      setConfirmacionContraseña("")
      setAlert({
        error: false,
        msg: "Registro exitoso",
        color: "bg-success"
      })
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="formulario-container">
        <form onSubmit={validarDatos} className='p-4 rounded'>
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
              type="password"
              name="contraseña"
              className="form-control"
              onChange={(e) => setContraseña(e.target.value)}
              value={contraseña}
            />
          </div>

          <div className='form-group mt-3'>
            <input 
              placeholder='Confirma tu contraseña'
              type="password"
              name="confirmacionContraseña"
              className="form-control"
              onChange={(e) => setConfirmacionContraseña(e.target.value)}
              value={confirmacionContraseña}
            />
          </div>

          <button type='submit' className='btn btn-success mt-3'>Registrarse</button>

        </form>
    </div>
  );
}

export default Formulario;