import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CASHE_KEY_TODOS } from "../constants";


export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () => {

    const fetchTodos = () =>
        axios
          .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.data);
    
      return  useQuery<Todo[], Error>({
        queryKey: CASHE_KEY_TODOS,
        queryFn: fetchTodos,
      });
}

export default useTodos;
