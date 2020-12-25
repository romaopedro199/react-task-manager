import React, { useContext } from 'react'
import { TaskListContext } from '../../../context/TaskListContext'

import * as S from './styles'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)

  return (
    <S.ListItem>
      <span>{task.title}</span>
      <div>
        <S.Button
          onClick={() => removeTask(task.id)}
          className='btn-delete task-btn'
        >
          <i className='fas fa-trash-alt' />
        </S.Button>
        <S.Button
          onClick={() => findItem(task.id)}
          className='btn-edit task-btn'
        >
          <i className='fas fa-pen' />
        </S.Button>
      </div>
    </S.ListItem>
  )
}

export default Task
