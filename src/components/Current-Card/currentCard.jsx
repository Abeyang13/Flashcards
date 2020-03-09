import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './currentCard.css';

const CurrentCard = (props) => {
    return(
        <div className="current-card">
            <div className="subject-header">
                Subject: {props.title}
            </div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div className="main">
                            <div className="front">
                                {props.word}
                            </div>
                            <div className="back">
                                {props.definition}
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default CurrentCard;