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
import { useEffect, useState } from "react";
import { Petition } from "./Petition.types";
import LinkButton from "../../components/LinkButton";
import SignButton from "../../components/SignButton";
import QrModal from "../../components/QrModal";
import { Button } from "@mui/material";

const ICON_SIZE = "30";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral[10]};
  padding-inline: 20px;
  min-height: 100vh;
  gap: 20px;
`;

function PetitionPage() {
  const [petition, setPetition] = useState<Petition>({
    title: "Bezpieczne skrzyżowania",
    description:
      "niesienie przepisów na skrzyżowaniach w centrum miasta: Ich brak wymusi wzmożoną ostrożność zarówno kierowców jak i pieszych co doprowadzi do zwiększenia bezpieczeństwa i zmniejszenia liczby wypadków. Takie rozwiązanie z powodzeniem wdrożono w niektórych krajach UE.",
    location: "Gdynia, Pomorskie",
    signedBy: ["Jan Kowalski, Stanisław Jarocki"],
  } as Petition);
  const { petitionId } = useParams();

  const petitionURL = window.location.href;
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:9125/api/petitions/${petitionId}`
      );
      const data = await response.json();
      setPetition(data);
    })();
  }, [petitionId]);

  const {
    title,
    location,
    description,
    parliament,
    signedBy,
    targetSignatures,
  } = petition;
  const isBeingConsidered = Boolean(parliament);
  const formattedTargetSignatures = targetSignatures
    ? targetSignatures.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    : null;
  const signedTargetPercentage = Number(
    Math.floor((Number(signedBy.length) / Number(targetSignatures)) * 100)
  );

  return (
    <ThemeProvider theme={customTheme}>
      <Wrapper>
        <HomeHeader title={title ?? "Bezpieczne skrzyżowania"} />
        <ContentBox
          title={location ?? "Gdynia, Pomorskie"}
          icon={<IconLocation width={ICON_SIZE} />}
        />
        <ContentBox
          title="Cel"
          icon={<IconDescription width={ICON_SIZE} />}
          description={
            description ??
            "Zniesienie przepisów na skrzyżowaniach w centrum miasta: Ich brak wymusi wzmożoną ostrożność zarówno kierowców jak i pieszych co doprowadzi do zwiększenia bezpieczeństwa i zmniejszenia liczby wypadków. Takie rozwiązanie z powodzeniem wdrożono w niektórych krajach UE."
          }
        />
        <If
          condition={Boolean(
            signedBy && signedBy.length && formattedTargetSignatures
          )}
        >
          <ContentBox
            title={`${signedBy.length} z ${formattedTargetSignatures} podpisów`}
            icon={<IconPen width={ICON_SIZE} />}
          >
            <ProgressBar progress={signedTargetPercentage} />
          </ContentBox>
        </If>
        <If condition={isBeingConsidered}>
          <ContentBox
            title="Rozpatrywana przez sejm"
            icon={<IconReader width={ICON_SIZE} />}
          />
        </If>
        <SignButton
          customBgColor={customTheme.colors.primary[200]}
          customTextColor={customTheme.colors.neutral[10]}
        >
          Podpisz
        </SignButton>

        <ContentBox title="Udostępnij" icon={<IconReader width={ICON_SIZE} />}>
            <Button onClick={() => setIsQrModalOpen(true)}>Pokaż kod QR</Button>
        </ContentBox>
        <QrModal isOpen={isQrModalOpen} data={petitionURL} setIsOpen={setIsQrModalOpen} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default PetitionPage;
