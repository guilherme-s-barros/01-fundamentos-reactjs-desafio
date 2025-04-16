import { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { ClipboardText } from 'phosphor-react'

import { Header } from './components/header'
import { Task, TaskData } from './components/task'

import styles from './app.module.css'

export function App() {
  const [tasks, setTasks] = useState<TaskData[]>([])

  const allTasks = tasks.length

  const completedTasks = tasks.reduce((total, task) => {
    if (task.isCompleted) {
      total += 1
    }

    return total
  }, 0)

  function createTask(taskTitle: string) {
    const newTask: TaskData = {
      id: uuidV4(),
      title: taskTitle,
      isCompleted: false,
    }

    setTasks(state => [...state, newTask])
  }

  function checkTask(taskId: string) {
    const updatedTasks = tasks.map(task => task.id === taskId
      ? { ...task, isCompleted: !task.isCompleted }
      : task
    )

    setTasks(updatedTasks)
  }

  function deleteTask(taskId: string) {
    const updatedTasks = tasks.filter(task => task.id !== taskId)

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header onCreateTask={createTask} />

      <div className="container">
        <main className={styles.wrapper}>
          <div className={styles.tasksInfo}>
            <strong>Tarefas criadas <span>{allTasks}</span></strong>
            <strong>
              Concluídas <span>{completedTasks} de {allTasks}</span>
            </strong>
          </div>

          {allTasks === 0 ? (
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
