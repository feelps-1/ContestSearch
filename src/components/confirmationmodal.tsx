import { useEffect } from "react";

export function ConfirmationModal() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload();
        }, 3000); 

        return () => clearTimeout(timer); 
    }, []);
    
    return (

            <div className='w-[400px] rounded-xl py-5 px-6 shadow-shape bg-slate-600 space-y-5 fixed'>
            <div className='space-y-2'>
            <div className='flex  flex-col items-center justify-between'>
              <h2 className='text-lg  text-slate-200 font-semibold'>Concurso enviado, muito obrigado!</h2>
            </div>
        </div>
        </div>

    )
}