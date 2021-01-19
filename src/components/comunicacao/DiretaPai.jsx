import DiretaFilho from "./DiretaFilho";

const DiretaPai = (_) => {
	return (
		<div>
			<DiretaFilho nome="Pedro" idade={20} nerd={false} />
			<DiretaFilho nome="Gabriel" idade={17} nerd={true} />
		</div>
	);
};

export default DiretaPai;
