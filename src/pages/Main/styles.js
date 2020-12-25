import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(100deg, rgb(182, 40, 111) 50%, #ac2066 0);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AppWrapper = styled.div`
  background-color: #292f38;
  width: 25%;
  min-width: 450px;
  height: 600px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-bottom: 50px;
  width: 100%;
`
