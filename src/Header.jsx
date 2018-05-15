import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const rotate = keyframes`
  from { transform: rotate(0deg) };
  to { transform: rotate(360deg) };
`

const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 80px;
`

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppTitle = styled.h1`
  font-size: 1.5em;
`

const AppIntro = styled.p`
  font-size: large;
`
export default function Header() {
  return (
    <div>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppTitle>Welcome to React</AppTitle>
      </AppHeader>
      <AppIntro>Simply choose example to show the code
      </AppIntro>
    </div>
  )
}