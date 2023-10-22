import { ThemeProvider } from "@mui/material"
import customTheme from "../customTheme"
import { Chat } from "../components/chat/Chat"
import styled from "styled-components"

const Header = styled.h1`
    font-size: 2em;
`

export const ChatPage = () => {
    return <ThemeProvider theme={customTheme}>
        <Header>Zapytaj AI</Header>
        <Chat />
    </ThemeProvider>
}