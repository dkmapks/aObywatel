import { ReactNode } from "react";
import ContentBoxHeader from "./ContentBoxHeader";

const ContentBox = ({
  title,
  icon,
  description,
  children,
}: {
  title: string;
  icon: unknown;
  children?: ReactNode;
  description?: string;
}) => (
  <div className="bg-white shadow-lg rounded-2xl justify-center px-4 py-2 w-full">
    <ContentBoxHeader title={title} icon={icon} />
    {description ? <p className="p-2">{description}</p> : null}
    {children}
  </div>
);

export default ContentBox;
