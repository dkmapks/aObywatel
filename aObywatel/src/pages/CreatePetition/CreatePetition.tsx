import { ThemeProvider } from "styled-components";
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
import HomeHeader from "../../components/HomeHeader";
import MapPicker from "../../components/map/MapPicker";


function CreatePetitionPage() {
    const WARSAW_GEO_COORDINATES = {
        location_lat: 52.2504,
        location_lng: 21.0029
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [authors, setAuthors] = useState("");

    const [offices, _] = useState<Office[]>(officeJSON);
    const [officeSearchTerm, setOfficeSearchTerm] = useState("Wybierz urząd");

    const [content, setContent] = useState("");
    const [geoLocation, setGeoLocation] = useState({
        location_lat: null,
        location_lng: null
    })

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
            coordinates: geoLocation

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

    const getLocationInputValue = () => {
        if(!geoLocation.location_lat || !geoLocation.location_lng) {
            return "Wybierz lokację"
        }

        const toFixedLat = geoLocation.location_lat.toFixed(4);
        const toFixedLng = geoLocation.location_lng.toFixed(4);

        return `Zapisana lokacja: ${toFixedLat}, ${toFixedLng}`
    }

    return <ThemeProvider theme={customTheme}>
        <div className="bg-neutral-10 min-h-[100vh] px-[20px]">
            <HomeHeader title={"Utwórz petycję"} />
        <form>
            <div className="mb-5">
                <label htmlFor="create-petition-title" className="block font-medium text-neutral-200 mb-1">Tytuł</label>
                <BaseInput id="create-petition-title" className="w-full" value={title} onInput={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-5">
                <label htmlFor="create-petition-authors" className="block font-medium text-neutral-200 mb-1">Autorzy (opcjonalne)</label>
                <BaseInput id="create-petition-authors" className="w-full" value={authors} onInput={(e) => setAuthors(e.target.value)} />
            </div>
            <div className="mb-5">
                <label htmlFor="create-petition-text" className="block font-medium text-neutral-200 mb-1">Tekst petycji</label>
                <BaseInput value={content} onChange={(e) => setContent(e.target.value)} multiline minRows={4} id="create-petition-text" className="w-full" />
            </div>
            <div className="mb-5">
                <div className="mb-2">
                    <BaseInput disabled value={getLocationInputValue()} className="w-full" />
                </div>
                <MapPicker height="200px" onLatLng={setGeoLocation} center={WARSAW_GEO_COORDINATES} />
            </div>
            <div className="mb-5">
                <label htmlFor="create-petition-autocomplete" className="block font-medium text-neutral-200 mb-1">Urząd</label>
                <Autocomplete id="create-petition-autocomplete" getOptionDisabled={option => option === 'Wybierz urząd'} value={officeSearchTerm} onChange={(_, value) => setOfficeSearchTerm(value)} options={[...offices, {
                        name: "Wybierz urząd",
                        url: "https://example.com"
                    }].map(office => office.name)} renderInput={(params) => <TextField {...params} label="" />} />
            </div>
            <div className="mb-10">
                <label htmlFor="create-petition-description" className="block font-medium text-neutral-200 mb-1">Opis petycji</label>
                <BaseInput id="create-petition-description" className="w-full" minRows={4} multiline value={description} onInput={(e) => setDescription(e.target.value)} />
            </div>

            <div className="w-[80%] flex items-center mx-auto mb-5">
                <BaseButton onClick={submitHandler} isBlueBackground>Utwórz</BaseButton>
            </div>
        </form>
        </div>
    </ThemeProvider>

}

export default CreatePetitionPage;