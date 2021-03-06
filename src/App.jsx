import "./App.css";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

// eslint-disable-next-line
export default () => (
	<div className="App">
		<h1>Fundamentos React</h1>

		<div className="Cards">
			<Card titulo="#13 - Deasfio Mega Sena">
				<Mega />
			</Card>
			<Card titulo="#12 - Contador">
				<Contador numeroIncial={100} />
			</Card>
			<Card titulo="#11 - Componente Controlado (Input)">
				<Input />
			</Card>
			<Card titulo="#10 - Comunicação Indireta">
				<IndiretaPai />
			</Card>
			<Card titulo="#09 - Comunicação Direta">
				<DiretaPai />
			</Card>
			<Card
				titulo="#08 - Renderização Condicional"
				firstColor="#22E1FF"
				secoundColor="#1D8FE1"
			>
				<ParOuImpar numero={20} />
				<UsuarioInfo usuario={{ nome: "Edilson" }} />
				<UsuarioInfo usuario={{ email: "edarodrigs@gmail.com" }} />
			</Card>
			<Card
				titulo="#07 - Desafio Repetição"
				firstColor="#B6CEE8"
				secoundColor="#F578DC"
			>
				<TabelaProdutos />
			</Card>
			<Card
				titulo="#06 - Repetição"
				firstColor="#b224ef"
				secoundColor="#7579ff"
			>
				<ListaAlunos />
			</Card>
			<Card
				titulo="#05 - Componentes com Filhos"
				firstColor="#f9d423"
				secoundColor="#38f9d7"
			>
				<Familia sobreNome="Rodrigues">
					<FamiliaMembro nome="Edilson" />
					<FamiliaMembro nome="Leticia" />
					<FamiliaMembro nome="Moisés" />
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
				<ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />
			</Card>
			<Card titulo="#01 - Primeiro">
				<Primeiro></Primeiro>
			</Card>
		</div>
	</div>
);
