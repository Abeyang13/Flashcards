import React, { Component } from 'react';
import './Current-Card.css';

const CurrentCard = (props) => {
    return(
        <div className="current-card">
            <div className="subject-header">
                <h1>{props.title}</h1>
            </div>
            <div className="main">
                <div className="front">
                    {props.word}
                </div>
                <div className="back">
                    {props.definition}
                </div>
            </div>
        </div>
    );
}

export default CurrentCard;