import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import logo from "../assets/logo.png";
import OfflineStatus from "./OfflineStatus";

export default function Header() {

  const { language } = useLanguage();
  const t = translations[language];


  return (

    <header className="
      bg-gradient-to-r 
      from-blue-700 
      via-blue-600 
      to-sky-500 
      text-white 
      p-6 
      shadow-lg
    ">


      <div className="flex items-center gap-4">


        <div className="
          h-16 
          w-16 
          rounded-2xl 
          bg-white 
          shadow-xl 
          flex 
          items-center 
          justify-center 
          p-2
        ">


          <img
            src={logo}
            alt="CivicConnect"
            className="h-full w-full object-contain"
          />


        </div>



        <div>


          <h1 className="
            text-2xl 
            font-extrabold 
            tracking-wide
          ">

            {t.appName}

          </h1>



          <p className="
            text-blue-100 
            text-sm
          ">

            {t.tagline}

          </p>


        </div>


      </div>


      {/* Offline Pending Reports Indicator */}
      <OfflineStatus />


    </header>

  );
}