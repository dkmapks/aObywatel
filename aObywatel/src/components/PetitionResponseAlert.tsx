import { Alert, AlertTitle } from "@mui/material";
import { PetitionStatus } from "../pages/Petition/Petition.types";
import styled from "styled-components";

type PetitionResponseAlertProps = {
    status: PetitionStatus;
    text: string;

}

const StyledAlert = styled(Alert)`
    width: 100%;
`

function PetitionResponseAlert(props: PetitionResponseAlertProps) {
    const petitionResponseAlertDataResolver= {
        [PetitionStatus.ACCEPTED]: {
            variant: "success",
            title: "Petycja została zaakceptowana",
        },
        [PetitionStatus.DECLINED]: {
            variant: "error",
            title: "Petycja została odrzucona"
        },
        [PetitionStatus.PENDING]: {
            variant: "info",
            title: "Petycja jest w trakcie zbioru podpisów"
        },
        [PetitionStatus.SENT]: {
            variant: "info",
            title: "Petycja została wysłana do rozpatrzenia"
        },
        [PetitionStatus.DROPPED]: {
            variant: "error",
            title: "Petycja została odrzucona z powodu małej ilości podpisów"
        }
    } as const;

    return <StyledAlert severity={petitionResponseAlertDataResolver[props.status]?.variant }>
        <AlertTitle>{petitionResponseAlertDataResolver[props.status]?.title}</AlertTitle>
        {props.text}
    </StyledAlert>;
}

export default PetitionResponseAlert;