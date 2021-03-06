import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);

  svg {
    fill: ${props => props.theme.colors.secondaryColor};
    margin-right: 10px;
  }
`;
