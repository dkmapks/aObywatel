import IconArrow from "./Icons/IconArrow";
import { Link } from "react-router-dom";

function CreatePetitionHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="px-4">
        <Link to="..">
          <IconArrow width="24" />
        </Link>
      </div>
      <h3 className="text-2xl font-medium">Utwórz petycję</h3>
    </div>
  );
}

export default CreatePetitionHeader;
