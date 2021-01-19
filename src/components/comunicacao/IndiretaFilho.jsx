const DiretaFilho = (props) => {
	const { getIndiretaFilho } = props;

	return (
		<div>
			<div>Filho</div>
			<button onClick={(_) => getIndiretaFilho("Edilson", 30, true)}>
				Forncer Informações
			</button>
		</div>
	);
};

export default DiretaFilho;
