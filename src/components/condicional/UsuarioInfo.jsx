import React from 'react';
import If, { Else } from './if';

// eslint-disable-next-line
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/*  <If test={usuario && usuario.nome}>
                <p>Seja Bem Vindo <strong>{usuario.nome}</strong> !</p>
            </If>
            <If test={!usuario || !usuario.nome}>
                <p>Seja Bem Vindo <strong>Visitante</strong> !</p>
            </If> */}
            <If test={usuario && usuario.nome}>
                Seja Bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja Bem vindo <strong>Visitante</strong>!
                </Else>
            </If>
        </div>
    )
}
