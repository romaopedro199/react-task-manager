import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 15px;
  margin: 10px 0px;

  background-color: #324055;
  border-radius: 5px;
  list-style: none;

  @media (min-width: 768px) {
    width: 300px;
  }

  span {
    font-weight: 700;
    color: rgba(255, 255, 255, .5);
  }
`

export const Button = styled.button`
  background-color: #FCBB6D;
  border: 1px solid #FCBB6D;
  border-radius: 2px;
  padding: 5px 8px;
  margin: 5px;

  i {
    color: #324055;
  }
`
