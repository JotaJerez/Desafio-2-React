import { useState } from 'react';
import Alert from './Alert';

const Formulario = ({setAlert}) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmacionContraseña, setConfirmacionContraseña] = useState("");

  const [error, setError] = useState(false);
  const [errorCorreo, setErrorCorreo] = useState(false);
  const [errorContraseña, setErrorContraseña] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    setError(false);
    setErrorCorreo(false);
    setErrorContraseña(false);
    setRegistroExitoso(false);

    if (nombre === "" || email === "" || contraseña === "" || confirmacionContraseña === "") {
      setError(true);
    } else if (!isValidEmail(email)) {
      setErrorCorreo(true);
    } else if (contraseña !== confirmacionContraseña) {
      setErrorContraseña(true);
    } else {
      setRegistroExitoso(true);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="formulario-container">
      <div className={`formulario ${registroExitoso ? 'bg-success' : error || errorCorreo || errorContraseña ? 'bg-danger' : ''}`}>
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



          {registroExitoso ? (
            <Alert type="success" message="¡Registro exitoso!" />
          ) : error || errorCorreo || errorContraseña ? (
            <Alert type="danger" message="Hay errores en el formulario" />
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Formulario;
