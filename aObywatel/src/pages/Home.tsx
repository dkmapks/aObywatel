import PetitionButton from "../components/PetitionButton.tsx";
import SignButton from "../components/SignButton.tsx";
import customTheme from '../customTheme';
import styled, { ThemeProvider } from "styled-components";

function HomePage() {
    return <ThemeProvider theme={customTheme}><div>
        <SignButton> </SignButton>
        <SignButton isBlueBackground={true}> </SignButton>
    </div></ThemeProvider>;
}

export default HomePage;