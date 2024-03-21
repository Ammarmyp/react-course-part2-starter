import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";
import { CASHE_KEY_TODOS } from "../constants";


interface AddTodoContext {
    previousTodos: Todo[];
  }

const useAddTodo = (onAdd: ()=> void) =>{
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
      mutationFn: (todo: Todo) =>
        axios
          .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
          .then((res) => res.data),
  
      onMutate: (newTodo) => {
        const previousTodos = queryClient.getQueryData<Todo[]>(CASHE_KEY_TODOS) || [];
        //optimistically update to the new value
        queryClient.setQueryData<Todo[]>(CASHE_KEY_TODOS, (todos = []) => [
          newTodo,
          ...todos,
        ]);
  
        onAdd();
  
        return { previousTodos };
      },
      
      onError: (error, newTodo, context) => {
        if (!context) return;
        queryClient.setQueryData<Todo[]>(CASHE_KEY_TODOS, context.previousTodos);
      },
      onSuccess: (savedTodo, newTodo) => {
        queryClient.setQueryData<Todo[]>(["todo"], (todos) =>
          todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
        );
      },
      //use the context returned from onMutate to roll back to the previous data
    });
}

export default useAddTodo;