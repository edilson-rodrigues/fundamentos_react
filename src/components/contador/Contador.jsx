import React, { Component } from "react";
import "./Contador.css";

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

	setPasso = (e) => {
		this.setState({ passo: +e.target.value });
	};

	render() {
		return (
			<div className="Contador">
				<h2>Contador</h2>
				<p>{this.state.numero}</p>

				<div>
					<label htmlFor="passoInput">Passo </label>
					<input
						id="passoInput"
						type="number"
						value={this.state.passo}
						onChange={this.setPasso}
					/>
				</div>

				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</div>
		);
	}
}

export default Contador;
