import React, { useContext, useEffect, useState } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
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
    <form className='form'>
      <input
        onChange={handleChange}
        value={title}
        type='text'
        className='task-input'
        placeholder='Add Task...'
      />
      <div className='buttons'>
        <button onClick={handleSubmit} className='btn add-task-btn'>
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button onClick={handleClearList} className='btn clear-btn'>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
