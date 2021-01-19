import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const DiretaPai = (_) => {
	const [nome, setNome] = useState("?");
	const [idade, setIdade] = useState(0);
	const [nerd, setNerd] = useState(false);

	function getInfo(nome, idade, nerd) {
		setNome(nome);
		setIdade(idade);
		setNerd(nerd);
	}

	return (
		<div>
			<div>
				<div>Nome: {nome}</div>
				<div>Idade: {idade}</div>
				<div>Nerd: {nerd ? "Sim" : "Não"}</div>
			</div>
			<IndiretaFilho getIndiretaFilho={getInfo} />
		</div>
	);
};

export default DiretaPai;
