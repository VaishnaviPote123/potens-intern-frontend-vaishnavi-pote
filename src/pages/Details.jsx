import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import MobileLayout from "../components/MobileLayout";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import ImageUploader from "../components/ImageUploader";
import VoiceRecorder from "../components/VoiceRecorder";

import { useLanguage } from "../context/LanguageContext";
import { useReport } from "../context/ReportContext";
import { translations } from "../utils/translations";

export default function Details() {
  const navigate = useNavigate();

  const { language } = useLanguage();
  const t = translations[language];

  const { report, setReport } = useReport();

  const [description, setDescription] = useState(report.description);
  const [image, setImage] = useState(report.image);

  function handleSubmit() {
    setReport({
      ...report,
      description,
      image,
    });

    navigate("/confirmation");
  }

  return (
    <MobileLayout>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Header />

        <div className="p-6 space-y-6">

          <ProgressBar step={2} />

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-slate-800">
              {t.detailsTitle}
            </h2>

            <p className="text-slate-500 mt-2">
              {t.detailsSubtitle}
            </p>
          </div>

          <TextArea
            label={t.description}
            placeholder={t.descriptionPlaceholder}
            value={description}
            onChange={setDescription}
          />

          <VoiceRecorder
            setDescription={setDescription}
          />

          <ImageUploader
            image={image}
            setImage={setImage}
          />

          <Button onClick={handleSubmit}>
            {t.submit}
          </Button>

        </div>
      </motion.div>
    </MobileLayout>
  );
}