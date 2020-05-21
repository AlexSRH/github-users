import React from 'react'

import { Container } from './styles'

function UserContainer() {
  return (
    <Container>
      <div className="user-card">
        <img src="https://avatars3.githubusercontent.com/u/54218793?v=4" alt="Avatar"/>
        <h2>Alexsandro G Bezerra</h2>
        <h3>AlexSRH</h3>
        <p>
          Estudante e amante da Tecnologia.
          Procuro e pretende desenvolver projetos em Javascript.
        </p>
      </div>
      <div className="repos-grid">
        <div className="repo">
          <a href="#" className="title">star-wars-react</a>
          <p className="description">A React app that lists Star Wars Characters</p>
          <span className="tech">Javascript</span>
        </div>
        <div className="repo">
          <a href="#" className="title">star-wars-react</a>
          <p className="description">A React app that lists Star Wars Characters</p>
          <span className="tech">Javascript</span>
        </div>
        <div className="repo">
          <a href="#" className="title">star-wars-react</a>
          <p className="description">A React app that lists Star Wars Characters</p>
          <span className="tech">Javascript</span>
        </div>
        <div className="repo">
          <a href="#" className="title">star-wars-react</a>
          <p className="description">A React app that lists Star Wars Characters</p>
          <span className="tech">Javascript</span>
        </div>
      </div>
    </Container>
  )
}

export default UserContainer
