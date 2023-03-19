import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import "./global.css";
import styles from "./App.module.css";
import { Task } from "./components/Task";

import { v4 as uuidv4 } from 'uuid';

interface TaskType {
  id: string;
  title: string;
  checked: boolean
}

function App() {
  const [task, setTask] = useState("")  
  const [checkedCount, setCheckedCount] = useState(0);
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: "1",
      title: "fazer desafio 1 do ignite reactJS",
      checked: false,
    },
    {
      id: "2",
      title: "fazer modulo 1 do ignite nodejs",
      checked: true,

    }
  ])



  const onDeleteTask = (id: string | number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  const onCompleteTask = (taskId: string | number) => {

    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    
    setTasks(updatedTasks)
  }

  const onCreateNewTask = () => {
   if(task.length > 0 ){
    const newTask = {
      id: uuidv4(),
      title: task,
      checked: false
    }
    setTasks([...tasks, newTask])
    setTask("")
   }
  }

  useEffect(() => {
    const count = tasks.filter(task => task.checked).length
    setCheckedCount(count)

  }, [tasks])

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.addNewTaskContainer}>
          <Input placeholder="Adicione uma nova tarefa" value={task} onChange={(e) => setTask(e.target.value)}/>
          <Button onClick={onCreateNewTask} disabled={task.length < 1}>Criar</Button>
        </div>

        <div className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <label className={styles.tasksCreated}>
              Tarefas criadas <span>{tasks.length}</span>
            </label>
            <label className={styles.completedTasks}>
              Concluídas <span>{checkedCount} de {tasks.length}</span>
            </label>
          </div>
          {tasks.map((task) => {
            return (
              <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
