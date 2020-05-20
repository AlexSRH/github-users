import React from 'react'
import { ThemeProvider } from 'styled-components'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import usePersistedState from './utils/usePersistedState'
import GlobalStyles from './styles/global'
import Header from './components/Header'

export default function App () {
  const [ theme, setTheme ] = usePersistedState('theme', dark)

  function toggleTheme () {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <h1>Hello World!</h1>
    </ThemeProvider>
  )
}
