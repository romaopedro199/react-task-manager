import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding-bottom: 5px;

  span {
    color: #999;
  }
`

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  i {
    font-size: 16px;
    color: #bbb;
    margin-right: 20px;
  }
`
