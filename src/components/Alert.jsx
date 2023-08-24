import React from 'react';

const Alert = ({msg, color}) => {
  return (
    <div className={`alert ${color} text-white text-uppercase`}>
      {msg}
    </div>
  );
}

export default Alert;
