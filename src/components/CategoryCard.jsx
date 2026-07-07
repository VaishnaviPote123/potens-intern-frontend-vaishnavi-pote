import { FaCheckCircle } from "react-icons/fa";

export default function CategoryCard({

    icon:Icon,

    title,

    description,

    active,

    onClick

}){

    return(

        <button

        onClick={onClick}

        className={`

        w-full

        rounded-3xl

        border

        p-5

        transition-all

        duration-300

        text-left

        ${
            active

            ?

            "border-blue-700 bg-blue-50 shadow-xl scale-[1.02]"

            :

            "border-slate-200 hover:border-blue-400 hover:shadow"

        }

        `}

        >

            <div className="flex justify-between">

                <div className="flex gap-4">

                    <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                        <Icon
                        className="text-blue-700"
                        size={28}
                        />

                    </div>

                    <div>

                        <h2 className="font-bold">

                            {title}

                        </h2>

                        <p className="text-sm text-slate-500 mt-1">

                            {description}

                        </p>

                    </div>

                </div>

                {

                    active &&

                    <FaCheckCircle
                    className="text-blue-700"
                    size={24}
                    />

                }

            </div>

        </button>

    );

}