import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

const buttonStyles = css`
  border: 5px solid ${props => props.theme.colors.primary[200]};
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 18px;
  line-height: 21.6px;
  color: black;
  text-decoration: none;
  padding: 0 25px;
  font-weight: bold;
  padding: 15px 0;
`;

const StyledSignButton = styled(Link)<{ isBlueBackground?: boolean }>`
  && {
    ${buttonStyles}
    background-color: ${props => (props.isBlueBackground ? props.theme.colors.primary[200] : 'white')};
    color: ${props => (props.isBlueBackground ? 'white' : props.theme.colors.primary[200])};
  }
`;

function SignButton(props: { to: string; isBlueBackground?: boolean; children?: ReactNode }) {
  return (
    <StyledSignButton to={props.to} isBlueBackground={props.isBlueBackground}>
      {props.children}
    </StyledSignButton>
  );
}

export default SignButton;
