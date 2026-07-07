import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaRoad,
  FaTint,
  FaBolt,
  FaTrash,
  FaEllipsisH,
} from "react-icons/fa";

import MobileLayout from "../components/MobileLayout";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import LanguageToggle from "../components/LanguageToggle";
import CategoryCard from "../components/CategoryCard";
import Button from "../components/Button";

import { useLanguage } from "../context/LanguageContext";
import { useReport } from "../context/ReportContext";
import { translations } from "../utils/translations";

export default function Category() {
  const navigate = useNavigate();

  const { language } = useLanguage();
  const { report, setReport } = useReport();

  const t = translations[language];

  const [selected, setSelected] = useState(report.category);
  const [error, setError] = useState("");
  const [customCategory, setCustomCategory] = useState("");

  const categories = [
    {
      id: "road",
      icon: FaRoad,
      title: t.road,
      description: t.roadDesc,
    },

    {
      id: "water",
      icon: FaTint,
      title: t.water,
      description: t.waterDesc,
    },

    {
      id: "electricity",
      icon: FaBolt,
      title: t.electricity,
      description: t.electricityDesc,
    },

    {
      id: "sanitation",
      icon: FaTrash,
      title: t.sanitation,
      description: t.sanitationDesc,
    },

    {
      id: "other",
      icon: FaEllipsisH,
      title: t.other,
      description: t.otherDesc,
    },
  ];

  function handleNext() {
    if (!selected) {
      setError(t.selectCategory);
      return;
    }

    if (selected === "other" && !customCategory.trim()) {
      setError(t.enterCategory);
      return;
    }

    setReport({
      ...report,
      category:
        selected === "other"
          ? customCategory
          : selected,
    });

    navigate("/details");
  }

  return (
    <MobileLayout>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Header />

        <div className="p-6">
          <div className="flex justify-end mb-5">
            <LanguageToggle />
          </div>

          <ProgressBar step={1} />

          <div className="mt-8 mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              {t.categoryTitle}
            </h2>

            <p className="text-slate-500 mt-2">
              {t.categorySubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {categories.map((item) => (
              <CategoryCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                active={selected === item.id}
                onClick={() => {
                  setSelected(item.id);
                  setError("");
                }}
              />
            ))}
          </div>

          {selected === "other" && (
            <input
              type="text"
              value={customCategory}
              onChange={(e) =>
                setCustomCategory(e.target.value)
              }
              placeholder={t.otherPlaceholder}
              className="
                mt-4
                w-full
                rounded-xl
                border
                border-slate-300
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          )}

          {error && (
            <p className="mt-4 text-red-600 text-sm font-medium">
              {error}
            </p>
          )}

          <div className="mt-8">
            <Button onClick={handleNext}>
              {t.next} →
            </Button>
          </div>
        </div>
      </motion.div>
    </MobileLayout>
  );
}