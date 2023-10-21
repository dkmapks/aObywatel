import { ThemeProvider } from "styled-components";
import CreatePetitionForm from "../../components/CreatePetitionForm";
import CreatePetitionHeader from "../../components/CreatePetitionHeader";
import customTheme from "../../customTheme";

function CreatePetitionPage() {
    return <ThemeProvider theme={customTheme}>
        <div className="bg-neutral-10 h-[100vh] px-[20px]">
            <CreatePetitionHeader />
            <CreatePetitionForm />
        </div>;
    </ThemeProvider> 
    
}

export default CreatePetitionPage;