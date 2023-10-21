import { useState } from "react";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";

function CreatePetitionForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <form className="ps-[20px]">
        <div className="mb-5">
            <label className="block font-medium text-lg text-neutral-200 mb-1">Tytuł</label>
            <BaseInput className="w-full" value={title} onInput={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-10">
            <label className="block font-medium text-lg text-neutral-200 mb-1">Opis petycji</label>
            <BaseInput className="w-full" minRows={4} multiline value={description} onInput={(e) => setDescription(e.target.value)} />
        </div>

        <div className="w-[80%] flex items-center mx-auto">
            <BaseButton isBlueBackground>Utwórz</BaseButton>
        </div>

    </form>;
}

export default CreatePetitionForm;