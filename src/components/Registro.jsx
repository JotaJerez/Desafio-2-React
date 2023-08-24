import React from 'react';
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Registro = ({ setMensaje }) => {
  return (
    <>
      <SocialButton setMensaje={setMensaje}
        face={faFacebookF}
        git={faGithub}
        linked={faLinkedinIn}

      />
      <Formulario setMensaje={setMensaje} /> 
    </>
  );
}

export default Registro;
