import React from 'react';
import './Current-Card.css';

const CurrentCard = (props) => {
    return(
        <div className="current-card">
            <div className="front">
                {props.word}
            </div>
            <div className="back">
                {props.definition}
            </div>
        </div>
    );
}

export default CurrentCard;