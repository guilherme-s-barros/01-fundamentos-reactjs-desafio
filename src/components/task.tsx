import { ChangeEvent } from 'react'
import { Trash } from 'phosphor-react'

import styles from './task.module.css'

interface TaskProps {
  task: {
    id: number
    title: string
    isCompleted: boolean
  }
  onCheckTask(taskId: number): void
}

export function Task({ task, onCheckTask }: TaskProps) {
  function handleCheckTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.classList.add(styles.interacted)

    onCheckTask(task.id)
  }

  return (
    <li className={styles.task}>
      <input
        type="checkbox"
        onChange={handleCheckTask}
        checked={task.isCompleted}
      />
      
      <p>{task.title}</p>

      <button className={styles.deleteTaskButton} title="Deletar tarefa">
        <Trash size={20} weight="bold" />
        <span className={styles.deleteTaskButtonText}>Deletar tarefa</span>
      </button>
    </li>
  )
}