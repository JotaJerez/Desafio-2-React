import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialButton = ({face, git, linked}) => {
  return (
    <>
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
