import React, { useState } from 'react';

import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: ""
  });

  return (
    <>
      <h1 className='mb-3'>Crea una cuenta</h1>
      <SocialButton
        face={faFacebookF}
        git={faGithub}
        linked={faLinkedinIn}
      />
      <Formulario setAlert={setAlert}/>
      {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
    </>
  );
}

export default Registro;
