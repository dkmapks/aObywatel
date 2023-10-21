import FilterButton from "../../components/FilterButton";
import HomeHeader from "../../components/HomeHeader";
import BaseInput from "../../components/BaseInput";
import { useEffect, useState } from "react";
import PetitionButton from "../../components/PetitionButton";
import { ThemeProvider } from "styled-components";
import customTheme from "../../customTheme";
import CreatePetitionButton from "../../components/CreatePetitionButton";
import SignButton from "../../components/SignButton";
import LargeTextModal from "../../components/Education";

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
            <ul className="h-[calc(100vh-250px)] overflow-y-auto">
                {/* TODO: Paste values from json */}
                {[1,2,3,4,5, 6, 7, 8, 9, 10].map(i => {
                    return <li key={i}>
                        <PetitionButton className="mb-4" to={`/petition/123`}>{i}</PetitionButton>
                    </li>
                })}
            </ul>
            <div className="h-[98px] flex items-center">
                <LargeTextModal />
            </div>
        </div>
    </ThemeProvider>;
}

export default HomePage;