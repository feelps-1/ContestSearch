import { ContestList } from "./contestlist"

export function ContestDisplay() {
    return (
        <div className="flex items-center justify-center h-screen flex-col gap-3 flex-1">
            <ContestList />
        </div>
    )

}