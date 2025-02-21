import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: string[];
    removeTodo: (indexToRemove: number) => void;
}

export default function TodoList({ todos, removeTodo }: TodoListProps) {
  return (
    <div className="gap-3 sm:gap-x-5 lg:gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} removeTodo={() => removeTodo(index)} />
      ))}
    </div>
  );
}
