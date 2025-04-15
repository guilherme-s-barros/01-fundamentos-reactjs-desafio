import { Trash } from 'phosphor-react'

import styles from './task.module.css'

export function Task() {
  return (
    <li className={styles.task}>
      <input type="checkbox" />
      
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