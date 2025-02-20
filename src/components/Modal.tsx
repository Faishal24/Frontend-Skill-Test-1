interface ModalProps {
  setShow: (show: boolean) => void;
}

export default function Modal({ setShow }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-slate-950 bg-opacity-75 flex justify-center items-center p-4 text-center"
      onClick={() => setShow(false)}
    >
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
  );
}
