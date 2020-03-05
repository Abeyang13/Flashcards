import React from 'react';
import './Current-Card.css';

const CurrentCard = (props) => {
    return(
        <div className="current-card">
            <div className="front">
                <div className="frontexample">data type</div>
                {props.word}
            </div>
            <div className="back">
            <div className="backexample">could be either reference or value type</div>
                {props.definition}
            </div>
        </div>
    );
}

export default CurrentCard;