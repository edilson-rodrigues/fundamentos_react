import React from 'react';

// eslint-disable-next-line
export default props => {

    const { min, max } = props;

    function getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min)) + min;
    }

    const aleatorio = getRandomArbitrary(min, max);

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor Mínimo: <strong>{min}</strong></p>
            <p>Valor Máximo: <strong>{max}</strong></p>
            <p>Valor Escolhido: <strong>{aleatorio}</strong></p>
        </div>
    )
}