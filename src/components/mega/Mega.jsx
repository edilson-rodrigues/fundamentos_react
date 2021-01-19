import React, { useState } from "react";
import "./Mega.css";

const Mega = () => {
	const gerarNumerosNaoContidos = (array) => {
		const numero = parseInt(Math.random() * (60 - 1)) + 1;
		return array.includes(numero) ? gerarNumerosNaoContidos(array) : numero;
	};

	const megaSena = () => {
		let numeros = [];

		for (let x = 0; x < 6; x++) {
			const sorteado = gerarNumerosNaoContidos(numeros);
			numeros.push(sorteado);
		}

		return numeros.sort((a, b) => a - b);
	};

	const numerosiniciais = Array(6).fill(0);
	const [numeros, setNumeros] = useState(numerosiniciais);

	const sorte = (_) => {
		setNumeros(megaSena);
	};

	return (
		<div className="Mega">
			<h2>Mega Senna</h2>

			<div className="numeros">
				{numeros.map((numero, i) => {
					return (
						<p key={i} className="circulo">
							{numero}
						</p>
					);
				})}
			</div>
			<button onClick={sorte}>Gerar números da sorte</button>
		</div>
	);
};
export default Mega;
