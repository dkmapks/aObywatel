import { Button, ThemeProvider } from "@mui/material"
import customTheme from "../customTheme"
import { loginUser } from "../user/user"

export const UserPage = () => {
    return <ThemeProvider theme={customTheme}>
        <Button onClick={() => {
            loginUser("65ad87ac-3f1d-43fe-87a2-fc8cc86bad2e")
        }}>Zaloguj jako user 1</Button>
        <Button onClick={() => {
            loginUser("29b14b24-fbcf-4464-ae36-93107a2c6c17")
        }}>
            Zaloguj jako user 2
        </Button>
        <Button onClick={() => {
            loginUser("2cff9a0b-e3af-4380-934c-e3524d71ca18")
        }}>
            Zaloguj jako user 3
        </Button>
    </ThemeProvider>
}