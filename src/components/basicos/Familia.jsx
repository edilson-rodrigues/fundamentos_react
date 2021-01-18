import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default function Familia(props) {
    return <div>
        <FamiliaMembro nome='Edilson' {...props} />
        <FamiliaMembro nome='Leticia' sobreNome={props.sobreNome} />
        <FamiliaMembro nome='Moisés' sobreNome='Rodrigues' />
    </div>
}