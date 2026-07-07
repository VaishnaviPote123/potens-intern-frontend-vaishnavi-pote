export function getReports() {
  return JSON.parse(
    localStorage.getItem("reports") || "[]"
  );
}

export function saveReport(report) {
  const reports = getReports();

  reports.push(report);

  localStorage.setItem(
    "reports",
    JSON.stringify(reports)
  );
}