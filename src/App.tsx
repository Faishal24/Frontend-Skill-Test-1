import { useEffect, useState, useCallback, useMemo } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [title, setTitle] = useState("");
  const [openedModal, setOpenedModal] = useState<"register" | "login" | null>(null);

  const storedTodos = useMemo(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  }, []);

  const [todos, setTodos] = useState<string[]>(storedTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!title.trim()) {
        alert("Title is required");
        return;
      }
      setTodos((prev) => [...prev, title.trim()]);
      setTitle("");
    },
    [title]
  );

  const removeTodo = useCallback(
    (indexToRemove: number) => {
      if (window.confirm(`Are you sure you want to delete "${todos[indexToRemove]}"?`)) {
        setTodos((prev) => prev.filter((_, index) => index !== indexToRemove));
      }
    },
    [todos]
  );

  return (
    <>
      <title>To-Do List</title>
      <div className="container min-h-screen font-sans text-gray-800 space-y-8">
        <Header setOpenedModal={setOpenedModal} />
        <Form addTodo={addTodo} title={title} setTitle={setTitle} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
      {openedModal && <Modal openedModal={openedModal} setOpenedModal={setOpenedModal} />}
    </>
  );
}

export default App;
