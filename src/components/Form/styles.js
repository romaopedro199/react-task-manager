import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 350px;
  min-width: 250px;
  padding: 15px 10px 10px 20px;
  margin-right: 10px;
  font-family: 'Josefin Sans', serif;
  font-size: 15px;
  color: #ccc;
  background-color: #1d222b;
  border: 1px solid #444;
  outline: none;
  border-radius: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`

export const FlexContainer = styled.div`
  display: flex;
`

export const Button = styled.button`
  margin: 10px;
`

export const AddButton = styled(Button)`
  min-width: 100px;
  background-color: #790e43;
  color: #ccc;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
`

export const ClearButton = styled(Button)`
  width: 100px;
  height: 35px;
  background-color: #790e43;
  color: #ccc;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
`
