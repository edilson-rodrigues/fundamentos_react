import React from 'react';
import './Card.css'

// eslint-disable-next-line
export default props => {



    const { firstColor, secoundColor } = props;

    console.log(firstColor)
    console.log(secoundColor)

    const cardStyle = {
        /* backgroundColor: props.color || '#F00',
        borderColor: firstColor || '#4facfe',*/
        backgroundImage: `linear-gradient(to right, ${firstColor || '#4facfe'}  0%, ${secoundColor || '#00f2fe'}  100%)`
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content"> {props.children} </div>
        </div>
    )
}