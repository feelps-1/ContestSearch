import { Search } from "lucide-react";

interface SearchBarProps {
    keyword: string;
    inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export function SearchBar({keyword, inputHandler}: SearchBarProps){
    return <div className="flex bg-slate-200 items-center rounded-xl h-16 px-4 gap-3 w-6/12">
    <div className="flex flex-1 items-center justify-between">
    <input 
        key='search-bar'
        value={keyword}
        onChange={inputHandler}
        type="text" 
        placeholder="Qual competição você está procurando?" 
        className="bg-transparent text-lg placeholder-slate-600 outline-none flex-1"></input>
    <button>
        <Search className="size-8 text-slate-600" />
    </button>
    </div>
    </div>
}