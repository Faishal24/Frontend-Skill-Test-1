import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: {
        id: number;
        title: string;
    }[];
    removeTodo: (id: number) => void;
}

export default function TodoList({ todos, removeTodo }: TodoListProps) {
  return (
    <div className="gap-3 sm:gap-x-5 lg:gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <TodoItem todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}
