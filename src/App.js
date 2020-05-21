import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import usePersistedState from './utils/usePersistedState'
import GlobalStyles from './styles/global'
import Header from './components/Header'
import MainContainer from './components/MainContainer'

import api from './services/api'

export default function App () {
  const [ theme, setTheme ] = usePersistedState('theme', dark)
  const [ user, setUser ] = useState({})
  const [ repos, setRepos ] = useState({})

  function toggleTheme () {
    setTheme(theme.title === 'light' ? dark : light)
  }

  async function handleSearch (event) {
    event.preventDefault()
    const userName = document.getElementById('userNameInput').value

    const user = await api.get(`/users/${userName}`)
    const repos = await api.get(`/users/${userName}/repos`)
    setUser(user.data)
    setRepos(repos.data)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} handleSearch={handleSearch}/>
      <MainContainer />
    </ThemeProvider>
  )
}
