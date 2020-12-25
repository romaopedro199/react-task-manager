import React from 'react'
import TaskList from '../../components/TaskList'
import Form from '../../components/Form'
import Header from '../../components/Header'
import TaskListContextProvider from '../../context/TaskListContext'

import GlobalStyles from '../../GlobalStyles'
import * as S from './styles'

const Main = () => {
  return (
    <TaskListContextProvider>
      <GlobalStyles />
      <S.Wrapper>
        <S.Container>
          <Header />
          <S.Main>
            <Form />
            <TaskList />
          </S.Main>
        </S.Container>
      </S.Wrapper>
    </TaskListContextProvider>
  )
}

export default Main
