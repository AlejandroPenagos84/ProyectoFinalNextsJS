import React from "react";

interface ThProps {
  text: string;
}

const ThComponent: React.FC<ThProps> = ({ text }) => {
  return <th className="p-3 text-sm font-semibold tracking-wide text-left bg-white">{text}</th>;
};

export default ThComponent;
