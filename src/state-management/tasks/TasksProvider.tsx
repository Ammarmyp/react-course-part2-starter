import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";



export interface Task {
  id: number;
  title: string;
}
//an action that requires some extra data or payload
// we should define different types of action or scenarios

interface AddTask {
  type: 'ADD';
  task: Task;
}

interface DeleteTask {
  type: 'DELETE';
  taskId: number
}

// the union of all the defined actions
export  type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
      case 'ADD':
          return [action.task , ...tasks]
      case 'DELETE':
          return  tasks.filter(t => t.id !== action.taskId);
  
     
  }
}


interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
