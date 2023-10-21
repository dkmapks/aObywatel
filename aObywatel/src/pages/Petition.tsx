import {useParams} from "react-router-dom";


function PetitionPage() {
    const {petitionId} = useParams();

    return <div>This is petition page {petitionId}</div>;
}

export default PetitionPage;