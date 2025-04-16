import { ChangeEvent } from 'react'
import { Trash } from 'phosphor-react'

import styles from './task.module.css'

interface Task {
  id: number
  title: string
  isCompleted: boolean
}

interface TaskProps {
  task: Task
  onCheckTask(taskId: number): void
  onDeleteTask(taskId: number): void
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
  function handleCheckTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.classList.add(styles.interacted)

    onCheckTask(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <li className={styles.task}>
      <input
        type="checkbox"
        onChange={handleCheckTask}
        checked={task.isCompleted}
      />
      
      <p>{task.title}</p>

      <button
        className={styles.deleteTaskButton}
        title="Deletar tarefa"
        onClick={handleDeleteTask}
      >
        <Trash size={20} weight="bold" />
        <span className={styles.deleteTaskButtonText}>Deletar tarefa</span>
      </button>
    </li>
  )
}