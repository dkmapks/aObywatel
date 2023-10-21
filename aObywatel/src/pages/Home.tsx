import FilterButton from "../components/FilterButton";
import HomeHeader from "../components/HomeHeader";
import BaseInput from "../components/BaseInput";
import { useState } from "react";
import PetitionButton from "../components/PetitionButton";


function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");

    return <div className="bg-neutral-10 px-[20px] h-[100vh]">
        <div className="fixed top-0 left-0 px-[20px] bg-neutral-10 w-full">
            <HomeHeader />
            <div className="flex gap-x-4 pe-[20px] mb-10">
                <FilterButton onClick={() => console.log("Test")} />
                <BaseInput className="w-full" size="small" onInput={(e) => setSearchTerm(e.target.value)} />
            </div>
        </div>
        <div className="h-[152px]"></div>
        <ul>
            {[1,2,3,4,5, 6, 7, 8, 9, 10].map(i => {
                return <PetitionButton className="mb-4 border border-neutral-40" key={i} to={`/petition/123`}>{i}</PetitionButton>
            })}
        </ul>
    </div>;
}

export default HomePage;