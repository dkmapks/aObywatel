import IconArrow from "./IconArrow";

function HomeHeader() {
    return <div className="flex py-[20px] items-center justify-between">
        <div className="px-4">
            <IconArrow width="24" />
        </div>
        <h3 className="text-2xl font-medium">Petycje</h3>
        <div className="w-[30px]"></div>
    </div>;
}

export default HomeHeader;

