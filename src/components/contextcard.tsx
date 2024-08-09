interface ContestCardProps{
    name: string;
    description: string;
    icon: string;
    modality: string;
    tematic: string;
    education: string;
}

export function ContestCard({name, description, icon, modality, tematic, education}: ContestCardProps) {
    return (
        <div className="bg-slate-200 w-11/12 h-30 justify-between flex items-center flex-1 p-3 rounded-xl gap-2">
                <img src={icon} className="size-20 rounded-xl"></img>
                <div className="flex flex-col">
                    <p className="text-slate-600 font-bold text-xl">{name}</p>
                    <p className="text-slate-600 text-sm">{description}</p>
                </div>
                <div className='h-4/6 w-px bg-slate-300' />
                <div className="flex flex-col w-full">
                    <p className="text-slate-600 text-sm">Categoria: {education}</p>
                    <p className="text-slate-600 text-sm">Tipo: {modality}</p>
                    <p className="text-slate-600 text-sm">Tema: {tematic}</p>
                </div>
                <div className="bg-orange-400 rounded-xl h-11 px-4 gap-3 flex justify-between items-center w-1/4">
                    <button className="text-slate-50 text-sm font-semibold flex justify-between flex-1">
                        Visitar site
                    </button>
                </div>
            </div>
    )
}