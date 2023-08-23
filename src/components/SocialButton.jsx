import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialButton = () => {
  return (
    <>
      <h1 className='mb-3'>Crea una cuenta</h1>
      <div className='social-icons'>
        <div className='social-icon'>
          <FontAwesomeIcon icon={faFacebookF} className='icon' />
        </div>
        <div className='social-icon'>
          <FontAwesomeIcon icon={faGithub} className='icon' />
        </div>
        <div className='social-icon'>
          <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
        </div>
      </div>
      <p className='mt-3'>O usa tu correo electrónico para registrarte</p>
    </>
  );
}

export default SocialButton;
