import { useState } from "react";
import Modal from "./components/Modal";
import Todo from "./components/TodoItem";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

interface Todo {
  id: number;
  title: string;
}

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "To Do Title 1" },
    { id: 2, title: "To Do Title 2 with very very very very long description" },
    { id: 3, title: "To Do Title 3" },
    { id: 4, title: "To Do Title 4" },
    { id: 5, title: "To Do Title 5" },
  ]);
  const [show, setShow] = useState(false);

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!title) {
      alert("Title is required");
      return;
    }
    setTodos([...todos, { id: todos.length + 1, title }]);
    setTitle("");
  };

  const removeTodo = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;
    if (!window.confirm(`Are you sure you want to delete "${todo.title}"?`)) return;
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <title>To-Do List</title>
      <div className="container px-4 sm:px-8 lg:px-16 min-h-screen font-sans text-gray-800 space-y-8">
        <Header setShow={setShow} />
        <Form addTodo={addTodo} title={title} setTitle={setTitle} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
      {show && <Modal setShow={setShow} />}
    </>
  );
}

export default App;
