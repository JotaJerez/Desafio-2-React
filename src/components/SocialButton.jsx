import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialButton = ({ setMensaje, face, git, linked }) => {
  const handleSocialButtonClick = (socialNetwork) => {
    let message = "";

    // Determinar el mensaje según la red social
    switch (socialNetwork) {
      case "facebook":
        message = "Has iniciado sesión con Facebook";
        break;
      case "github":
        message = "Has iniciado sesión con GitHub";
        break;
      case "linkedin":
        message = "Has iniciado sesión con LinkedIn";
        break;
      default:
        message = "Has iniciado sesión con una red social";
    }

    setMensaje(message);
  };

  return (
    <>
      <h1 className='mb-3'>Crea una cuenta</h1>
      <div className='social-icons'>
        <div className='social-icon' onClick={() => handleSocialButtonClick("facebook")}>
          <FontAwesomeIcon icon={face} className='icon' />
        </div>
        <div className='social-icon' onClick={() => handleSocialButtonClick("github")}>
          <FontAwesomeIcon icon={git} className='icon' />
        </div>
        <div className='social-icon' onClick={() => handleSocialButtonClick("linkedin")}>
          <FontAwesomeIcon icon={linked} className='icon' />
        </div>
      </div>
      <p className='mt-3'>O usa tu correo electrónico para registrarte</p>
    </>
  );
}

export default SocialButton;
