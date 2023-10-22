import { Link } from "react-router-dom";
import { Petition } from "../pages/Petition/Petition.types";

type ParliamentLinkProps = {
    parliament: Petition['parliament'];
}

function ParliamentLink(props: ParliamentLinkProps) {
    const generatedParliamentLink = `https://www.sejm.gov.pl/Sejm9.nsf/agent.xsp?symbol=${props.parliament.symbol}&NrPetycji=${props.parliament.id}`
    return <Link className="text-primary-100 font-medium underline" to={generatedParliamentLink}>Zobacz status petycji w sejm.gov.pl</Link>;
}

export default ParliamentLink;