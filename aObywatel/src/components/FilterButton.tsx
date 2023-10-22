import IconFilter from "./Icons/IconFilter";
import {Drawer, Button, Autocomplete, TextField} from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { PetitionStatus } from "../pages/Petition/Petition.types";
import { Office } from "../pages/Home/Home";

const StyledFilterButton = styled(Button)`
    padding: 0 !important;
    min-width: 0 !important;
`

type Filter = {
    text: string,
    value: PetitionStatus
}

type AppliedFilters = {
    petitionStatus: Filter[],
    searchOfficeTerm: string | null
}

type FilterButtonProps = {
    onFilterChange: () => Filter[];
    offices: Office[];
}

function FilterButton(props: FilterButtonProps) {
    const statusFilters = [
        {
            text: "W trakcie",
            value: PetitionStatus.PENDING
        },
        {
            text: "Odrzucone",
            value: PetitionStatus.DROPPED
        },
        {
            text: "Wysłane",
            value: PetitionStatus.SENT
        }
    ]

    const DEFAULT_FILTER_VALUE = "Wybierz urząd"

    const [isOpen, setIsOpen] = useState(false);
    const [selectedStatusFilters, setSelectedStatusFilters] = useState<Filter[]>([])
    const [officeSearchTerm, setOfficeSearchTerm] = useState(DEFAULT_FILTER_VALUE)

    const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

    const toggleSelectedStatusFilter = (filter, isSelected: boolean) => {

        if(!isSelected){
            const newSelectedStatusFilters = selectedStatusFilters.filter(iteratedFilter => iteratedFilter.value !== filter.value);
            setSelectedStatusFilters(newSelectedStatusFilters);
            return;
        }

        setSelectedStatusFilters([...selectedStatusFilters, filter]);
        return;
    }

    const getSelectedFilterStatus = filter => {
        return selectedStatusFilters.find(iteratedFilter => iteratedFilter.value === filter.value);
    }


    const getFilterClassName = (filter) => {
        const selectedFilterClassNames = "text-white bg-primary-100 border-primary-100"
        const notSelectedFilterClassNames = "text-primary-100 border-primary-100 bg-transparent"
        const isSelected = selectedStatusFilters.find(iteratedFilter => iteratedFilter.value === filter.value);
        const baseClassNames = "py-2 px-3 rounded-full border-2"
        return isSelected ? `${baseClassNames} ${selectedFilterClassNames}` : `${baseClassNames} ${notSelectedFilterClassNames}`;
    }

    const prepareFilters = () => {
        const filters: AppliedFilters = {
            petitionStatus: [],
            searchOfficeTerm: null
        };

        filters.petitionStatus = selectedStatusFilters;
        filters.searchOfficeTerm = officeSearchTerm || null;
        return filters;
    }

    return <div>
        <StyledFilterButton onClick={() => setIsOpen(true)}>
            <IconFilter color={"#000"} />
        </StyledFilterButton>
        <Drawer anchor='bottom' open={isOpen} onClose={toggleDrawer(false)} >
            <div className="max-h-[80vh] p-4 flex flex-col justify-between pb-5">
                <div>
                    <h4 className="text-xl text-center font-medium mb-5">Filtry</h4>

                    <div className="mb-3">
                        <h5 className="text-lg mb-2">Status petycji</h5>
                        <ul className="flex overflow-x-scroll pb-3 gap-x-2">
                            {statusFilters.map(filter => {
                                return <li key={filter.value}>
                                    <button className={getFilterClassName(filter)} onClick={() => toggleSelectedStatusFilter(filter, !getSelectedFilterStatus(filter))}>{filter.text}</button>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="mb-10">
                        <label htmlFor="filter-office-autocomplete" className="text-lg mb-2 block">Urząd</label>
                        <Autocomplete id="filter-office-autocomplete" getOptionDisabled={option => option === 'Wybierz urząd'} value={officeSearchTerm} onChange={(_, value) => setOfficeSearchTerm(value)} options={[...props.offices, {
                            name: "Wybierz urząd",
                            url: "https://example.com"
                        }].map(office => office.name)} renderInput={(params) => <TextField {...params} label="" />} />
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button className="py-2 px-3 rounded-full border-2 text-white bg-primary-100 border-primary-100 font-medium" onClick={() => props.onFilterChange(prepareFilters())}>
                        Zastosuj filtry
                    </button>
                </div>
            </div>
        </Drawer>
    </div>;
}

export default FilterButton;
