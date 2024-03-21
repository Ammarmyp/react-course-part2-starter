import { useQuery } from "@tanstack/react-query";
import { CASHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";



const useTodos = () => {
    
      return  useQuery<Todo[], Error>({
        queryKey: CASHE_KEY_TODOS,
        //refrence the getAll method not calling it
        queryFn: todoService.getAll,
      });
}

export default useTodos;
