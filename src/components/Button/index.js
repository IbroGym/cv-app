import React from 'react';
import './Button.scss';

const Button = ({ text, icon, onClick, className = '' }) => {
  return (
    <span
      className={`button ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </span>
  );
};

export default Button;
