import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Current-Card.css';

const CurrentCard = (props) => {
    return(
        <div className="current-card">
            <div className="subject-header">
                <h1>{props.title}</h1>
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