import { useTodos } from "./todosHooks";
import { TodoAdder } from "./TodoAdder";

export function Todos(): JSX.Element {
  const { data } = useTodos();
  return (
    <div>
      <TodoAdder />
      <ul>
        {data?.map(({ id, name }) => (
          <ul key={id}>{name}</ul>
        ))}
      </ul>
    </div>
  );
}
