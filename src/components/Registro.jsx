import React from 'react';
import Formulario from './Formulario';
import SocialButton from './SocialButton';

const Registro = ({ setMensaje }) => {
  return (
    <>
      <SocialButton setMensaje={setMensaje} />
      <Formulario setMensaje={setMensaje} /> 
    </>
  );
}

export default Registro;
