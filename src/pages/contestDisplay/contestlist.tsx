import { useEffect, useState } from 'react';
import { api } from '../../libs/axios';
import { ContestCard } from '../../components/contextcard';

interface Contest {
    id: string;
    name: string;
    description: string;
    icon: string;
    tematic: string;
    education: string;
    modality: string;
}

export function ContestList() {
    const [contests, setContests] = useState<Contest[]>([]);

    useEffect(() => {
        api.get(`/contest`).then(response => {
            const contestsData = response.data.data.map((item: any) => ({
                id: item.attributes.id,
                name: item.attributes.name,
                description: item.attributes.description,
                icon: item.attributes.icon,
                tematic: item.attributes.tematic,
                education: item.attributes.education,
                modality: item.attributes.modality
            }));
            setContests(contestsData);
            console.log(response); // Log dos dados recebidos
        });
    }, []);

    return (
        <div className="flex flex-col w-8/12 items-center gap-3 justify-center">
            <div className="w-full h-[500px] overflow-y-auto flex items-center flex-col gap-3 custom-scrollbar">
                {contests.map((contest, index) => (
                    <ContestCard key={index}
                    name = {contest.name}
                    description={contest.description}
                    icon={contest.icon}
                    tematic={contest.tematic}
                    modality={contest.modality}
                    education={contest.education}/>
                ))}
            </div>
        </div>
    );
}