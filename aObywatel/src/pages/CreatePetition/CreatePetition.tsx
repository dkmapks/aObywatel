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


function CreatePetitionPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [authors, setAuthors] = useState("");

    const userId =  useUserId() || "1";

    const navigate = useNavigate()

    if(!userId){
        return <div>Brak użytkownika</div>
    }
    const submitHandler = async () => {
        const petition: Petition = {
            id: generateUUID(),
            status: PetitionStatus.ACTIVE,
            title,
            description,
            author: authors,
            authorId: userId,
            signedBy: [],
            creationDate: new Date().getTime(),

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
        <div className="bg-neutral-10 h-[100vh] px-[20px]">
            <CreatePetitionHeader />
        <form className="ps-[20px]">
            <div className="mb-5">
                <label className="block font-medium text-lg text-neutral-200 mb-1">Tytuł (min. 8 znaków)</label>
                <BaseInput min={8} className="w-full" value={title} onInput={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-5">
                <label className="block font-medium text-lg text-neutral-200 mb-1">Autorzy (opcjonalne)</label>
                <BaseInput className="w-full" value={authors} onInput={(e) => setAuthors(e.target.value)} />
            </div>
            <div className="mb-10">
                <label className="block font-medium text-lg text-neutral-200 mb-1">Opis petycji (min. 40 znaków)</label>
                <BaseInput min={40} className="w-full" minRows={4} multiline value={description} onInput={(e) => setDescription(e.target.value)} />
            </div>

            <div className="w-[80%] flex items-center mx-auto">
                <BaseButton onClick={submitHandler} isBlueBackground>Utwórz</BaseButton>
            </div>
        </form>
        </div>
    </ThemeProvider> 
    
}

export default CreatePetitionPage;