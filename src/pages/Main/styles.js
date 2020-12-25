import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 15px;
  background-color: #D9727F;
`

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #465C7A;
  border-radius: 5px;
`

export const Main = styled.div`
  padding: 0px 15px 40px 15px;

  @media (min-width: 768px) {
    padding: 0px 40px 40px 40px;
  }
`
