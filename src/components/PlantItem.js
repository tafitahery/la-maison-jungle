import React from 'react';
import CareScale from './CareScale';
import '../styles/PlantItem.css';

const PlantItem = ({ id, name, cover, water, light }) => {
  return (
    <li key={id} className="lmj-plant-item">
      <img src={cover} alt={name} className="lmj-plant-item-cover" />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
};

export default PlantItem;
