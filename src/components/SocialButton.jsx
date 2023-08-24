import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({face, git, linked}) => {
  return (
    <>
      <div className='social-icons'>
        <div className='social-icon'>
          <FontAwesomeIcon icon={face} className='icon' />
        </div>
        <div className='social-icon'>
          <FontAwesomeIcon icon={git} className='icon' />
        </div>
        <div className='social-icon'>
          <FontAwesomeIcon icon={linked} className='icon' />
        </div>
      </div>
      <p className='mt-3'>O usa tu correo electrónico para registrarte</p>
    </>
  );
}

export default SocialButton;
