import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex rounded-full bg-slate-100 p-1 shadow-md border border-slate-200">
      <button
        onClick={() => setLanguage("en")}
        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
          language === "en"
            ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
            : "text-slate-700 hover:bg-slate-200"
        }`}
      >
         English
      </button>

      <button
        onClick={() => setLanguage("hi")}
        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
          language === "hi"
            ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
            : "text-slate-700 hover:bg-slate-200"
        }`}
      >
         हिन्दी
      </button>
    </div>
  );
}