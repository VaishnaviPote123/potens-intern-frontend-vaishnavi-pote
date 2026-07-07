import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";


import MobileLayout from "../components/MobileLayout";
import Header from "../components/Header";
import Button from "../components/Button";


import { useReport } from "../context/ReportContext";


import {
  saveReport
} from "../utils/storage";


import {
  addToOfflineQueue,
  syncOfflineQueue
} from "../utils/offlineQueue";



function generateReference(){

  return (
    "CC-" +
    Date.now()
  );

}




export default function Confirmation(){


const navigate = useNavigate();


const {
 report,
 setReport
}=useReport();




useEffect(()=>{


 if(report.referenceId)
   return;



 const finalReport={

   ...report,

   referenceId:
     generateReference(),

   createdAt:
     new Date().toISOString(),

   status:
     "Submitted"

 };



 if(navigator.onLine){

   saveReport(finalReport);

 }
 else{

   addToOfflineQueue(finalReport);

 }



 setReport(finalReport);



},[]);






useEffect(()=>{


 const handleOnline=()=>{

   syncOfflineQueue(
     saveReport
   );

 };


 window.addEventListener(
   "online",
   handleOnline
 );


 return()=>{

 window.removeEventListener(
   "online",
   handleOnline
 );

 };


},[]);






return (

<MobileLayout>


<Header />



<motion.div

initial={{
 opacity:0,
 scale:0.9
}}

animate={{
 opacity:1,
 scale:1
}}

className="
flex
flex-col
items-center
justify-center
p-6
text-center
"

>


<FiCheckCircle

size={80}

className="
text-green-500
"

/>



<h1

className="
mt-5
text-2xl
font-bold
"

>

Report Submitted

</h1>




<p

className="
mt-3
text-gray-600
"

>

Reference ID:

</p>



<p

className="
font-bold
"

>

{report.referenceId}

</p>




{
!navigator.onLine && (

<div

className="
mt-5
rounded-xl
border
border-yellow-300
bg-yellow-100
p-4
text-sm
text-yellow-700
"

>

Report saved offline.
It will sync automatically
when internet returns.

</div>

)

}




<Button

onClick={()=>navigate("/")}

className="
mt-6
"

>

Back Home

</Button>



</motion.div>


</MobileLayout>

);


}