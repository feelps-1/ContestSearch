import { Search } from "lucide-react";
import { DropdownButton } from "../../components/dropdownbutton";

export function SearchOptions() {
    const educations = ['Ensino Fundamental', 'Ensino Médio', 'Educação Profissional', 'Ensino Superior', 'Livre']
    const modalities = ['Equipe', 'Individual']
    const thematics = ['Tecnologia', 'Empreendorismo', 'Saúde']

    return (
        <>
        <div className="flex bg-slate-200 items-center rounded-xl h-16 px-4 gap-3 w-6/12">
            <div className="flex flex-1 items-center justify-between">
            <input 
            type="text" 
            placeholder="Qual competição você está procurando?" 
            className="bg-transparent text-lg placeholder-slate-600 outline-none flex-1"></input>
            <button>
                <Search className="size-8 text-slate-600" />
            </button>
            </div>
        </div>
        <div className="flex items-center justify-evenly w-6/12 gap-3">
            <DropdownButton items={educations}>
                Escolaridade
            </DropdownButton>

            <DropdownButton items={modalities}>
                Tipo
            </DropdownButton>

            <DropdownButton items={thematics}>
                Tema
            </DropdownButton>

            <div className="bg-orange-400 rounded-xl h-11 px-4 gap-3 flex justify-between items-center w-1/4">
                <button className="text-slate-50 text-sm font-semibold flex justify-between flex-1">
                    Filtrar
                </button>
            </div>

        </div>
        </>
    )
}