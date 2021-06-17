import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo } from "../tests/setupWorker";

const getTodos = () => fetch("/api/todos").then((res) => res.json());
const addTodo = (name: string): Promise<Todo> =>
  fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  }).then((res) => res.json());

export function useTodos() {
  return useQuery<Todo[]>("todos", getTodos);
}

export function useTodoAdder() {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, string>(addTodo, {
    onSuccess: (todo) => {
      queryClient.setQueryData<Todo[] | undefined>("todos", (todos) =>
        todos ? [...todos, todo] : [todo]
      );
    },
  });
}
