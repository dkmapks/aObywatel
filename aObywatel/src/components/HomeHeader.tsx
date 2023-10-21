import IconArrow from "./Icons/IconArrow";

function HomeHeader({ title }: { title: string }) {
  return (
    <div className="flex py-[20px] items-center justify-between w-full">
      <div className="px-4">
        <IconArrow width="24" />
      </div>
      <h3 className="text-2xl font-medium">{title}</h3>
      <div className="w-[30px]"></div>
    </div>
  );
}

export default HomeHeader;
