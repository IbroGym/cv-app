import React from 'react';
import './TimeLine.scss';

const TimeLine = ({ data }) => {
  return (
    <div className="timeline">
      <ul className="timeline-list">
        {data.map((item, index) => (
          <li key={index}>
            <div className="timeline-date">
              <span>{item.year}</span>
            </div>
            <div className="timeline-event info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
