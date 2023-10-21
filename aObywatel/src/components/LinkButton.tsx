import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

const buttonStyles = css`
  border: 2px solid ${props => props.theme.colors.primary[200]};
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

export const StyledLinkButton = styled(Link)<{ customBgColor: string, customTextColor: string}>`
  && {
    ${buttonStyles}
    background-color: ${props => props.customBgColor};
    color: ${props => props.customTextColor};
  }
`;

function LinkButton(props: { to: string; customBgColor: string, customTextColor: string; children?: ReactNode }) {
  return (
    <StyledLinkButton
      to={props.to}
      customTextColor={props.customTextColor}
      customBgColor={props.customBgColor}
    >
      {props.children}
    </StyledLinkButton>
  );
}

export default LinkButton;
