import IconArrow from "./Icons/IconArrow";
import { Link } from "react-router-dom";

function CreatePetitionHeader() {
  return (
    <div className="flex py-[20px] items-center justify-between">
      <div className="px-4">
        <Link to="..">
          <IconArrow width="24" />
        </Link>
      </div>
      <h3 className="text-2xl font-medium">Utwórz petycję</h3>
      <div className="w-[30px]"></div>
    </div>
  );
}

export default CreatePetitionHeader;
