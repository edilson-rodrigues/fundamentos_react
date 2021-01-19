import IndiretaFilho from "./IndiretaFilho";

const DiretaPai = (_) => {
	let _nome = "?";
	let _idade = 0;
	let _nerd = false;

	function getInfo(nome, idade, nerd) {
		_nome = nome;
		_idade = idade;
		_nerd = nerd;
	}

	return (
		<div>
			<div>
				<div>{_nome}</div>
				<div>{_idade}</div>
				<div>{_nerd ? "Verdadeiro" : "Falso"}</div>
			</div>
			<IndiretaFilho getIndiretaFilho={getInfo} />
		</div>
	);
};

export default DiretaPai;
