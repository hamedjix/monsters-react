import React from 'react';
import './card.styles.css';

const Card = (props) => {
  return (
    <div className='monster-card text-center border rounded'>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        alt='monster'
      />
      <h5>{props.monster.name}</h5>
      <p>{props.monster.email}</p>
    </div>
  );
};
export default Card;
