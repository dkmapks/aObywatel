import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ComponentProps } from 'react';
import customTheme from '../customTheme';

const buttonStyles = css`
  height: 100px;
  border: 5px solid ${props => props.theme.colors.primary[200]};
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 24px;
  color: black;
  text-decoration: none;
  padding: 0 25px;
  font-weight: bold;
`;

const StyledSignButton = styled(Link)<{ isBlueBackground?: boolean }>`
  && {
    ${buttonStyles}
    background-color: ${props => (props.isBlueBackground ? props.theme.colors.primary[200] : 'white')};
    color: ${props => (props.isBlueBackground ? 'white' : props.theme.colors.primary[200])};
  }
`;

function SignButton(props: { to: string; isBlueBackground?: boolean }) {
  return (
    <StyledSignButton to={props.to} isBlueBackground={props.isBlueBackground}>
      <span>Tekst Tekst</span>
    </StyledSignButton>
  );
}

export default SignButton;
