import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import './Home.scss';
import avatar from '../../assets/images/avatar.png';
import heroBg from '../../assets/images/hero_bg.png';

const Home = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate('/inner');
  };

  return (
    <div className="home-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="home-hero-overlay" />
      <div className="home-hero-content">
        <div className="crop-photo">
          <img src={avatar} alt="John Doe" />
        </div>
        <h1>Ibragim Galymzhanuly</h1>
        <h2>Software Developer. Chess Coach. World Champion.</h2>
        <p>
          Building web applications with JavaScript, TypeScript & React — and shaping strategic minds on the chessboard.
        </p>
        <Button text="Know more" onClick={handleKnowMore} />
      </div>
    </div>
  );
};

export default Home;
