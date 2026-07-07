export default function Button({

  children,

  onClick,

  disabled,

}) {

  return (

    <button

      disabled={disabled}

      onClick={onClick}

      className="w-full rounded-2xl bg-gradient-to-r from-blue-700 to-sky-500 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 disabled:opacity-50"

    >

      {children}

    </button>

  );

}