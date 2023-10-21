import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ComponentProps } from 'react';
import IconChevron from '../components/IconChevron';

const StyledPetitionButton = styled(Link)<Parameters<typeof Link>[0]>`
  && {
    height: 100px;
    border: 2px solid gray;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 24px;
    color: black;
    text-decoration: none;
    padding: 0 25px;
  }
`;

const StyledIconLink = styled.div`
  && {
    height: 30px;
    width: 30px;
  }
`;

function PetitionButton(props: Link) {
  return (
    <StyledPetitionButton to={props.to} {...props}>
      <span>Tekst Tekst Tekst Tekst</span>
      <StyledIconLink>
        <IconChevron to={props.to} {...props} />
      </StyledIconLink>
    </StyledPetitionButton>
  );
}

export default PetitionButton;
