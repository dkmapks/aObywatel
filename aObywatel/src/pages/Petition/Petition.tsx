import { useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
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
import SignButton from "../../components/SignButton";
import QrModal from "../../components/QrModal";
import IconCheck from "../../components/Icons/IconCheck";
import { DEFAULT_PETITION, ICON_SIZE, Wrapper } from "./Petition.utils";
import Socials from "../../components/Socials";

function PetitionPage() {
  const [isSigned, setIsSigned] = useState(null);
  const [isSigningLoading, setIsSigningLoading] = useState(null);
  const [signedByLocal, setSignedByLocal] = useState<string[]>([]);
  const [petition, setPetition] = useState<Petition>(DEFAULT_PETITION);

  const { petitionId } = useParams();
  // const { userId } = useUserId()
  const userId = '23k4'

  const petitionURL = window.location.href;
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:9125/api/petitions/${petitionId}`
      );
      const data = await response.json();
      console.log('data: ', data)
      setPetition(data);
      setIsSigned(data.signedByLocal.includes(userId));
      setSignedByLocal(data.signedBy);
    })();
  }, [petitionId, signedByLocal]);

  const {
    title,
    location,
    description,
    parliament,
    targetSignatures,
  } = petition;
  const isBeingConsidered = Boolean(parliament);
  const formattedTargetSignatures = targetSignatures
    ? targetSignatures.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    : null;
  const signedTargetPercentage = Number(
    Math.floor((Number(signedByLocal.length) / Number(targetSignatures)) * 100)
  );

  return (
    <ThemeProvider theme={customTheme}>
      <Wrapper>
        <HomeHeader title={title ?? "Bezpieczne skrzyżowania"} />
        <If condition={isSigned}>
          <ContentBox
            title="Podpisano"
            icon={<IconCheck width={ICON_SIZE} />}
          />
        </If>
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
            signedByLocal && formattedTargetSignatures
          )}
        >
          <ContentBox
            title={`${signedByLocal.length} z ${formattedTargetSignatures} podpisów`}
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
          isSigned={isSigned}
          isLoading={isSigningLoading}
          handleClick={
            () => {
              setIsSigningLoading(true);
              setTimeout(() => {
                isSigned
                  ? setSignedByLocal([...signedByLocal].filter(personId => personId !== userId))
                  : setSignedByLocal([...signedByLocal, String(userId)]);
                setIsSigned(!isSigned);
                setIsSigningLoading(false);
              }, 1000);
            }
          }
        />
        <Socials showQr={setIsQrModalOpen} />
        <QrModal isOpen={isQrModalOpen} data={petitionURL} setIsOpen={setIsQrModalOpen} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default PetitionPage;
