import { ThemeProvider } from "@mui/material"
import customTheme from "../customTheme"
import { Chat } from "../components/chat/Chat"
import HomeHeader from "../components/HomeHeader"

export const ChatPage = () => {
    return <ThemeProvider theme={customTheme}>
        <div className="px-6 bg-neutral-10">
            <HomeHeader title="Chat" />
        </div>
        <Chat />
    </ThemeProvider>
}