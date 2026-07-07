export default function MobileLayout({ children }) {

  return (

    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-blue-200 flex justify-center items-center p-5">

      <div className="w-full max-w-md bg-white rounded-[34px] shadow-2xl overflow-hidden">

        {children}

      </div>

    </div>

  );

}