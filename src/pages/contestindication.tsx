import { useState } from 'react'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library';
import credentials from '../credentials.json'

export function ContestIndication() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    // const [url, setURL] = useState('')
    // const [img, setIMG] = useState('')
    // const [tematic, setTematic] = useState('')
    // const [education, setEducation] = useState('') 
    // const [modality, setModality] = useState('')  
    // const [date] = useState('')

    var data = {
        name,
        description,
        // url,
        // img,
        // tematic,
        // education,
        // modality,
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
                    nome: `${data.name}`,
                    descricao: `${data.description}`,
                    date: new Date(),})
    }catch(error){
        console.error("Error:", error); 
    }}

    return (
    <div className="w-full flex justify-center items-center flex-1 h-screen">
        <form className="flex flex-col justify-center items-center gap-3 p-2 w-full">

        <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-6/12">
        <input 
            type="text" 
            placeholder="Nome da competição" 
            className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1"
            onChange={(event) => setName(event.target.value)}></input>
        </div>

        <div className="flex bg-slate-200 items-center rounded-xl h-28 px-4 gap-3 w-6/12">
            <textarea  
                placeholder="Dê uma breve descrição da competição" 
                className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1"
                onChange={(event) => setDescription(event.target.value)}>
            </textarea>
        </div>

        <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-6/12">
        <input 
            type="url" 
            placeholder="Qual o link do site dessa competição?" 
            className="bg-transparent text-sm placeholder-slate-600 outline-none flex-1"></input>
        </div>

        <div className="flex bg-slate-200 items-center rounded-xl h-10 px-4 gap-3 w-6/12">
        <label className="text-sm text-slate-600 flex-1">Ícone da competição</label>
        <input className="w-full text-sm text-slate-600 rounded-xl cursor-pointer bg-slate-200" id="file_input" type="file"/>
        </div>

        <div>
        <label>Temática:</label>
        <select id="tematica" name="tematica[]" multiple required>
            <option value="empreendedorismo">Empreendedorismo</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="ciencias">Ciências</option>
            <option value="outro">Outro</option>
        </select>
        </div>

        <div>
        <label>Educação:</label>
        <select id="educacao" name="educacao[]" multiple required>
            <option value="ensino_medio">Ensino Médio</option>
            <option value="ensino_fundamental">Ensino Fundamental</option>
            <option value="ensino_superior">Ensino Superior</option>
            <option value="tecnico">Técnico</option>
            <option value="livre">Livre</option>
        </select>
        </div>

        <div>
        <label>Modalidade:</label>
        <select id="modalidade" name="modalidade" required>
            <option value="equipe">Equipe</option>
            <option value="individual">Individual</option>
        </select>
        </div>

        <button type="submit" onClick={connectToApi}>Enviar</button>
    </form>
    </div>
    )
}