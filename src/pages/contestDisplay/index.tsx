import { ContestList } from "./contestlist"
import { SearchOptions } from "./searchoptions"

export function ContestDisplay() {
    return (
        <div className="flex items-center justify-center h-screen flex-col gap-3 flex-1">
            <SearchOptions />

            <div className='w-4/6 h-px bg-slate-300' />

            <ContestList />

            <div className='w-4/6 h-px bg-slate-300' />
        </div>
    )

}