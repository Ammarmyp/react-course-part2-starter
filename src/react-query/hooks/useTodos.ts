import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { CASHE_KEY_TODOS } from "../constants";

const apiClient = new APIClient<Todo>('/todos')
export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () => {
    
      return  useQuery<Todo[], Error>({
        queryKey: CASHE_KEY_TODOS,
        //refrence the getAll method not calling it
        queryFn: apiClient.getAll,
      });
}

export default useTodos;
