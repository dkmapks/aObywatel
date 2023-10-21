import { Link } from "react-router-dom";

function CreatePetitionButton() {
    return <Link to="/create" className="bg-primary-100 text-white rounded-full fixed bottom-[50px] left-[50%] -translate-x-[50%] font-bold py-3 px-4 w-[calc(100%-100px)] text-center">Utwórz petycję</Link>;
}

export default CreatePetitionButton;