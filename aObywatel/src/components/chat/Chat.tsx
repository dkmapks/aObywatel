import styled from "styled-components"

export const Container = styled.div`

`

const Frame = styled.iframe`
    max-height: 80vh;
    min-height: 50vh;
    width: 100vw;
`

const DescText = styled.div`
    color: rgba(0,0,0, .25);
    font-size: .78em;
`

export const Chat = () => {
    return <Container>
        <Frame
            src="https://chat-app-caf39f.zapier.app/"
        />
        <DescText>
            *disclaimer* Chatbot może udzielać niepoprawnych a wręcz fałszywych informacji,
            a jego istnienie ma za zadanie jedynie pomagać użytkownikowi w znalezieniu ścieżek zaczepienia
            do dalszego poszukiwania informacji.
        </DescText>
    </Container>
}