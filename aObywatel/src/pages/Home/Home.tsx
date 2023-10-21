import FilterButton from "../../components/FilterButton";
import HomeHeader from "../../components/HomeHeader";
import BaseInput from "../../components/BaseInput";
import { useEffect, useState } from "react";
import PetitionButton from "../../components/PetitionButton";
import { ThemeProvider } from "styled-components";
import customTheme from "../../customTheme";
import CreatePetitionButton from "../../components/CreatePetitionButton";
import { Petition } from "../Petition/Petition.types";


function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [petitions, setPetitions] = useState<Petition[]>([]);
    const [filteredPetitions, setFilteredPetitions] = useState<Petition[]>([]);

    useEffect(() => {
        setFilteredPetitions(petitions.filter(petition => {
            return petition.title.toLowerCase().includes(searchTerm.toLowerCase());
        }))
    }, [searchTerm])

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:9125/api/petitions/`);
            const data = await response.json();
            setPetitions(data);
        })();
    }, [])

    useEffect(() => {
        setFilteredPetitions(petitions);
    }, [petitions])

    return <ThemeProvider theme={customTheme}>
        <div className="bg-neutral-10 px-[20px] h-[100vh]">
            <div className="fixed top-0 left-0 px-[20px] bg-neutral-10 w-full">
                <HomeHeader />
                <div className="flex gap-x-4 pe-[20px] mb-10">
                    <FilterButton onClick={() => console.log("Test")} />
                    <BaseInput value={searchTerm} className="w-full" size="small" onInput={(e) => setSearchTerm(e.target.value)} />
                </div>
            </div>
            <div className="h-[152px]"></div>
            <ul className="h-[calc(100vh-250px)] overflow-y-auto">
                {/* TODO: Paste values from json */}
                {filteredPetitions.map(petition => {
                    return <li key={petition.id}>
                        <PetitionButton className="mb-4" to={`/petition/123`}>{petition.title}</PetitionButton>
                    </li>
                })}
            </ul>
            <div className="h-[98px] flex items-center w-[80%] mx-auto">
                <CreatePetitionButton />
            </div>
        </div>
    </ThemeProvider>;
}

export default HomePage;