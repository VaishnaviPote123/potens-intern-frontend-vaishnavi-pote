const QUEUE_KEY = "offline_reports";


export function getOfflineQueue() {

  return JSON.parse(
    localStorage.getItem(QUEUE_KEY) || "[]"
  );

}



export function addToOfflineQueue(report) {

  const queue = getOfflineQueue();


  queue.push({
    ...report,
    synced: false,
  });


  localStorage.setItem(
    QUEUE_KEY,
    JSON.stringify(queue)
  );


  window.dispatchEvent(
    new Event("offlineQueueUpdated")
  );

}



export function clearOfflineQueue() {

  localStorage.removeItem(QUEUE_KEY);


  window.dispatchEvent(
    new Event("offlineQueueUpdated")
  );

}



export function syncOfflineQueue(saveReport) {

  const queue = getOfflineQueue();


  if (!queue.length) return;


  queue.forEach((report)=>{

    saveReport({
      ...report,
      synced:true,
    });

  });


  clearOfflineQueue();

}



export function getOfflineCount(){

  return getOfflineQueue().length;

}