import { FiMic } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function VoiceRecorder({ setDescription }) {
  const { language } = useLanguage();
  const t = translations[language];

  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    // Change recognition language based on selected UI language
    recognition.lang = language === "hi" ? "hi-IN" : "en-IN";

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      setDescription(event.results[0][0].transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
    };

    recognition.start();
  };

  return (
    <button
      onClick={startRecording}
      className="flex items-center gap-3 bg-red-500 text-white px-5 py-3 rounded-2xl shadow hover:bg-red-600 transition"
    >
      <FiMic />
      {t.voiceInput}
    </button>
  );
}