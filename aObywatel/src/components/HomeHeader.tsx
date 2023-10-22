import { Link } from "react-router-dom";
import IconArrow from "./Icons/IconArrow";

function HomeHeader({ title }: { title: string }) {
  return (
    <div className="flex py-[20px] items-center justify-between w-full gap-x-2">
      <Link to="/" >
        <IconArrow width={24} />
      </Link>
      <h3 className="text-xl font-medium text-center line-clamp-2" aria-label={title}>{title}</h3>
      <div className="w-[24px]"></div>
    </div>
  );
}

export default HomeHeader;
