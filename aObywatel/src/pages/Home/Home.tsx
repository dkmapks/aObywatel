import FilterButton from "../../components/FilterButton";
import HomeHeader from "../../components/HomeHeader";
import BaseInput from "../../components/BaseInput";
import { useEffect, useState } from "react";
import PetitionButton from "../../components/PetitionButton";
import { ThemeProvider } from "styled-components";
import customTheme from "../../customTheme";
import CreatePetitionButton from "../../components/CreatePetitionButton";


function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        console.log(searchTerm);
        // TODO: Filtrujemy potem array z jsona    
    }, [searchTerm])

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
            <ul>
                {/* TODO: Paste values from json */}
                {[1,2,3,4,5, 6, 7, 8, 9, 10].map(i => {
                    return <PetitionButton className="mb-4" key={i} to={`/petition/123`}>{i}</PetitionButton>
                })}
            </ul>
        </div>
        <CreatePetitionButton />
    </ThemeProvider>;
}

export default HomePage;