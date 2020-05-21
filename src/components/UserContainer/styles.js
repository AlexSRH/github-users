import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
  margin: 20px auto 0 auto;
  width: 100vw;
  max-width: 1000px;

  .user-card {
    img {
      border-radius: 15px;
      width: 100%;
      margin-bottom: 10px;
    }

    h2 {
      margin-bottom: 10px;
    }

    h3 {
      color: ${props => props.theme.colors.secondaryText};
      margin-bottom: 10px;
    }
  }

  .repos-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    max-height: 320px;

    .repo {
      border: 1px solid #aaa;
      border-radius: 15px;
      color: ${props => props.theme.colors.secondaryText};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      height: 150px;

      a {
        color: ${props => props.theme.colors.repo.link};
        display: block;
        text-decoration: underline;
      }

      .tech {
        justify-self: flex-end;
      }
    }
  }
`
