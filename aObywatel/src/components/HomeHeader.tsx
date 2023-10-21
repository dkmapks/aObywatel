import { Link } from "react-router-dom";
import IconArrow from "./Icons/IconArrow";

function HomeHeader({ title }: { title: string }) {
  return (
    <div className="flex py-[20px] items-center justify-between w-full">
      <Link to="/" className="px-4">
        <IconArrow width="24" />
      </Link>
      <h3 className="text-2xl font-medium w-full">{title}</h3>
    </div>
  );
}

export default HomeHeader;
