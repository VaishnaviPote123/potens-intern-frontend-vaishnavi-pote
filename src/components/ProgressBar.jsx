export default function ProgressBar({ step }) {
  const steps = [
    "Category",
    "Details",
    "Done",
  ];

  return (
    <div className="mt-6">
      <div className="flex justify-between">

        {steps.map((item, index) => (

          <div
            key={item}
            className="flex flex-col items-center flex-1"
          >

            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center font-bold transition-all

              ${
                index + 1 <= step
                  ? "bg-blue-700 text-white"
                  : "bg-slate-200 text-slate-500"
              }`}
            >
              {index + 1}
            </div>

            <span className="text-xs mt-2">
              {item}
            </span>

          </div>

        ))}

      </div>
    </div>
  );
}