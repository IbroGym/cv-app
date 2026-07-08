import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGraduationCap,
  faStar,
  faPen,
  faBriefcase,
  faPaperPlane,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';

const navigationItems = [
  { label: 'About me', anchor: 'about', icon: faUser },
  { label: 'Education', anchor: 'education', icon: faGraduationCap },
  { label: 'Skills', anchor: 'skills', icon: faStar },
  { label: 'Experience', anchor: 'experience', icon: faPen },
  { label: 'Portfolio', anchor: 'portfolio', icon: faBriefcase },
  { label: 'Contacts', anchor: 'contacts', icon: faPaperPlane },
  { label: 'Feedback', anchor: 'feedback', icon: faComment },
];

const Navigation = ({ onNavClick }) => {
  const [activeItem, setActiveItem] = useState('about');

  const handleClick = (anchor) => {
    setActiveItem(anchor);
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavClick) onNavClick();
  };

  return (
    <nav>
      <ul className="navigation">
        {navigationItems.map((item) => (
          <li key={item.anchor}>
            <a
              href={`#${item.anchor}`}
              className={activeItem === item.anchor ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.anchor);
              }}
            >
              <span className="nav-icon">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="nav-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
