import React from 'react';

import './TripleTriad.css';

import Card from '../card';

const TripleTriad = () => (
    <div className="container">
        <div className="wrapper">
            <header>
                <h1>Triple Triad Game</h1>
            </header>
            <main>
                <div className="game-board">
                <Card />
                {/* <div className="game-piece"></div>
                <div className="game-piece"></div>
                <div className="game-piece"></div>
                <div className="game-piece"></div>
                <div className="game-piece"></div>
                <div className="game-piece"></div>
                <div className="game-piece"></div>
                <div className="game-piece"></div>
                <div className="game-piece"></div> */}
                </div>
            </main>
        </div>
    </div>
);

export default TripleTriad;
