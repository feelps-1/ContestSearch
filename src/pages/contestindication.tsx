import { useState } from 'react'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library';
import credentials from '../credentials.json'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ContestIndication() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [site, setSite] = useState('')
    const [img, setIMG] = useState('')
    const [tematic, setTematic] = useState('')
    const [education, setEducation] = useState('') 
    const [modality, setModality] = useState('')  
    const [date] = useState('')

    var data = {
        name,
        description,
        site,
        img,
        tematic,
        education,
        modality,
    }

    async function connectToApi(e: { preventDefault: () => void; }) {
    try{
        const serviceAccountAuth = new JWT({
            email: credentials.client_email,
            key: credentials.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        })
            const idSheet = "1I6axzb2OsC2XRgudsin1X3XW5ALFzDghvDWQMAyBzig";
        
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

    const navigate = useNavigate()

    function backHome() {
        navigate(`/`)
    }

    return (
        <>
        <div className='w-full bg-orange-400 p-2 fixed'>
            <button onClick={backHome} className='flex-row flex text-slate-50 font-semibold items-center justify-center'>
                <ArrowLeft></ArrowLeft>
                Voltar
            </button>
        </div>
        <div className="w-full flex justify-center items-center flex-1 h-screen flex-col">
            <div className='bg-orange-400 text-slate-50 flex justify-center items-center flex-col rounded-xl gap-2 p-2'>
            <h1 className='text-lg font-semibold'>Recomendação de competições</h1>
            <p>Não encontrou a competição que estava procurando ou quer ajudar a aumentar o acervo do site?
                <br/>Por favor preencha esse formulário!
            </p>
            </div>
            <form className="flex flex-col justify-center items-center gap-3 p-2 w-full">

                <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-6/12">
                    <input
                        type="text"
                        placeholder="Nome da competição"
                        className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1"
                        onChange={(event) => setName(event.target.value)}
                        required></input>
                </div>

                <div className="flex bg-slate-200 items-center rounded-xl h-28 px-4 gap-3 w-6/12">
                    <textarea
                        placeholder="Dê uma breve descrição da competição"
                        className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1"
                        onChange={(event) => setDescription(event.target.value)}
                        required>
                    </textarea>
                </div>

                <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-6/12">
                    <input
                        type="text"
                        placeholder="Qual o link do site dessa competição?"
                        className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1"
                        onChange={(event) => setSite(event.target.value)}></input>
                </div>

                <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-6/12">
                    <label className="text-sm text-slate-600 flex-1">Ícone da competição</label>
                    <input className="w-full text-sm text-slate-600 rounded-xl cursor-pointer bg-slate-200" id="file_input" type="file" />
                </div>

                <div>
                    <label>Temática:</label>
                    <input type='checkbox' value="empreendedorismo" />
                    <input type='checkbox' value="tecnologia" />
                    <input type='checkbox' value="ciencias" />
                    <input type='checkbox' value="outro" />
                </div>

                <div>
                    <label>Educação:</label>
                    <input type='checkbox' value="ensino_medio" />
                    <input type='checkbox' value="ensino_fundamental" />
                    <input type='checkbox' value="ensino_superior" />
                    <input type='checkbox' value="tecnico" />
                    <input type='checkbox' value="livre" />
                </div>

                <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-6/12">
                    <label className="text-sm text-slate-600">Modalidade:</label>
                    <select className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1 cursor-pointer"
                        onChange={(event) => setModality(event.target.value)}>
                        <option value="equipe">Equipe</option>
                        <option value="individual">Individual</option>
                    </select>
                </div>

                <div className="bg-orange-400 rounded-xl h-11 px-4 gap-3 flex justify-between items-center w-1/4">
                    <button type="submit" onClick={connectToApi} className="text-slate-50 text-sm font-semibold flex justify-center flex-1">
                        Enviar
                    </button>
                </div>
            </form>
        </div></>
    )
}