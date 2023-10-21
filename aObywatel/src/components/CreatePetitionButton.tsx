import customTheme from "../customTheme";
import SignButton from "./SignButton";

function CreatePetitionButton() {
    return <SignButton customBgColor={customTheme.colors.primary[200]} customTextColor="#FFF"  to="/create">Utwórz petycję</SignButton>;
}

export default CreatePetitionButton;