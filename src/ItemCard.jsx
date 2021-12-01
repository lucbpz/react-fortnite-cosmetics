import React from 'react';
import './item.css';

const ItemCard = ({ imgSrc, name, description }) => {
  return (
    <div className="card">
      <img className="card-img" src={imgSrc} />
      <p className="card-title">{name}</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ItemCard;
