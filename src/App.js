import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import usePersistedState from './utils/usePersistedState'
import GlobalStyles from './styles/global'
import Header from './components/Header'
import UserContainer from './components/UserContainer'
import ErrorMessage from './components/ErrorMessage'

import api from './services/api'

export default function App () {
  const [ theme, setTheme ] = usePersistedState('theme', dark)
  const [ user, setUser ] = useState({init: true})
  const [ repos, setRepos ] = useState([])
  const [ mainContainer, setMainContainer ] = useState(<div />)
  const limitRepos = 4

  function toggleTheme () {
    setTheme(theme.title === 'light' ? dark : light)
  }

  async function handleSearch (event) {
    event.preventDefault()
    const userName = document.getElementById('userNameInput').value

    try {
      const user = await api.get(`/users/${userName}`)
      const repos = await api.get(`/users/${userName}/repos`)
      const userData = user.data
      const reposData = repos.data

      setUser(userData)
      setRepos(reposData.slice(0, limitRepos))
    } catch {
      setUser({ message: 'Not Found' })
    }

  }

  useEffect(() => {
    if (user.init) {
      setMainContainer(<main />)
    } else if (user.message === 'Not Found') {
      setMainContainer(<ErrorMessage />)
    } else {
      setMainContainer(<UserContainer user={user} repos={repos} />)
    }
  }, [repos, user])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} handleSearch={handleSearch}/>
      {mainContainer}
    </ThemeProvider>
  )
}
