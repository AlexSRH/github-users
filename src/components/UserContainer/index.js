import React from 'react'

import { Container } from './styles'

function UserContainer({ user, repos }) {
  return (
    <Container>
      <div className="user-card">
        <img src={user.avatar_url} alt="Avatar"/>
        <h2>{user.name}</h2>
        <h3>{user.login}</h3>
        <p>{user.bio}</p>
      </div>
      <div className="repos-grid">
        {
          repos.map(repo => (
            <div className="repo">
              <a href={repo.html_url} className="title" target="_blank">{repo.name}</a>
              <p className="description">{repo.description}</p>
              <span className="tech">{repo.language}</span>
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default UserContainer
