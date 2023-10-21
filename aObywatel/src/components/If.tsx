import React, { ReactNode } from "react";

interface IfProps {
  condition: boolean;
  children: ReactNode;
  else?: ReactNode;
}

const If: React.FC<IfProps> = ({ condition, else: elseBlock, children }) => {
  return condition ? <>{children}</> : <>{elseBlock}</>;
};

export default If;
