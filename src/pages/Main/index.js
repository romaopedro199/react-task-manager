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
      <S.Container>
        <S.AppWrapper>
          <Header />
          <S.Main>
            <Form />
            <TaskList />
          </S.Main>
        </S.AppWrapper>
      </S.Container>
    </TaskListContextProvider>
  )
}

export default Main
