import { useEffect, useState } from "react";

import {
  getOfflineCount
} from "../utils/offlineQueue";



export default function OfflineStatus(){

  const [count,setCount] = useState(
    getOfflineCount()
  );



  useEffect(()=>{


    const updateCount = ()=>{

      setCount(
        getOfflineCount()
      );

    };



    window.addEventListener(
      "online",
      updateCount
    );


    window.addEventListener(
      "offline",
      updateCount
    );


    window.addEventListener(
      "storage",
      updateCount
    );


    window.addEventListener(
      "offlineQueueUpdated",
      updateCount
    );



    return ()=>{


      window.removeEventListener(
        "online",
        updateCount
      );


      window.removeEventListener(
        "offline",
        updateCount
      );


      window.removeEventListener(
        "storage",
        updateCount
      );


      window.removeEventListener(
        "offlineQueueUpdated",
        updateCount
      );


    };


  },[]);



  if(count===0)
    return null;



  return (

    <div
      className="
      mt-4 flex justify-center
      w-fit
      rounded-full
      bg-yellow-100
      border
      border-yellow-300
      px-4
      py-2
      text-sm
      text-yellow-700
      "
    >

      🟡 {count} report
      {count > 1 ? "s" : ""}
      waiting to sync


    </div>

  );

}