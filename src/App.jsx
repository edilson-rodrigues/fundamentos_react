import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';



// eslint-disable-next-line
export default () =>
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card
                titulo="#05 - Componentes com Filhos"
                firstColor="#f9d423"
                secoundColor="#38f9d7"
            >
                <Familia sobreNome='Rodrigues'>
                    <FamiliaMembro nome='Edilson' />
                    <FamiliaMembro nome='Leticia' />
                    <FamiliaMembro nome='Moisés' />
                </Familia>
            </Card>
            <Card
                titulo="#04 - Desafio Aleatório"
                firstColor="#fa709a"
                secoundColor="#fee140"
            >
                <Aleatorio min={0} max={60} />
            </Card>

            <Card
                titulo="#03 - Fragmento"
                firstColor="#43e97b"
                secoundColor="#38f9d7"
            >
                <Fragmento />
            </Card>

            <Card
                titulo="#02 - Com Parâmetro"
                firstColor="#accbee"
                secoundColor="#e7f0fd"
            >
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
    </div>

