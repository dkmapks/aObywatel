import styled from "styled-components";
import { Link } from "react-router-dom";
import IconChevron from "../components/Icons/IconChevron";
import { ReactNode } from "react";

const StyledPetitionButton = styled(Link)<Parameters<typeof Link>[0]>`
  && {
    height: 70px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 20px;
    text-decoration: none;
    padding: 23px 25px;
    background-color: white;
    border: 1px solid ${(props) => props.theme.colors.neutral[40]};
    column-gap: 15px;
  }
`;

function PetitionButton(props: { children: ReactNode; to: string }) {
  return (
    <StyledPetitionButton to={props.to} {...props}>
      <span className='line-clamp-1 text-ellipsis'>{props.children}</span>
      <IconChevron to={props.to} {...props} width={8} />
    </StyledPetitionButton>
  );
}

export default PetitionButton;
