import { ChangeEvent } from 'react'
import { Trash } from 'phosphor-react'

import styles from './task.module.css'

export function Task() {
  function handleCheckTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.classList.add(styles.interacted)
  }

  return (
    <li className={styles.task}>
      <input type="checkbox" onChange={handleCheckTask} />
      
      <p>
        Integer urna interdum massa libero auctor neque turpis
        turpis semper. Duis vel sed fames integer.
      </p>

      <button className={styles.deleteTaskButton} title="Deletar tarefa">
        <Trash size={20} weight="bold" />
        <span className={styles.deleteTaskButtonText}>Deletar tarefa</span>
      </button>
    </li>
  )
}