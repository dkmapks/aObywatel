import styled, { css } from 'styled-components';
import { ReactNode } from 'react';
import { Button } from '@mui/material';

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
  text-transform: capitalize;
`;

const StyledBaseButton = styled(Button)<{ isBlueBackground?: boolean }>`
  && {
    ${buttonStyles}
    background-color: ${props => (props.isBlueBackground ? props.theme.colors.primary[200] : 'white')};
    color: ${props => (props.isBlueBackground ? 'white' : props.theme.colors.primary[200])};
  }
`;

function BaseButton(props: { isBlueBackground?: boolean; children?: ReactNode, onClick?: () => void }) {
  return (
    <StyledBaseButton {...props} isBlueBackground={props.isBlueBackground} onClick={props?.onClick}>
      {props.children}
    </StyledBaseButton>
  );
}

export default BaseButton;
