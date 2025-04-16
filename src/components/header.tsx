import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import logo from '../assets/logo.svg'

import styles from './header.module.css'

interface HeaderProps {
  onCreateTask(taskTitle: string): void
}

export function Header({ onCreateTask }: HeaderProps) {
  const [taskTitle, setTaskTitle] = useState('')

  function handleChangeTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value)
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    onCreateTask(taskTitle)
    setTaskTitle('')
  }

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
            onChange={handleChangeTaskTitle}
          />

          <button type="submit">
            Criar
            <PlusCircle size={20} weight="bold" />
          </button>
        </form>
      </div>
    </header>
  )
}