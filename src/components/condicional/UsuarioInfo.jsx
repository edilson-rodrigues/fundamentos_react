import React from 'react';
import If from './if'

// eslint-disable-next-line
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <p>Seja Bem Vindo <strong>{usuario.nome}</strong> !</p>
            </If>
            <If test={!usuario || usuario.nome}>
                <p>Seja Bem Vindo <strong>Visitante</strong> !</p>
            </If>
        </div>
    )
}
