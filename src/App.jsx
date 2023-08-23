import React, { useState } from 'react';
import './App.css';
import Registro from './components/Registro';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mensaje, setMensaje] = useState("");

  return (
    <>
      <Registro setMensaje={setMensaje} /> 
      {mensaje && <Alert message={mensaje} />} 
    </>
  );
}

export default App;
