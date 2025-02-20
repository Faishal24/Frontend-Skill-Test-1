import React from "react";

interface FormProps {
    addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
    title: string;
    setTitle: (title: string) => void;
}

export default function Form({ addTodo, title, setTitle }: FormProps) {
  return (
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
  );
}
