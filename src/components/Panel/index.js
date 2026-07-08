import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PhotoBox from '../PhotoBox';
import Navigation from '../Navigation';
import Button from '../Button';
import './Panel.scss';
import avatar from '../../assets/images/avatar.jpg';

const MOBILE_BREAKPOINT = 768;
const SKILLS_FORM_DELAY_MS = 3000; // matches MirageJS server timing

const Panel = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

  // Start closed on mobile, open on desktop
  const [isOpen, setIsOpen] = useState(!isMobile);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      if (!mobile && !isOpen) setIsOpen(true);
      if (mobile && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && window.innerWidth <= MOBILE_BREAKPOINT) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleBackdropClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger button — fixed, always visible */}
      <button
        className={`hamburger-btn${isOpen ? ' hamburger-btn--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Dark backdrop on mobile when panel is open */}
      {isOpen && (
        <div
          className="panel-backdrop"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}

      {/* Panel — collapses to 0 when closed */}
      <aside className={`panel ${isOpen ? 'open' : 'closed'}`}>
        <div className="panel-content">
          <div className="panel-top-spacer" />
          <PhotoBox avatar={avatar} name="Ibragim Galymzhanuly" />
          <Navigation onNavClick={() => window.innerWidth <= MOBILE_BREAKPOINT && setIsOpen(false)} />
          <div className="panel-footer">
            <Button
              text="Go back"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              onClick={handleGoBack}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Panel;
