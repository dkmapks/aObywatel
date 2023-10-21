import { useParams } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import customTheme from "../../customTheme";
import HomeHeader from "../../components/HomeHeader";
import IconPen from "../../components/Icons/IconPen";
import IconLocation from "../../components/Icons/IconLocation";
import IconReader from "../../components/Icons/IconReader";
import IconDescription from "../../components/Icons/IconDescription";
import ContentBox from "../../components/ContentBox";
import If from "../../components/If";
import ProgressBar from "../../components/ProgressBar";

const ICON_SIZE = "30";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral[10]};
  padding-inline: 20px;
  min-height: 100vh;
  gap: 30px;
`;

function PetitionPage() {
  const {
    title,
    location,
    description,
    parliament,
    // signedBy,
    // targetSignatures,
  } = useParams();

  //temp mock
  const targetSignatures = 25_000;
  const signedBy = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "7",
    "8",
    "9",
    "10",
    "3",
    "4",
    "5",
    "7",
    "8",
    "9",
    "10",
    "3",
    "4",
    "5",
    "7",
    "8",
    "9",
    "10",
    "3",
    "4",
    "5",
    "7",
    "8",
    "9",
    "10",
    "3",
    "4",
    "5",
    "7",
    "8",
    "9",
    "10",
  ];

  const isBeingConsidered = Boolean(parliament);

  return (
    <ThemeProvider theme={customTheme}>
      <Wrapper>
        <HomeHeader title={title ?? "Bezpieczne skrzyżowania"} />
        <ContentBox
          title={location ?? "Gdynia, Pomorskie"}
          icon={<IconLocation width={ICON_SIZE} />}
        />
        <ContentBox
          title="Petycja"
          icon={<IconPen width={ICON_SIZE} />}
          description="Zgłoś"
        />
        <ContentBox
          title="Cel"
          icon={<IconDescription width={ICON_SIZE} />}
          description={
            description ??
            "Zniesienie przepisów na skrzyżowaniach w centrum miasta: Ich brak wymusi wzmożoną ostrożność zarówno kierowców jak i pieszych co doprowadzi do zwiększenia bezpieczeństwa i zmniejszenia liczby wypadków. Takie rozwiązanie z powodzeniem wdrożono w niektórych krajach UE."
          }
        />
        <If condition={Boolean(signedBy && signedBy.length)}>
          <ContentBox
            title={`Zebrane podpisy ${signedBy.length}/${targetSignatures
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
            icon={<IconReader width={ICON_SIZE} />}
          >
            <ProgressBar progress={78} />
          </ContentBox>
        </If>
        <If condition={isBeingConsidered}>
          <ContentBox
            title="Rozpatrywana przez sejm"
            icon={<IconReader width={ICON_SIZE} />}
          />
        </If>
      </Wrapper>
    </ThemeProvider>
  );
}

export default PetitionPage;
