const ContentBoxHeader = ({ title, icon }) => (
  <div className="flex w-full">
    <div className="pe-2">{icon}</div>
    <h3 className="text-xl font-medium">{title}</h3>
  </div>
);

export default ContentBoxHeader;
