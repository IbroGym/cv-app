import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PhotoBox from '../PhotoBox';
import Navigation from '../Navigation';
import Button from '../Button';
import './Panel.scss';
import avatar from '../../assets/images/avatar.png';

const Panel = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <aside className={`panel ${isOpen ? 'open' : 'closed'}`}>
      {/* Hamburger button — always visible inside panel */}
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Panel content — hidden when closed */}
      <div className="panel-content">
        <PhotoBox avatar={avatar} name="Ibragim Galymzhanuly" />
        <Navigation />
        <div className="panel-footer">
          <Button
            text="Go back"
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            onClick={handleGoBack}
          />
        </div>
      </div>
    </aside>
  );
};

export default Panel;
