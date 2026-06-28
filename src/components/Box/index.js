import React from 'react';
import './Box.scss';

const Box = ({ title, content, children }) => {
  return (
    <div className="info-box" id={title ? title.toLowerCase().replace(/\s+/g, '-') : undefined}>
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
      {children}
    </div>
  );
};

export default Box;
