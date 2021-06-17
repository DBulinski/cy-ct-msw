import { rest, setupWorker } from "msw";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  name: string;
}

let todos: Todo[] = [];

export const worker = setupWorker(
  rest.get("/api/todos", (req, res, ctx) =>
    res(ctx.delay(), ctx.json(todos), ctx.status(200))
  ),
  rest.post<{ name: string }>("/api/todos", (req, res, ctx) => {
    const name = req.body.name;
    const newTodo = { id: uuid(), name };
    todos.push(newTodo);

    return res(ctx.delay(), ctx.json(newTodo), ctx.status(200));
  })
);
