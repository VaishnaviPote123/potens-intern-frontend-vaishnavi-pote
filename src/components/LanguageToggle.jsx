import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle(){

    const {language,setLanguage}=useLanguage();

    return(

        <div className="flex bg-slate-100 rounded-full p-1">

            <button

            onClick={()=>setLanguage("en")}

            className={`px-5 py-2 rounded-full transition ${
                language==="en"
                ?"bg-blue-700 text-white"
                :""
            }`}

            >

            English

            </button>

            <button

            onClick={()=>setLanguage("hi")}

            className={`px-5 py-2 rounded-full transition ${
                language==="hi"
                ?"bg-blue-700 text-white"
                :""
            }`}

            >

            हिन्दी

            </button>

        </div>

    );

}