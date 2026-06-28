import React from 'react';
import './PhotoBox.scss';

const PhotoBox = ({ name, title, description, avatar, photo }) => {
  const imageSrc = avatar || photo;

  return (
    <div className="photo-box">
      <figure>
        <div className="crop-photo">
          <img src={imageSrc} alt={name} />
        </div>
        <figcaption>
          <strong className="title">{name}</strong>
          {title && <h5>{title}</h5>}
          {description && <p className="description">{description}</p>}
        </figcaption>
      </figure>
    </div>
  );
};

export default PhotoBox;
