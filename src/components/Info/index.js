import React from 'react';
import './Info.scss';

const Info = ({ text, children }) => {
  return (
    <div className="info">
      {text && <p>{text}</p>}
      {children}
    </div>
  );
};

export default Info;
