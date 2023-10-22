import styled, { css } from 'styled-components';
import { CircularProgress } from '@mui/material';
import customTheme from '../customTheme';

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

export const StyledSignButton = styled.button<{ customBgColor: string, customTextColor: string, onClick: () => void}>`
  && {
    ${buttonStyles}
    background-color: ${props => props.customBgColor};
    color: ${props => props.customTextColor};
    height: 55px;
  }
`;

interface Props {
   handleClick: () => void;
   isSigned: boolean;
   isLoading: boolean;
}

function SignButton({handleClick, isSigned, isLoading}: Props) {
  return (
    <StyledSignButton
      customTextColor={isSigned || isLoading ? customTheme.colors.primary[200] : customTheme.colors.neutral[10]}
      customBgColor={isSigned || isLoading ? customTheme.colors.neutral[10] : customTheme.colors.primary[200]}
      onClick={handleClick}
  >
    <CircularProgress
        size="md"
        value={50}
      />
    {isLoading
      ?
        <CircularProgress color={isSigned ? "error" : "success"} />
      : (
        <>
          {isSigned ? 'Wycofaj podpis' : 'Podpisz'}
        </>
      )}

    </StyledSignButton>
  );
}

export default SignButton;
