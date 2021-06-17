import * as React from "react";
import { useTodoAdder } from "./todosHooks";

export function TodoAdder(): JSX.Element {
  const [value, setValue] = React.useState("");
  const { mutate } = useTodoAdder();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add todo
        <input
          name="todoName"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button aria-label="Submit" type="submit">
          Submit
        </button>
      </label>
    </form>
  );
}
