import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<string[]>([
    "To Do Title 1",
    "To Do Title 2 with very very very very long description",
    "To Do Title 3",
    "To Do Title 4",
    "To Do Title 5",
  ]);
  const [show, setShow] = useState(false);

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!title) {
      alert("Title is required");
      return;
    }
    setTodos([...todos, title]);
    setTitle("");
  };

  const removeTodo = (title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;
    setTodos(todos.filter((todo) => todo !== title));
  };

  return (
    <>
      <title>To-Do List</title>
      <div className="container min-h-screen font-sans text-gray-800 space-y-8">
        <Header setShow={setShow} />
        <Form addTodo={addTodo} title={title} setTitle={setTitle} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
      {show && <Modal setShow={setShow} />}
    </>
  );
}

export default App;
