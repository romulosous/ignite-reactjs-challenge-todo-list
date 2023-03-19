import styles from "./Task.module.css"
import { Checkbox } from "./Checkbox"
import { IcTrash } from "./IcTrash"

interface Task {
    id: string;
    title: string;
    checked: boolean
}

interface Taskprops {
    task: Task;
    onDeleteTask: (id: string | number) => void
    onCompleteTask: (id: string | number) => void
  }
  

export const Task = ({task, onDeleteTask, onCompleteTask}: Taskprops) => {
  return (
    <div className={`${styles.task} ${task.checked && styles.checked}`}>
        <Checkbox id={task.title} checked={task.checked} onChange={() => onCompleteTask(task.id)}/>
        <label htmlFor={task.title}>{task.title}</label>
        <div className={styles.trashIcon} onClick={() => { onDeleteTask(task.id)}}>
            <IcTrash />
        </div>
    </div>
  )
}
