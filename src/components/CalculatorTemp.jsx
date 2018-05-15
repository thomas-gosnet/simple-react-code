import React, { Component } from 'react'

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
}

function BoilingVerdict(props) {
	if (Number.isNaN(props.celsius)) {
		return <p>Please enter a number</p>
	}
	if (props.celsius >= 100) {
		return <p>The water would boil.</p>
	}
	return <p>The water would not boil.</p>
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32
}

function tryToConvert(temperature, convert) {
	const input = parseFloat(temperature)
	if (Number.isNaN(input)) {
		return ''
	}
	const output = convert(input)
	const rounded = Math.round(output * 1000) / 1000
	return rounded.toString()
}

class TemperatureInput extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.props.onTemperatureChange(event.target.value)
	}

	render() {
		const temperature = this.props.temperature
		const scale = this.props.scale
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}</legend>
				<input value={temperature} onChange={this.handleChange} />
			</fieldset>
		)
	}
}

export default class CalculatorTemp extends Component {
	constructor(props) {
		super(props)
		this.state = { temperature: '', scale: 'c' }
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: 'c', temperature })
	}

	handleFahrenheitChange(temperature) {
		this.setState({ scale: 'f', temperature })
	}

	render() {
		const scale = this.state.scale
		const temperature = this.state.temperature
		const celsius = scale === 'f' ? tryToConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryToConvert(temperature, toFahrenheit) : temperature
		return (
			<div>
				<TemperatureInput
					scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange}
				/>
				<TemperatureInput
					scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange}
				/>
				<BoilingVerdict
					celsius={parseFloat(celsius)}
				/>
			</div>
		)
	}
}


