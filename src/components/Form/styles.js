import styled from 'styled-components'

export const Form = styled.form`
  @media (min-width: 768px) {
    width: 300px;
  }
`

export const Input = styled.input`
  background-color: #7287A4;
  border: 1px solid #7287A4;
  border-radius: 5px;
  padding: 10px 10px 8px 10px;
  color: rgba(255, 255, 255, .5);
  width: 100%;

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, .5);
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, .5);
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: rgba(255, 255, 255, .5);
  }

  &:focus {
    outline: -webkit-focus-ring-color auto 0px;
  }
`

export const FlexContainer = styled.div`
  margin-top: 10px;
  display: flex;
`

export const Button = styled.button`
  border-radius: 5px;
  padding: 10px 15px 8px 15px;
  font-weight: 700;
  cursor: pointer;

  &:focus {
    outline: -webkit-focus-ring-color auto 0px;
  }
`

export const AddButton = styled(Button)`
  background-color: #D9727F;
  border: 1px solid #D9727F;
  color: #FFFFFF;
  margin-right: 10px;
`

export const ClearButton = styled(Button)`
  background-color: #FCBB6D;
  border: 1px solid #FCBB6D;
  color: #465C7A;
`
