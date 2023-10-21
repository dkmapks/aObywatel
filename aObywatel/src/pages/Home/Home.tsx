import FilterButton from "../../components/FilterButton";
import HomeHeader from "../../components/HomeHeader";
import BaseInput from "../../components/BaseInput";
import { useEffect, useState } from "react";
import PetitionButton from "../../components/PetitionButton";
import { ThemeProvider } from "styled-components";
import customTheme from "../../customTheme";
import CreatePetitionButton from "../../components/CreatePetitionButton";
import { Petition } from "../Petition/Petition.types";
import { offices as officesJSON } from "../../data/data";


export type Office = {
    name: string;
    url: string;
}

function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [petitions, setPetitions] = useState<Petition[]>([]);
    const [filteredPetitions, setFilteredPetitions] = useState<Petition[]>([]);
    const [offices, _] = useState<Office[]>(officesJSON)
    
    const [filtersInDrawer, setFiltersInDrawer] = useState({
        petitionStatus: [],
        searchOfficeTerm: null
    })
    
    useEffect(() => {
        applyFilters();
    }, [searchTerm, filtersInDrawer])

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

    const updateFiltersInDrawer = (filters) => {
        setFiltersInDrawer(filters);
    }

    const applyFilters = () => {
        const filteredPetitionsBySearchTerm = petitions.filter(petition => {
            return petition.title.toLowerCase().includes(searchTerm.toLowerCase());
        })

        let filteredPetitionsByFiltersInDrawer = filteredPetitionsBySearchTerm;

        if(filtersInDrawer['petitionStatus'].length !== 0) {
            filteredPetitionsByFiltersInDrawer.filter(petition => {
                filtersInDrawer['petitionStatus'].find(filter => {
                    return filter.value === petition.status;
                })
            })
        }

        if(filtersInDrawer['searchOfficeTerm'] !== null && filtersInDrawer['searchOfficeTerm'] !== "Wybierz urząd") {
            filteredPetitionsByFiltersInDrawer = filteredPetitionsByFiltersInDrawer.filter(petition => {
                return petition?.recipient?.toLowerCase().includes(filtersInDrawer['searchOfficeTerm'].toLowerCase())
            })
        }


        setFilteredPetitions(filteredPetitionsByFiltersInDrawer);
    }


    return <ThemeProvider theme={customTheme}>
        <div className="bg-neutral-10 px-[20px] h-[100vh]">
            <div className="fixed top-0 left-0 px-[20px] bg-neutral-10 w-full">
                <HomeHeader title={"Petycje"} />
                <div className="flex gap-x-4 pe-[20px] mb-10 items-center">
                    <FilterButton onFilterChange={(filters) => updateFiltersInDrawer(filters)} offices={offices} />
                    <BaseInput placeholder="Ustawa nr ..." value={searchTerm} className="w-full bg-white" onInput={(e) => setSearchTerm(e.target.value)} />
                </div>
            </div>
            <div>
            </div>
            <div className="h-[152px] mb-3"></div>
            <ul className="h-[calc(100vh-152px-150px)] pt-5 overflow-y-auto">
                {/* TODO: Paste values from json */}
                {filteredPetitions.map(petition => {
                    return <li key={petition.id}>
                        <PetitionButton className="mb-4" to={`/petition/${petition.id}`}>{petition.title}</PetitionButton>
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
