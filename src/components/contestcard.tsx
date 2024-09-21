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
            <div className="bg-slate-200 flex flex-col md:flex-row items-center p-5 rounded-xl gap-2 cursor-pointer hover:bg-slate-300 h-full text-wrap">
                <img src={icon} className="size-12 md:size-24 rounded-xl"></img>
                <div className="flex flex-col flex-1">
                    <p className="text-slate-600 font-bold text-xl">{name}</p>
                    <p className="text-slate-600 text-xs md:text-sm text-ellipsis">{description}</p>
                </div>
                <div className='md:h-4/6 md:w-px h-px w-4/6  bg-slate-300' />
                <div className="flex flex-col">
                    <p className="text-slate-600 text-xs md:text-sm">Categoria: {education}</p>
                    <p className="text-slate-600 text-xs md:text-sm">Tipo: {modality}</p>
                    <p className="text-slate-600 text-xs md:text-sm">Tema: {tematic}</p>
                </div>
            </div>
        </a>
    );
}