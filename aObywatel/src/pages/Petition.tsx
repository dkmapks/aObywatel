import { useParams } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import customTheme from "../customTheme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: light-green;
  padding: 10px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary[100]};
  shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

const GoBackButton = styled.button``;

const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin: 5px;
`;

function PetitionPage() {
  const { petitionId } = useParams();

  return (
    <ThemeProvider theme={customTheme}>
      <Wrapper>
        <ContentBox>
          <GoBackButton>Go Back</GoBackButton>
          <Title>Test</Title>
        </ContentBox>
        <p>Petition id: {petitionId}</p>
      </Wrapper>
    </ThemeProvider>
  );
}

export default PetitionPage;
