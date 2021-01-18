import React from 'react';

export default function FamiliaMembro(props) {
    const { nome, sobreNome } = props;
    return (
        <div>
            <span>{nome} <strong>{sobreNome}</strong></span>
        </div>
    )
}