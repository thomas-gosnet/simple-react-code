import React, { Component } from 'react'
import styled from 'styled-components'

import LoginControl from './components/LoginControl'
import Mailbox from './components/Mailbox'
import Page from './components/Page'
import NumberList from './components/NumberList'
import Blog from './components/Blog'
import NameForm from './components/NameForm'
import Comment from './components/Comment'
import Clock from './components/Clock'
import Repeat from './components/Repeat'
import Toogle from './components/Toogle'
import EssayForm from './components/EssayForm'
import FlavorForm from './components/FlavorForm'
import Reservation from './components/Reservation'
import Calculator from './components/Calculator'
import CalculatorTemp from './components/CalculatorTemp'
import FilterableProductTable from './components/FilterableProductTable'

const Left = styled.div`
  margin-top: 3%;
  float: left;
  width: 45%;
`

const comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author: {
		name: 'Hello Kitty',
		avatarUrl: 'http://placekitten.com/g/64/64',
	}
}

const messages = ['React', 'Re: React', 'Re:Re: React']

var items = [
	{ name: "Matthew", link: "https://scantrad.fr/" },
	{ name: "Mark", link: "http://www.japscan.cc/" },
	{ name: "Luke", link: "https://reactjs.org/docs/forms.html" },
	{ name: "John", link: "/" }
]

const numbers = [1, 2, 3, 4, 5]

const posts = [
	{ id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
	{ id: 2, title: 'Installation', content: 'You can install React from npm.' }
]

const PRODUCTS = [
	{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
	{ category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
	{ category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
	{ category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
	{ category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
	{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]

export default class Select extends Component {
	constructor(props) {
		super(props)
		this.handleSelectedChange = this.handleSelectedChange.bind(this)
	}

	handleSelectedChange(e) {
		this.props.onSelectedChange(e.target.value)
	}

	render() {
		const options = []
		this.props.InfosComponents.forEach((component) => {
			options.push(
				<option key={component.name}>{component.name}</option>
			)
		})

		return (
			<div>
				<div>
					<select value={this.props.selected} onChange={this.handleSelectedChange}>
						{options}
					</select>
				</div>
				<Left>
					{this.props.selected === 'Toogle' ? <Toogle /> : null}
					{this.props.selected === 'FilterableProductTable' ? <FilterableProductTable products={PRODUCTS} /> : null}
					{this.props.selected === 'CalculatorTemp' ? <CalculatorTemp /> : null}
					{this.props.selected === 'NameForm' ? <NameForm /> : null}
					{this.props.selected === 'Comment' ? <Comment date={comment.date} text={comment.text} author={comment.author} /> : null}
					{this.props.selected === 'Clock' ? <Clock /> : null}
					{this.props.selected === 'LoginControl' ? <LoginControl /> : null}
					{this.props.selected === 'FlavorForm' ? <FlavorForm /> : null}
					{this.props.selected === 'EssayForm' ? <EssayForm /> : null}
					{this.props.selected === 'Calculator' ? <Calculator /> : null}
					{this.props.selected === 'Mailbox' ? <Mailbox unreadMessages={messages} /> : null}
					{this.props.selected === 'Page' ? <Page /> : null}
					{this.props.selected === 'Repeat' ? <Repeat items={items} /> : null}
					{this.props.selected === 'NumberList' ? <NumberList numbers={numbers} /> : null}
					{this.props.selected === 'Blog' ? <Blog posts={posts} /> : null}
					{this.props.selected === 'Reservation' ? <Reservation /> : null}
				</Left>
			</div>
		)
	}
}