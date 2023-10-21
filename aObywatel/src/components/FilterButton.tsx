import IconFilter from "./Icons/IconFilter";
import { Button } from "@mui/material";
import styled from "styled-components";

const StyledFilterButton = styled(Button)`
  padding: 0;
`;

type FilterButtonProps = {
  onClick?: () => void;
};

function FilterButton(props: FilterButtonProps) {
  return (
    <StyledFilterButton onClick={props.onClick}>
      <IconFilter />
    </StyledFilterButton>
  );
}

export default FilterButton;
