import React, { useState } from 'react';
import './Portfolio.scss';
import card1 from '../../assets/images/card_1.jpg';
import card3 from '../../assets/images/card_3.png';

const portfolioData = [
  {
    id: 1,
    title: 'Project One',
    category: 'ui',
    image: card1,
    description: 'A modern UI design project with responsive layouts and clean aesthetics.',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'code',
    image: card3,
    description: 'A full-stack web application built with React and Node.js.',
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    category: 'ui',
    image: card1,
    description: 'Mobile-first design system for an enterprise application.',
    link: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    category: 'code',
    image: card3,
    description: 'RESTful API development with comprehensive documentation.',
    link: '#',
  },
];

const tabs = ['all', 'ui', 'code'];

const Portfolio = ({ items }) => {
  const [activeTab, setActiveTab] = useState('all');
  const data = items || portfolioData;

  const filteredItems = activeTab === 'all'
    ? data
    : data.filter(item => item.category === activeTab);

  return (
    <div className="portfolio">
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li key={tab} className={activeTab === tab ? 'active' : ''}>
            <span onClick={() => setActiveTab(tab)}>{tab}</span>
          </li>
        ))}
      </ul>
      <ul className="filter-container">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="portfolio-info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link}>View project</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
