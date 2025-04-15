import { Header } from './components/header'
import { Task } from './components/task'

import styles from './app.module.css'

export function App() {
  return (
    <>
      <Header />

      <main className="container">
        <header>
          <strong>Tarefas criadas <span>0</span></strong>
          <strong>Concluídas <span>0</span></strong>
        </header>

        <ul className={styles.tasks}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </ul>
      </main>
    </>
  )
}
