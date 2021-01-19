import React, { useState } from "react";
import "./Input.css";

const Input = () => {
	const [valor, setValor] = useState("Inicial");

	function quandoMudar(e) {
		setValor(e.target.value);
	}

	const style = {
		display: "flex",
		flexDirection: "column",
		margin: "10px",
	};

	return (
		<div className="Input">
			<h2>{valor}</h2>
			<div style={style}>
				{/* componentes controlados */}
				<input type="text" value={valor} onChange={quandoMudar} />
			</div>
			<div style={style}>
				{/* componentes não controlados */}
				<input type="text" value={valor} readOnly />
			</div>
			<div style={style}>
				{/* componentes não controlados */}
				<input type="text" value={undefined} />
			</div>
		</div>
	);
};
export default Input;
