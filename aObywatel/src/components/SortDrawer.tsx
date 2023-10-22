import { Button, Drawer, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import styled from "styled-components";
import IconSort from "./Icons/IconSort";
import { useState } from "react";

const StyledSortButton = styled(Button)`
    padding: 0 !important;
    min-width: 0 !important;
`

const StyledSortLabel = styled(FormLabel)`
    &.Mui-focued {
        color: ${props => props.theme.colors.neutral[100]}
    }
`

type SortDrawerProps = {
    value: string;
    onChange: (value: string) => void;
}

function SortDrawer(props: SortDrawerProps) {

    const sortOptions = [
        {
            label: "Nazwa A-Z",
            value: "name-asc"
        },
        {
            label: "Nazwa Z-A",
            value: "name-desc"
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

    return <div>
        <StyledSortButton onClick={() => setIsOpen(true)}>
            <IconSort width="28"/>
        </StyledSortButton>
        <Drawer anchor='bottom' open={isOpen} onClose={toggleDrawer(false)}>
            <div className="max-h-[80vh] p-4">
            <FormControl>
                <StyledSortLabel id="sort-options">Sortuj za pomocą</StyledSortLabel>
                <RadioGroup
                    aria-labelledby="sort-options"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                >
                    {sortOptions.map((option) => <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />)}
                </RadioGroup>
            </FormControl>
            </div>
        </Drawer>
    </div>;
}

export default SortDrawer;