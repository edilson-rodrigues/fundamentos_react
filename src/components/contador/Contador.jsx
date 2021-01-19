import React, { Component } from "react";
import "./Contador.css";

import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
	state = {
		numero: this.props.numeroIncial || 0,
		passo: this.props.passoIncial || 5,
	};

	increment = () => {
		this.setState({ numero: this.state.numero + this.state.passo });
	};

	decrement = () => {
		this.setState({ numero: this.state.numero - this.state.passo });
	};

	setPasso = (novoPasso) => {
		this.setState({ passo: novoPasso });
	};

	render() {
		return (
			<div className="Contador">
				<h2>Contador</h2>
				<Display numero={this.state.numero} />
				<PassoForm passo={this.state.passo} setPasso={this.setPasso} />
				<Botoes setIncrement={this.increment} setDecrement={this.decrement} />
			</div>
		);
	}
}

export default Contador;
