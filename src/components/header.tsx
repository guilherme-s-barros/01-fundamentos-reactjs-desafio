import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import logo from '../assets/logo.svg'

import styles from './header.module.css'

interface HeaderProps {
  onCreateTask(taskTitle: string): void
}

export function Header({ onCreateTask }: HeaderProps) {
  const [taskTitle, setTaskTitle] = useState('')

  function handleNewTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskTitle(event.target.value)
  }

  function handleNewTaskTitleInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Descreva o que você precisa fazer')
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    onCreateTask(taskTitle)
    setTaskTitle('')
  }

  const isNewTaskTitleEmpty = taskTitle.length === 0

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Logotipo do To-do TaskList" />
      </div>

      <div className="container">
        <form onSubmit={handleCreateTask} className={styles.addTaskForm}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={taskTitle}
            onChange={handleNewTaskTitleChange}
            onInvalid={handleNewTaskTitleInvalid}
            required
          />

          <button type="submit" disabled={isNewTaskTitleEmpty}>
            Criar
            <PlusCircle size={20} weight="bold" />
          </button>
        </form>
      </div>
    </header>
  )
}