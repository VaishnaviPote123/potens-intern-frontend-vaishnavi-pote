export default function ProgressBar({ step }) {
  const steps = ["Category", "Details", "Done"];

  return (
    <div className="mt-6 mb-8">
      <div className="flex items-center justify-between">
        {steps.map((item, index) => (
          <div
            key={item}
            className="flex flex-col items-center flex-1 relative"
          >
            {/* Connecting Line */}
            {index !== steps.length - 1 && (
              <div
                className={`absolute top-5 left-1/2 w-full h-1 -z-10 ${
                  index + 1 < step
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }`}
              />
            )}

            {/* Circle */}
            <div
              className={`h-11 w-11 rounded-full flex items-center justify-center font-bold transition-all duration-300 shadow-md ${
                index + 1 <= step
                  ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white"
                  : "bg-white border-2 border-slate-300 text-slate-500"
              }`}
            >
              {index + 1}
            </div>

            {/* Step Label */}
            <span
              className={`mt-3 text-xs font-medium ${
                index + 1 <= step
                  ? "text-blue-700"
                  : "text-slate-500"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}