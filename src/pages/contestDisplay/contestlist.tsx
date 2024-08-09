import { useParams } from "react-router-dom";
import { ContestCard } from "../../components/contextcard";
import { useEffect, useState } from "react";
import { api } from "../../libs/axios";

interface Contest {
    id: number;
    name: string;
    description: string;
    icon: string;
    modality: string;
    tematic: string;
    education: string;
}

export function ContestList() {
    const { contestId } = useParams()
    const [contests, setContests] = useState<Contest[]>([])

    useEffect(() => {
        api.get(`/contests/`).then(response => setContests(response.data))
    }, [contestId])

    return (
        <div className="flex flex-col w-8/12 items-center gap-3 justify-center">
            <div className="w-full h-[500px] overflow-y-auto flex items-center flex-col gap-3 custom-scrollbar">
                {contests.map((contest, index) => (
                    <ContestCard 
                        key={index}
                        name={contest.name} 
                        icon={contest.icon}
                        description={contest.description}
                        education={contest.education}
                        modality={contest.modality}
                        tematic={contest.tematic}
                    />
                ))}
            </div>
        </div>
    )
}