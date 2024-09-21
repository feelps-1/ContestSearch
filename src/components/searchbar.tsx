import { Search } from "lucide-react";

interface SearchBarProps {
    keyword: string;
    inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export function SearchBar({keyword, inputHandler}: SearchBarProps){
    return <div className="flex bg-slate-200 items-center rounded-xl h-16 px-4 gap-3 md:w-6/12 w-11/12">
    <div className="flex flex-1 items-center justify-between">
    <input 
        key='search-bar'
        value={keyword}
        onChange={inputHandler}
        type="text" 
        placeholder="Qual competição você está procurando?" 
        className="bg-transparent md:text-lg placeholder-slate-600 outline-none flex-1 text-sm"></input>
    <button>
        <Search className="md:size-8 size-6 text-slate-600" />
    </button>
    </div>
    </div>
}