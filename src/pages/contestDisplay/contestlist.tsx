import { useEffect, useState } from 'react';
import { api } from '../../libs/axios';
import { ContestCard } from '../../components/contestcard';
import { DropdownButton } from '../../components/dropdownbutton';
import { SearchBar } from '../../components/searchbar';
import { useNavigate } from 'react-router-dom';

interface Contest {
    id: string;
    name: string;
    description: string;
    icon: string;
    tematic: string;
    education: string;
    modality: string;
    site: string;
}

export function ContestList() {
    const navigate = useNavigate()

    function indicateContest() {
        navigate(`/indicar`)
    }

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
                modality: item.attributes.modality,
                site: item.attributes.site
            }));
            setContests(contestsData);
            setFilteredContests(contestsData)
        });
    }, []);

    const [filteredContests, setFilteredContests] = useState(contests)
    const [search, SetSearch] = useState('')

    const educations = ['Ensino Fundamental', 'Ensino Médio', 'Educação Profissional', 'Ensino Superior', 'Livre']
    const modalities = ['Equipe', 'Individual']
    const thematics = ['Tecnologia', 'Empreendorismo', 'Saúde']

    const handleInputChange = (e: { target: { value: any; }; }) => {
        const searchTerm = e.target.value;
        SetSearch(searchTerm)

        const filteredItems = contests.filter((contest) => 
        contest.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setFilteredContests(filteredItems)
    }

    return (
        
        <><>
            <div className='flex flex-col w-full justify-center gap-3 items-center'>
                <SearchBar keyword={search} inputHandler={handleInputChange} />
                {/* <div className="flex items-center justify-evenly w-full md:w-6/12 gap-3">
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
                        <button className="text-slate-50 text-sm font-semibold flex justify-center flex-1">
                            Filtrar
                        </button>
                    </div>

                </div> */}
            </div>

            <div className='w-4/6 h-px bg-slate-300' />
            <div className="flex flex-col md:w-8/12 w-full items-center gap-3 justify-center">
                <div className="w-11/12 md:w-full h-[500px] overflow-y-auto flex items-center flex-col gap-3 custom-scrollbar">
                    {filteredContests.map((contest, index) => (
                        <ContestCard key={index}
                            name={contest.name}
                            description={contest.description}
                            icon={contest.icon}
                            tematic={contest.tematic}
                            modality={contest.modality}
                            education={contest.education}
                            site={contest.site} />
                    ))}
                </div>

            </div>
            <div className='w-4/6 h-px bg-slate-300' /></>
            <a className='text-slate-600 cursor-pointer underline hover:text-slate-800' onClick={indicateContest}>Não encontrou a competição que procurava?</a></>  
    );
}