import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconChevron from '../components/IconChevron';

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
    border: 1px solid ${(props) => props.theme.colors.neutral[40]}
  }
`;


function PetitionButton(props: Link) {
  return (
    <StyledPetitionButton to={props.to} {...props}>
      Tekst Tekst Tekst Teks
      <IconChevron to={props.to} {...props} width="8" />
    </StyledPetitionButton>
  );
}

export default PetitionButton;
