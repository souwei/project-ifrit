import React, { useState } from 'react';

import './Card.css';

import image from './card.jpg';
import pikachu from './pikachu.jpg';

const Card = () => {
    const [inPlay, setInPlay] = useState(false);
    return (
        <div
            className={`cardContainer ${inPlay ? 'cardPlay' : ''}`}
            onClick={() => setInPlay(!inPlay)}
        >
            <div
                className="cardSurface cardSurfaceFront"
                style={{ backgroundImage: `url(${image})`}}
            >
                Card
            </div>
            <div
                className="cardSurface cardSurfaceBack"
                style={{ backgroundImage: `url(${pikachu})`}}
            >
            </div>
        </div>
    )
}

export default Card;
