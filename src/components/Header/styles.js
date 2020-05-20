import styled from 'styled-components'

export const Container = styled.div`
  background-color: #24292E;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: space-between;
  padding: 0 20px;

  form {
    position: relative;
    width: 100%;
    margin: 0 50px;
  }

  form input {
    background-color: #404448;
    border: 0;
    color: #fff;
    padding: 10px;
    width: 100%;
  }

  button {
    background-color: #404448;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 0px;
    height: 100%;
    width: 40px;
  }
`

export const ThemeChosser = styled.div`
  display: flex;
  align-items: center;

  .toggle-button {
    margin: 0 5px;
  }

  .toggle-button .inner {
    transition: transform 0.2s;
  }

  .toggle-button.off .inner {
    transform: translateX(0px)
  }

  .toggle-button.on .inner {
    transform: translateX(16px)
  }
`
