import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card'

// eslint-disable-next-line
export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={0} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro"
                nota={9.3}
            />
        </Card>
        <Card titulo="#01 - Primeiro">
            <Primeiro></Primeiro>
        </Card>



    </div>

