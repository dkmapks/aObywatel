import { ThemeProvider } from "styled-components";
import CreatePetitionHeader from "../../components/CreatePetitionHeader";
import customTheme from "../../customTheme";
import { useState } from "react";
import BaseInput from "../../components/BaseInput";
import BaseButton from "../../components/BaseButton";
import { Petition, PetitionStatus } from "../Petition/Petition.types";
import { generateUUID } from "../../utils/generateUUID";
import { useUserId } from "../../user/user";
import {useNavigate} from "react-router-dom"
import { Office } from "../Home/Home"; 
import { offices as officeJSON } from "../../data/data";
import { Autocomplete, TextField } from "@mui/material";


function CreatePetitionPage(props: CreatePetitionPageProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [authors, setAuthors] = useState("");

    const [offices, _] = useState<Office[]>(officeJSON);
    const [officeSearchTerm, setOfficeSearchTerm] = useState("Wybierz urząd");

    const [content, setContent] = useState("");

    const userId =  useUserId() || "1";

    const navigate = useNavigate()

    if(!userId){
        return <div>Brak użytkownika</div>
    }
    const submitHandler = async () => {
        const petition: Petition = {
            id: generateUUID(),
            status: PetitionStatus.PENDING,
            title,
            description,
            author: authors,
            authorId: userId,
            signedBy: [],
            creationDate: new Date().getTime(),
            recipient: officeSearchTerm === "Wybierz urząd" ? null : officeSearchTerm,
            content,
            response: "",

        }
        const jsonPayload = JSON.stringify(petition)

        try {
            await fetch(`http://localhost:9125/api/petitions/${petition.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonPayload
            })
            console.log("Petycja stworzona pomyślnie");

            navigate(`/`)

        } catch(e) {
            console.error("Coś poszło nie tak", e)
        } finally {
            setTitle("");
            setDescription("");
            setAuthors("");

        }
        
    }

    return <ThemeProvider theme={customTheme}>
        <div className="bg-neutral-10 min-h-[100vh] px-[20px]">
            <CreatePetitionHeader />
        <form className="ps-[20px]">
            <div className="mb-5">
                <label htmlFor="create-petition-title" className="block font-medium text-lg text-neutral-200 mb-1">Tytuł</label>
                <BaseInput id="create-petition-title" className="w-full" value={title} onInput={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-5">
                <label htmlFor="create-petition-authors" className="block font-medium text-lg text-neutral-200 mb-1">Autorzy (opcjonalne)</label>
                <BaseInput id="create-petition-authors" className="w-full" value={authors} onInput={(e) => setAuthors(e.target.value)} />
            </div>
            <div className="mb-5">
                <label htmlFor="create-petition-text" className="block font-medium text-lg text-neutral-200 mb-1">Tekst petycji</label>
                <BaseInput value={content} onChange={(e) => setContent(e.target.value)} multiline minRows={4} id="create-petition-text" className="w-full" />
            </div>
            <div className="mb-5">
                <Autocomplete getOptionDisabled={option => option === 'Wybierz urząd'} value={officeSearchTerm} onChange={(_, value) => setOfficeSearchTerm(value)} options={[...offices, {
                        name: "Wybierz urząd",
                        url: "https://example.com"
                    }].map(office => office.name)} renderInput={(params) => <TextField {...params} label="Urząd" />} />
            </div>
            <div className="mb-10">
                <label htmlFor="create-petition-description" className="block font-medium text-lg text-neutral-200 mb-1">Opis petycji</label>
                <BaseInput id="create-petition-description" className="w-full" minRows={4} multiline value={description} onInput={(e) => setDescription(e.target.value)} />
            </div>

            <div className="w-[80%] flex items-center mx-auto">
                <BaseButton onClick={submitHandler} isBlueBackground>Utwórz</BaseButton>
            </div>
        </form>
        </div>
    </ThemeProvider> 
    
}

export default CreatePetitionPage;