interface HeaderProps {
    setOpenedModal: (modal: "register" | "login" | null) => void;
}

export default function Header({ setOpenedModal }: HeaderProps) {
  const handleOpenModal = (modal: "register" | "login") => {
    setOpenedModal(modal);
    setTimeout(() => {
      if (modal === "register") {
        setOpenedModal("register");
      } else {
        setOpenedModal("login");
      }
    }, 300);
  }

  return (
    <div className="mt-8 flex justify-between">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <div className="flex gap-3">
        <button 
          className="py-1 px-3 transition-colors duration-200 bg-sky-600 text-white text-sm font-semibold rounded-md hover:bg-sky-700"
          onClick={() => handleOpenModal("login")}
        >
          Login
        </button>
        <button
          className="py-1 px-3 transition-colors duration-200 bg-sky-600 text-white text-sm font-semibold rounded-md hover:bg-sky-700"
          onClick={() => handleOpenModal("register")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
