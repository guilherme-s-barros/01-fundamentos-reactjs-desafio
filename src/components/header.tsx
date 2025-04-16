import { PlusCircle } from 'phosphor-react'

import logo from '../assets/logo.svg'

import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Logotipo do To-do TaskList" />
      </div>

      <div className="container">
        <form className={styles.addTaskForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle size={20} weight="bold" />
          </button>
        </form>
      </div>
    </header>
  )
}