import { createContext, useContext, useState } from "react";

const ReportContext = createContext();

export function ReportProvider({ children }) {
  const [report, setReport] = useState({
    category: "",
    description: "",
    image: null,
    referenceId: "",
    createdAt: "",
    status: "Submitted",
  });

  return (
    <ReportContext.Provider value={{ report, setReport }}>
      {children}
    </ReportContext.Provider>
  );
}

export function useReport() {
  return useContext(ReportContext);
}