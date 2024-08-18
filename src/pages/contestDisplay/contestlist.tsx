import { useParams } from "react-router-dom";
import { ContestCard } from "../../components/contextcard";
import { useEffect, useState } from "react";
import { api } from "../../libs/axios";

interface Contest {
    ID: number;
    Name: string;
    Description: string;
    Icon: string;
    Type: string;
    Tematic: string;
    Education: string;
}

export function ContestList() {
    const { contestId } = useParams()
    const [contests, setContests] = useState<Contest[]>([])

    useEffect(() => {
        api.get(`/contest/`).then(response => setContests(response.data))
    }, [contestId])

    return (
        <div className="flex flex-col w-8/12 items-center gap-3 justify-center">
            <div className="w-full h-[500px] overflow-y-auto flex items-center flex-col gap-3 custom-scrollbar">
                {contests.map((contest, index) => (
                    <ContestCard 
                        key={index}
                        name={contest.Name} 
                        icon={contest.Icon}
                        description={contest.Description}
                        education={contest.Education}
                        modality={contest.Type}
                        tematic={contest.Tematic}
                    />
                ))}
            </div>
        </div>
    )
}
