import { Mail, Phone } from 'lucide-react';

function contact() {
  return (
    <div className="flex flex-col gap-30 items-center min-h-screen text-white bg-linear-to-b from-gray-800 via-gray-600 to-gray-400">
       <h1 className="text-center mt-5 text-4xl font-bold">Contact Us </h1>
       <div className="w-full py-10 px-10 flex flex-col gap-5 max-w-lg rounded-xl p-3 h-[150px] bg-linear-to-br from-zinc-400 via-zinc-500 to-zinc-700">
        <h1 className='flex gap-4 font-bold text-xl items-center'><Mail/> naveensaini.code@gmail.com</h1>
         <h1 className='flex gap-4 font-bold text-xl items-center'><Phone /> 86##-##-0584</h1>
       </div>
    </div>
  )
}

export default contact;