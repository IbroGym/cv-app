import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Address.scss';

const Address = ({ data }) => {
  return (
    <div className="address">
      {data.map((item, index) => (
        <dl key={index}>
          <dt>
            <span className="icon">
              {item.faIcon ? (
                <FontAwesomeIcon icon={item.faIcon} />
              ) : (
                item.icon
              )}
            </span>
          </dt>
          <dd>
            {item.link ? (
              <>
                {item.label && <strong>{item.label}</strong>}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.text}
                </a>
              </>
            ) : (
              <a href={item.href}>{item.text}</a>
            )}
          </dd>
        </dl>
      ))}
    </div>
  );
};

export default Address;
