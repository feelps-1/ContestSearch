interface ContestCardProps {
    name: string;
    description: string;
    icon: string;
    modality: string;
    tematic: string;
    education: string;
    site: string;
}

export function ContestCard({name, description, icon, modality, tematic, education, site}: ContestCardProps) {
    return (
        <a href={site} target="_blank" rel="noopener noreferrer" className="w-11/12">
            <div className="bg-slate-200 flex items-center p-5 rounded-xl gap-2 cursor-pointer hover:bg-slate-300">
                <img src={icon} className="size-24 rounded-xl"></img>
                <div className="flex flex-col w-96">
                    <p className="text-slate-600 font-bold text-xl">{name}</p>
                    <p className="text-slate-600 text-sm">{description}</p>
                </div>
                <div className='h-4/6 w-px bg-slate-300' />
                <div className="flex flex-col">
                    <p className="text-slate-600 text-sm">Categoria: {education}</p>
                    <p className="text-slate-600 text-sm">Tipo: {modality}</p>
                    <p className="text-slate-600 text-sm">Tema: {tematic}</p>
                </div>
            </div>
        </a>
    );
}