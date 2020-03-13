import React from 'react';
import './subjectList.css';

const ListOfSubjects = (props) => {
    return(
        <li>
            {props.title}
        </li>
    );
}

export default ListOfSubjects;

