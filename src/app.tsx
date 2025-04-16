import { Header } from './components/header'
import { Task } from './components/task'

import styles from './app.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className="container">
        <main className={styles.wrapper}>
          <div className={styles.tasksInfo}>
            <strong>Tarefas criadas <span>0</span></strong>
            <strong>Concluídas <span>0 de 0</span></strong>
          </div>

          <ul className={styles.tasks}>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </ul>
        </main>
      </div>
    </>
  )
}
