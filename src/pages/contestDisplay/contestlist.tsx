import { ContestCard } from "../../components/contextcard";

export function ContestList() {
    return (
        <div className="flex flex-col w-8/12 items-center gap-3 justify-center">
            <div className="w-full h-[500px] overflow-y-auto flex items-center flex-col gap-3 custom-scrollbar">
                <ContestCard />
                <ContestCard />
                <ContestCard />
                <ContestCard />
                <ContestCard />
                <ContestCard />
            </div>
        </div>
    )
}