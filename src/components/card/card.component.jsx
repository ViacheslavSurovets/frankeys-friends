import React from 'react';

import './card.styles.css';

export const Card = ({monster}) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set3?size=150x150`} />
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
    </div>

);

