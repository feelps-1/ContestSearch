export function ContestCard() {
    return (
        <div className="bg-slate-200 w-11/12 h-30 justify-between flex items-center flex-1 p-3 rounded-xl gap-2">
                <img src='https://www.desafioligajovem.com.br/wp-content/uploads/2024/03/Design-sem-nome-4.png' className="size-20 rounded-xl"></img>
                <div className="flex flex-col">
                    <p className="text-slate-600 font-bold text-xl">Desafio Liga Jovem</p>
                    <p className="text-slate-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='h-4/6 w-px bg-slate-300' />
                <div className="flex flex-col w-full">
                    <p className="text-slate-600 text-sm">Escolaridade: Fund., Médio, Técn., Superior</p>
                    <p className="text-slate-600 text-sm">Tipo: Equipe</p>
                    <p className="text-slate-600 text-sm">Tema: Tecnologia e Empreendorismo</p>
                </div>
                <div className="bg-orange-400 rounded-xl h-11 px-4 gap-3 flex justify-between items-center w-1/4">
                    <button className="text-slate-50 text-sm font-semibold flex justify-between flex-1">
                        Visitar site
                    </button>
                </div>
            </div>
    )
}