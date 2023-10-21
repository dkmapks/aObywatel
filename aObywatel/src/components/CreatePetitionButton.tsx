import customTheme from "../customTheme";
import LinkButton from "./LinkButton";

function CreatePetitionButton() {
    return <LinkButton customBgColor={customTheme.colors.primary[200]} customTextColor="#FFF"  to="/create">Utwórz petycję</LinkButton>;
}

export default CreatePetitionButton;