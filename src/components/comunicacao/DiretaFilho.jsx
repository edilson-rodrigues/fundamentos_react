const DiretaFilho = (props) => {
	const { nome, idade, nerd } = props;
	return (
		<div>
			<div>{nome}</div>
			<div>{idade}</div>
			<div>
				<span>{nerd ? "Verdadeiro" : "Falso"}</span>
			</div>
		</div>
	);
};

export default DiretaFilho;
