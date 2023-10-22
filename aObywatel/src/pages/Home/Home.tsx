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
import SortDrawer from "../../components/SortDrawer";


export type Office = {
    name: string;
    url: string;
}

function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [petitions, setPetitions] = useState<Petition[]>([]);
    const [filteredPetitions, setFilteredPetitions] = useState<Petition[]>([]);
    const [filteredAndSortedPetitions, setFilteredAndSortedPetitions] = useState<Petition[]>([]);
    const [offices, _] = useState<Office[]>(officesJSON)

    const [selectedSort, setSelectedSort] = useState<"name-asc" | "name-desc">("name-asc");

    const activeFilterClassNames = "px-3 py-1 border border-primary-200 text-primary-200 bg-white rounded-full font-medium"

    const [filtersInDrawer, setFiltersInDrawer] = useState({
        petitionStatus: [],
        searchOfficeTerm: null
    })

    const sortPetitions = () => {
        switch(selectedSort){
            case "name-asc":
                setFilteredAndSortedPetitions([...filteredPetitions].sort((a, b) => {
                    return a.title.localeCompare(b.title);
                }))
                break;
            case "name-desc":
                setFilteredAndSortedPetitions([...filteredPetitions].sort((a, b) => {
                    return b.title.localeCompare(a.title);
                }))
                break;
            default:
                console.log("Nie ma takiego sortowania", selectedSort)
                break;
        }
    }

    useEffect(() => {
        applyFilters();
    }, [searchTerm, filtersInDrawer])

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:9125/api/petitions/`);
            const data = await response.json();
            setPetitions(data);

            applyFilters();
            sortPetitions();
        })();

    }, [])

    useEffect(() => {
        setFilteredPetitions(petitions);
    }, [petitions])

    useEffect(() => {
        sortPetitions();
    }, [selectedSort, filteredPetitions])

    const updateFiltersInDrawer = (filters) => {
        setFiltersInDrawer(filters);
    }

    const applyFilters = () => {
        const filteredPetitionsBySearchTerm = petitions.filter(petition => {
            return petition.title.toLowerCase().includes(searchTerm.toLowerCase());
        })

        let filteredPetitionsByFiltersInDrawer = filteredPetitionsBySearchTerm;

        if(filtersInDrawer['petitionStatus'].length !== 0) {
            filteredPetitionsByFiltersInDrawer = filteredPetitionsByFiltersInDrawer.filter(petition => {
                return filtersInDrawer['petitionStatus'].find(filter => {
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
                <div className="flex gap-x-4 mb-10 items-center">
                    <FilterButton onFilterChange={(filters) => updateFiltersInDrawer(filters)} offices={offices} />
                    <SortDrawer value={selectedSort} onChange={setSelectedSort} />
                    <BaseInput placeholder="Tytuł poszukiwanej petycji" value={searchTerm} className="w-full bg-white" onInput={(e) => setSearchTerm(e.target.value)} />
                </div>
            </div>
            <div>
            </div>
            <div className="h-[152px] mb-3"></div>
            {filtersInDrawer['petitionStatus'].length > 0 || filtersInDrawer['searchOfficeTerm'] !== null && filtersInDrawer['searchOfficeTerm'] !== "Wybierz urząd" ? <div className="mb-5">
                <h4 className="font-medium text-lg mb-1">Zastosowane filtry</h4>
                <ul className="flex flex-wrap gap-2">
                    {filtersInDrawer['petitionStatus'].map(iteratedFilter => {
                        return <li key={iteratedFilter.value} className={activeFilterClassNames}>{`Status: ${iteratedFilter.text}`}</li>
                    })}
                    {filtersInDrawer['searchOfficeTerm'] !== null && filtersInDrawer['searchOfficeTerm'] !== "Wybierz urząd" && <li className={activeFilterClassNames}>{`Urząd: ${filtersInDrawer['searchOfficeTerm']}`}</li>}
                </ul>
            </div> : null}

            <ul className="h-[calc(100vh-152px-100px)] pt-5 pb-[98px] overflow-y-auto">
                {filteredAndSortedPetitions.map(petition => {
                    return <li key={petition.id}>
                        <PetitionButton className="mb-4" to={`/petition/${petition.id}`}>{petition.title}</PetitionButton>
                    </li>
                })}
            </ul>
            <div className="h-[98px] flex items-center justify-center mx-auto fixed bottom-[0] left-[50%] -translate-x-[50%] bg-neutral-10 w-full">
                <div className="w-[80%]">
                    <CreatePetitionButton />
                </div>
            </div>
        </div>
    </ThemeProvider>;
}

export default HomePage;
