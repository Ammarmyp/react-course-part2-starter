import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";
import React from "react";


interface TasksContextType {
    tasks: Task[];
    dispatch: Dispatch<TaskAction>
}

//provide the type of object we want to share
const TasksContext = React.createContext<TasksContextType>({} as TasksContextType);

export default TasksContext;

/**
 * - To share a state using react context
    1. lift the state to the closest parent
    2. create a context ( is like a truck for transporting data ) : as part of this we should specify the type of data we want to transport
    3. We wrap our component tree using a provider component and provide the data we want to share.
    4. then access the data using the context hook
 */