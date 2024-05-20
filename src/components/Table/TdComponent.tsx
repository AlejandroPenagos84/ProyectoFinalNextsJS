import React, { ReactNode } from "react";

interface TdProps {
  content: ReactNode;
}

const TdComponent: React.FC<TdProps> = ({ content }) => {
  return <td className="p-3 text-lg text-gray-700">{content}</td>;
};

export default TdComponent;
