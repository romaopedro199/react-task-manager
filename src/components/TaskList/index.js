import React, { useContext } from 'react'
import { TaskListContext } from '../../context/TaskListContext'
import Task from './Task'

import * as S from './styles'

const TaskList = () => {
  const { tasks } = useContext(TaskListContext)

  return (
    <>
      {tasks.length ? (
        <S.List>
          {tasks.map(task => {
            return <Task key={task.id} task={task} />
          })}
        </S.List>
      ) : (
        <S.NoTasks>No Tasks</S.NoTasks>
      )}
    </>
  )
}

export default TaskList
