import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)
  const [editItem, setEditItem] = useState(null)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title) => {
    setTasks([...tasks, { id: uuid(), title }])
  }

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const clearList = () => {
    setTasks([])
  }

  const findItem = id => {
    const item = tasks.find(task => task.id === id)

    setEditItem(item)
  }

  const editTask = (id, title) => {
    const newTasks = tasks.map(task => (task.id === id ? { id, title } : task))

    setTasks(newTasks)
    setEditItem(null)
  }

  return (
    <TaskListContext.Provider value={{
      tasks,
      addTask,
      removeTask,
      clearList,
      findItem,
      editTask,
      editItem
    }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
