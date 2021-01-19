const Butoes = (props) => {
	return (
		<div>
			<button onClick={props.setIncrement}>+</button>
			<button onClick={props.setDecrement}>-</button>
		</div>
	);
};

export default Butoes;
