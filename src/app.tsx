import { useState } from 'react'
import { ClipboardText } from 'phosphor-react'

import { Header } from './components/header'
import { Task } from './components/task'

import styles from './app.module.css'

export function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudar React', isCompleted: false },
    { id: 2, title: 'Estudar TypeScript', isCompleted: true },
  ])

  function checkTask(taskId: number) {
    const updatedTasks = tasks.map(task => task.id === taskId
      ? { ...task, isCompleted: !task.isCompleted }
      : task
    )

    setTasks(updatedTasks)
  }

  function deleteTask(taskId: number) {
    const updatedTasks = tasks.filter(task => task.id !== taskId)

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />

      <div className="container">
        <main className={styles.wrapper}>
          <div className={styles.tasksInfo}>
            <strong>Tarefas criadas <span>0</span></strong>
            <strong>Concluídas <span>0 de 0</span></strong>
          </div>

          {tasks.length === 0 ? (
            <div className={styles.emptyTasks}>
              <ClipboardText size={56} weight="thin" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            <ul className={styles.tasks}>
              {tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onCheckTask={checkTask}
                    onDeleteTask={deleteTask}
                  />
                )
              })}
            </ul>
          )}
        </main>
      </div>
    </>
  )
}
