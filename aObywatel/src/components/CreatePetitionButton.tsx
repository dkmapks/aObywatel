import customTheme from "../customTheme";
import SignButton from "./SignButton";

function CreatePetitionButton(customTextColor, customBgColor) {
    return <SignButton to="/create" customTextColor={customTheme.colors.neutral[10]} customBgColor={customTheme.colors.primary[200]}>Utwórz petycję</SignButton>;
}

export default CreatePetitionButton;