import React, { useContext, useEffect, useState } from 'react'
import { TaskListContext } from '../../context/TaskListContext'

import * as S from './styles'

const Form = () => {
  const { addTask, clearList, editItem, editTask } = useContext(TaskListContext)

  const [title, setTitle] = useState('')

  const handleChange = e => {
    setTitle(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(editItem.id, title)
    }
  }

  const handleClearList = e => {
    e.preventDefault()
    clearList()
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <S.Form>
      <S.Input
        onChange={handleChange}
        value={title}
        type='text'
        placeholder='Add Task...'
      />
      <S.FlexContainer>
        <S.AddButton onClick={handleSubmit}>
          {editItem ? 'Edit Task' : 'Add Task'}
        </S.AddButton>
        <S.ClearButton onClick={handleClearList}>
          Clear
        </S.ClearButton>
      </S.FlexContainer>
    </S.Form>
  )
}

export default Form
