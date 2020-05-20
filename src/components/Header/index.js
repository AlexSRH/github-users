import React from 'react'
import { FiSearch, FiSun, FiMoon } from 'react-icons/fi'

import logo from '../../assets/logo.png'
import ToggleButton from '../ToggleButton'
import { Container, ThemeChosser } from './styles'

function Header ({ theme, toggleTheme }) {
  return (
    <Container>
      <img src={logo} alt="Gitub Users"/>
      <form>
        <input type="text" id="user" placeholder="Search for a User..."/>
        <button type="submit"><FiSearch color="#8D8F92" size={16} /></button>
      </form>
      <ThemeChosser>
        <FiSun size={24} color="#B2B2B2" />
        <ToggleButton isOn={theme.title === 'dark'} onClick={toggleTheme} />
        <FiMoon size={24} color="#B2B2B2" />
      </ThemeChosser>
    </Container>
  )
}

export default Header
