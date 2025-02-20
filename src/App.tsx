import { useState } from "react";

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
    if (!title) return;
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
        <div className="mt-8 flex justify-between">
          <h1 className="text-xl font-bold">To-Do List</h1>
          <div className="flex gap-3">
            <button className="py-1 px-3 transition-colors duration-200 bg-sky-600 text-white text-sm font-semibold rounded-md hover:bg-sky-700">
              Login
            </button>
            <button
              className="py-1 px-3 transition-colors duration-200 bg-sky-600 text-white text-sm font-semibold rounded-md hover:bg-sky-700"
              onClick={() => setShow(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
        <form className="flex gap-3" onSubmit={addTodo}>
          <input
            name="title"
            placeholder="Title"
            className="w-full py-3 px-5 border border-gray-500 rounded-md placeholder:text-gray-400 bg-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="py-3 px-5 transition-colors duration-200 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700"
          >
            Add
          </button>
        </form>
        <div className="gap-3 sm:gap-x-5 lg:gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center gap-3 py-4 px-5 bg-sky-100 rounded-md"
            >
              <h3>{todo.title}</h3>
              <div>
                <button
                  className="size-4 transition-colors duration-200 fill-red-500 hover:fill-red-600"
                  onClick={() => removeTodo(todo.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {show && (
        <div className="fixed inset-0 bg-slate-950 bg-opacity-75 flex justify-center items-center p-4 text-center" onClick={() => setShow(false)}>
          <div className="bg-white p-5 rounded-xl space-y-5" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold">Sign Up</h2>
            <input
              name="email"
              placeholder="Email"
              className="w-full py-3 px-5 border border-gray-500 rounded-md placeholder:text-gray-400 bg-white"
            />
            <input
              name="password"
              placeholder="Password"
              className="w-full py-3 px-5 border border-gray-500 rounded-md placeholder:text-gray-400 bg-white"
            />
            <button
              className="py-3 px-5 bg-sky-600 text-white text-sm rounded-md mt-4"
              onClick={() => setShow(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
