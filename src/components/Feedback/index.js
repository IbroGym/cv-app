import React from 'react';
import './Feedback.scss';

const Feedback = ({ data }) => {
  return (
    <ul className="feedback">
      {data.map((item, index) => (
        <li key={index}>
          <div className="info">
            <p>{item.feedback}</p>
          </div>
          <div className="feedback-reporter">
            <div className="feedback-reporter-photo">
              <img src={item.reporter.photoUrl} alt={item.reporter.name} />
            </div>
            <div className="feedback-reporter-info">
              <em>
                {item.reporter.name},{' '}
                <a href={item.reporter.citeUrl} target="_blank" rel="noopener noreferrer">
                  {item.reporter.citeUrl}
                </a>
              </em>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
