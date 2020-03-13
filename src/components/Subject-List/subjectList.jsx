import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './subjectList.css';

const ListOfSubjects = (props) => {
    return(
        <li>
            {props.title}
        </li>

    );
}

export default ListOfSubjects;

