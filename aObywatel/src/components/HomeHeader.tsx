import { Link } from "react-router-dom";
import IconArrow from "./Icons/IconArrow";

function HomeHeader({ title }: { title: string }) {
  return (
    <div className="flex py-[20px] items-center justify-between w-full">
      <Link to="/" >
        <IconArrow width="24" />
      </Link>
      <h3 className="text-2xl font-medium">{title}</h3>
      <div className="w-[30px]"></div>
    </div>
  );
}

export default HomeHeader;
