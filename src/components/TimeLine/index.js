import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import './TimeLine.scss';

const TimeLine = ({ data = [], status = 'idle', error = null }) => {
  if (status === 'loading') {
    return (
      <div className="timeline timeline--loading">
        <div className="timeline-overlay">
          <FontAwesomeIcon className="timeline-spinner" icon={faSyncAlt} spin />
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="timeline timeline--error">
        <p className="timeline-error-message">
          Something went wrong; please review your server connection!
        </p>
      </div>
    );
  }

  return (
    <div className="timeline">
      <ul className="timeline-list">
        {data.map((item, index) => (
          <li key={index}>
            <div className="timeline-date">
              <span>{item.date}</span>
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
