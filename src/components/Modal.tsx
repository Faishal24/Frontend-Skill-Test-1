import { useEffect, useState } from "react";

interface ModalProps {
  openedModal: "register" | "login" | null;
  setOpenedModal: (modal: "register" | "login" | null) => void;
}

export default function Modal({ openedModal, setOpenedModal }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setOpenedModal(null), 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-slate-950 bg-opacity-75 flex justify-center items-center p-4 text-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className="bg-white p-5 rounded-xl space-y-5 transition-all duration-300 transform scale-95 opacity-100 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold">{openedModal == "register" ? "Sign Up" : "Login"}</h2>
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
          onClick={handleClose}
        >
          {openedModal == "register" ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
}
