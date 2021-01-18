import React from 'react';
import './Card.css'

// eslint-disable-next-line
export default props => {
    return (
        <div className="Card">
            <div className="Title">{props.titulo}</div>
            <div className="Content"> {props.children} </div>
        </div>
    )
}