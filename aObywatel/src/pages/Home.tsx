import FilterButton from "../components/FilterButton";
import HomeHeader from "../components/HomeHeader";
import BaseInput from "../components/BaseInput";
import { useState } from "react";


function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");

    return <div className="bg-neutral-20 px-[20px]">
        <HomeHeader />
        <div className="flex gap-x-4 pe-[20px]">
            <FilterButton onClick={() => console.log("Test")} />
            <BaseInput className="w-full" size="small" onInput={(e) => setSearchTerm(e.target.value)} />
        </div>
        <ul>
            {[1,2,3,4,5].map(i => {
                return <li key={i}>{i}</li>
            })}
        </ul>
    </div>;
}

export default HomePage;