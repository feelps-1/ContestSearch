import { useState } from 'react'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ConfirmationModal } from '../components/confirmationmodal';

export function ContestIndication() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [site, setSite] = useState('')
    const [tematic, setTematic] = useState<string[]>([])
    const [education, setEducation] = useState<string[]>([]) 
    const [modality, setModality] = useState('equipe')  
    const [date] = useState('')

    var data = {
        name,
        description,
        site,
        tematic,
        education,
        modality,
        date
    }

    async function connectToApi(e: { preventDefault: () => void; }) {
    try{
        const serviceAccountAuth = new JWT({
            email: import.meta.env.VITE_CLIENT_EMAIL,
            key: import.meta.env.VITE_PRIVATE_KEY,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        })

        const idSheet = "1I6axzb2OsC2XRgudsin1X3XW5ALFzDghvDWQMAyBzig";

        console.log(serviceAccountAuth.email)
        
        console.log(serviceAccountAuth.key)
    
        e.preventDefault();
        const file = new GoogleSpreadsheet(idSheet, serviceAccountAuth);
        await file.loadInfo();
        const sheet = file.sheetsByIndex[0];
        await sheet.addRow({
                name: `${data.name}`,
                description: `${data.description}`,
                site: `${data.site}`,
                tematic: `${data.tematic}`,
                education: `${data.education}`,
                modality:`${data.modality}`, 
                date: new Date(),})
    }catch(error){
        console.error("Error:", error); 
    }}

    
    const handleTematic = (e: { target: { value: string; checked: boolean; }; }) => {
        const { value, checked } = e.target;
        
        if (checked) {
            setTematic([...tematic, value]);
        }
        else {
            setTematic(tematic.filter((e) => e !== value));
        }
    };

    const handleEducation = (e: { target: { value: string; checked: boolean; }; }) => {
        const { value, checked } = e.target;
        
        if (checked) {
            setEducation([...education, value]);
        }
        else {
            setEducation(education.filter((e) => e !== value));
        }
    };

    const [confirmSentModal, setConfirmSentModal] = useState(false)

    function openSentModal(){
        setConfirmSentModal(true)
    }

    const handleButtonClick = (e: { preventDefault: () => void; }) => {
        openSentModal(),
        connectToApi(e)
    }

    const navigate = useNavigate()

    function backHome() {
        navigate(`/`)
    }

    return (
        <>
        <div className='w-full bg-orange-400 p-2 relative gap-2'>
            <button onClick={backHome} className='flex-row flex text-slate-50 font-semibold items-center justify-center'>
                <ArrowLeft></ArrowLeft>
                Voltar
            </button>
        </div>

        <div className="w-full flex justify-center items-center flex-1 flex-col">
            <div className='bg-orange-400 text-slate-50 flex justify-center items-center flex-col rounded-xl gap-3 p-2 mt-3 md:w-1/2 w-11/12'>
            <h1 className='text-lg font-semibold'>Recomendação de competições</h1>
            <p>Não encontrou a competição que estava procurando ou quer ajudar a aumentar o acervo do site?
                <br/>Por favor preencha esse formulário!
            </p>
            </div>
            <form className="flex flex-col justify-center items-center gap-3 p-2 w-full">

                <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-full md:w-6/12">
                    <input
                        type="text"
                        placeholder="Nome da competição"
                        className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1"
                        onChange={(event) => setName(event.target.value)}
                        required></input>
                </div>

                <div className='w-full gap-3 md:w-6/12'>
                    <textarea className="flex bg-slate-200 items-center rounded-xl md:h-28 h-20 px-4 gap-3 w-full placeholder-slate-600 text-sm text-slate-600"
                        placeholder="Dê uma breve descrição da competição"
                        onChange={(event) => setDescription(event.target.value)}
                        required>
                    </textarea>
                </div>

                <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-full md:w-6/12">
                    <input
                        type="text"
                        placeholder="Qual o link do site dessa competição?"
                        className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1"
                        onChange={(event) => setSite(event.target.value)}></input>
                </div>

                {/* <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-6/12">
                    <label className="text-sm text-slate-600 flex-1">Ícone da competição</label>
                    <input className="w-full text-sm text-slate-600 rounded-xl cursor-pointer bg-slate-200" id="file_input" type="file" />
                </div> */}

                <div className='w-full md:w-6/12'> 
                <ul className="items-center w-full text-sm font-medium text-slate-600 bg-slate-200 border border-slate-200 rounded-xl sm:flex">
                    <li className='w-full border-b border-slate-200 sm:border-b-0 sm:border-r'>
                        <div className="flex items-center ps-3">
                    <h3 className="text-slate-600 text-sm">Educação</h3>
                    </div>
                    </li>
                    <li className="w-full border-b border-slate-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center ps-3">
                            <input 
                            id="fund" 
                            type="checkbox" 
                            value="fundamental" 
                            className="w-4 h-4 text-blue-600 bg-slate-200 border-slate-300 rounded focus:ring-blue-500"
                            onChange={handleEducation}/>
                            <label  className="w-full py-3 ms-2 text-sm font-medium text-slate-600">Ens. fundamental</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-slate-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center ps-3">
                            <input 
                            id="medio" 
                            type="checkbox" 
                            value="medio" 
                            className="w-4 h-4 text-blue-600 bg-slate-200 border-slate-300 rounded focus:ring-blue-500"
                            onChange={handleEducation}/>
                            <label  className="w-full py-3 ms-2 text-sm font-medium text-slate-600">Ensino médio</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-slate-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center ps-3">
                            <input 
                            id="tecnico" 
                            type="checkbox" 
                            value="tecnico" 
                            className="w-4 h-4 text-blue-600 bg-slate-200 border-slate-300 rounded focus:ring-blue-500"
                            onChange={handleEducation}/>
                            <label  className="w-full py-3 ms-2 text-sm font-medium text-slate-600">Ensino técnico</label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center ps-3">
                            <input 
                            id="superior" 
                            type="checkbox" 
                            value="superior" 
                            className="w-4 h-4 text-blue-600 bg-slate-200 border-slate-300 rounded focus:ring-blue-500"
                            onChange={handleEducation}/>
                            <label  className="w-full py-3 ms-2 text-sm font-medium text-slate-600">Ensino superior</label>
                        </div>
                    </li>
                </ul>
                </div>

                <div className='w-full md:w-6/12'>
                    
                <ul className="items-center w-full text-sm font-medium text-slate-600 bg-slate-200 border border-slate-200 rounded-xl sm:flex">
                    <li className='w-full border-b border-slate-200 sm:border-b-0 sm:border-r'>
                        <div className="flex items-center ps-3">
                    <h3 className="text-slate-600 text-sm">Temática</h3>
                    </div>
                    </li>
                    <li className="w-full border-b border-slate-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center ps-3">
                            <input 
                            id="tech" 
                            type="checkbox" 
                            value="tecnologia" 
                            className="w-4 h-4 text-blue-600 bg-slate-200 border-slate-300 rounded focus:ring-blue-500"
                            onChange={handleTematic}/>
                            <label  className="w-full py-3 ms-2 text-sm font-medium text-slate-600">Tecnologia</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-slate-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center ps-3">
                            <input 
                            id="biz" 
                            type="checkbox" 
                            value="empreendedorismo" 
                            className="w-4 h-4 text-blue-600 bg-slate-200 border-slate-300 rounded focus:ring-blue-500"
                            onChange={handleTematic}/>
                            <label  className="w-full py-3 ms-2 text-sm font-medium text-slate-600">Empreendedorismo</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-slate-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center ps-3">
                            <input 
                            id="STEAM" 
                            type="checkbox" 
                            value="ciencia" 
                            className="w-4 h-4 text-blue-600 bg-slate-200 border-slate-300 rounded focus:ring-blue-500"
                            onChange={handleTematic}/>
                            <label  className="w-full py-3 ms-2 text-sm font-medium text-slate-600">STEAM</label>
                        </div>
                    </li>
                </ul>
                </div>

                <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-full md:w-6/12">
                    <label className="text-sm text-slate-600">Modalidade:</label>
                    <select className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1 cursor-pointer"
                        onChange={(event) => setModality(event.target.value)}>
                        <option value="equipe">Equipe</option>
                        <option value="individual">Individual</option>
                    </select>
                </div>

                <div className="bg-orange-400 rounded-xl h-11 px-4 gap-3 flex justify-between items-center w-1/4 hover:bg-orange-600">
                    <button type="submit" onClick={handleButtonClick} className="text-slate-50 text-sm font-semibold flex justify-center flex-1">
                        Enviar
                    </button>
                </div>
            </form>

            {confirmSentModal && (
                <ConfirmationModal></ConfirmationModal>
            )}
        </div></>
    )
}