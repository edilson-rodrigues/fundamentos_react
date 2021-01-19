const DiretaFilho = (props) => {
	const { getIndiretaFilho } = props;
	const gerarIdade = () => parseInt(Math.random() * 20) + 50;
	const gerarNed = () => Math.random() > 0.5;

	return (
		<div>
			<button
				onClick={(_) => getIndiretaFilho("Edilson", gerarIdade(), gerarNed())}
			>
				Forncer Informações
			</button>
		</div>
	);
};

export default DiretaFilho;
