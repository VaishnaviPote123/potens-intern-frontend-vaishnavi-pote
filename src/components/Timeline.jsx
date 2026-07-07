import {
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function Timeline() {

  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      title: t.statusSubmitted,
      completed: true,
      description: t.statusSubmittedDesc,
    },
    {
      title: t.statusReview,
      completed: false,
      description: t.statusReviewDesc,
    },
    {
      title: t.statusAssigned,
      completed: false,
      description: t.statusAssignedDesc,
    },
    {
      title: t.statusResolved,
      completed: false,
      description: t.statusResolvedDesc,
    },
  ];

  return (
    <div className="w-full">

      <h3 className="text-lg font-bold mb-6">

        {t.trackingStatus}

      </h3>

      <div>

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex gap-4 relative pb-8"
          >

            {/* Vertical Line */}

            {index !== steps.length - 1 && (
              <div
                className={`absolute left-[11px] top-7 w-[2px] h-full ${
                  step.completed
                    ? "bg-green-500"
                    : "bg-slate-300"
                }`}
              />
            )}

            {/* Icon */}

            <div className="z-10">

              {step.completed ? (

                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">

                  <FiCheckCircle
                    className="text-white"
                    size={14}
                  />

                </div>

              ) : (

                <div className="h-6 w-6 rounded-full bg-slate-300 flex items-center justify-center">

                  <FiClock
                    className="text-white"
                    size={13}
                  />

                </div>

              )}

            </div>

            {/* Content */}

            <div>

              <h4
                className={`font-semibold ${
                  step.completed
                    ? "text-green-700"
                    : "text-slate-700"
                }`}
              >
                {step.title}
              </h4>

              <p className="text-sm text-slate-500 mt-1">
                {step.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}