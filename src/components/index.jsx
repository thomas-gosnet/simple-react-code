import React from 'react'
import Mailbox from './Mailbox'
import Page from './Page'
import NumberList from './NumberList'
import Blog from './Blog'
import NameForm from './NameForm'
import Comment from './Comment'
import Clock from './Clock'
import Repeat from './Repeat'
import Toogle from './Toogle'
import EssayForm from './EssayForm'
import FlavorForm from './FlavorForm'
import Reservation from './Reservation'
import Calculator from './Calculator'
import CalculatorTemp from './CalculatorTemp'
import FilterableProductTable from './FilterableProductTable'
import LoginControl from './LoginControl'
import SignUpDialog from './SignUpDialog'

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  }
}

const messages = ['React', 'Re: React', 'Re:Re: React']

const items = [
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

const products = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]

const infosComponents = {
  Toogle: () => <Toogle />,
  FilterableProductTable: () => <FilterableProductTable products={products} />,
  CalculatorTemp: () => <CalculatorTemp />,
  NameForm: () => <NameForm />,
  Comment: () => <Comment date={comment.date} text={comment.text} author={comment.author} />,
  Clock: () => <Clock />,
  LoginControl: () => <LoginControl />,
  FlavorForm: () => <FlavorForm />,
  EssayForm: () => <EssayForm />,
  Calculator: () => <Calculator />,
  Mailbox: () => <Mailbox unreadMessages={messages} />,
  Page: () => <Page />,
  Repeat: () => <Repeat items={items} />,
  NumberList: () => <NumberList numbers={numbers} />,
  Blog: () => <Blog posts={posts} />,
  Reservation: () => <Reservation />,
  SignUpDialog: () => <SignUpDialog />,
}

export default infosComponents
