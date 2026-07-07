import { FiMic } from "react-icons/fi";

export default function VoiceRecorder({
  setDescription,
}) {

  const startRecording = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert("Speech Recognition not supported.");

      return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.start();

    recognition.onresult = (event) => {

      setDescription(
        event.results[0][0].transcript
      );

    };

  };

  return (

    <button

      onClick={startRecording}

      className="flex items-center gap-3 bg-red-500 text-white px-5 py-3 rounded-2xl shadow"

    >

      <FiMic />

      Voice Input

    </button>

  );

}