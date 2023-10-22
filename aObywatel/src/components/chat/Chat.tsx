import styled from "styled-components"
import customTheme from "../../customTheme"

export const Container = styled.div`
    background-color: ${customTheme.colors.neutral[50]} !important;
`

const Frame = styled.iframe`
    max-height: 80vh;
    min-height: 80vh;
    width: 100vw;
`

const DescText = styled.div`
    opacity: .5;
    padding: 1em;
    font-size: .78em;
`

export const Chat = () => {
    return <Container>
        <Frame
            src="https://chat-app-caf39f.zapier.app/"
        />
        <div className="bg-neutral-10">
            <DescText>Chatbot może udzielać niepoprawnych a wręcz fałszywych informacji,
                a jego istnienie ma za zadanie jedynie pomagać użytkownikowi w znalezieniu ścieżek zaczepienia
                do dalszego poszukiwania informacji.
            </DescText>
        </div>
    </Container>
}