import React from 'react';
import './Expertise.scss';

const Expertise = ({ data }) => {
  return (
    <ul className="expertise-list">
      {data.map((item, index) => (
        <li key={index}>
          <div className="expertise-list-date">
            <strong>{item.info.company}</strong>
            <span>{item.date}</span>
          </div>
          <div className="expertise-list-info">
            <h3>{item.info.job}</h3>
            <p>{item.info.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Expertise;
