'use client'
import React, { useState } from 'react';
import { SideBarItemPropsReactNode } from "@/app/services/SideBarInterfaces";
import { useRouter } from "next/navigation";

export const SideBarItem: React.FC<SideBarItemPropsReactNode> = ({
  text,
  path
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const route = useRouter();
  return (
    <li 
      className={
        `relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors
        ${
          hovered
          ? "bg-gradient-to-tr from-indigo-400 to-indigo-600 text-white"
          : "hover:bg-indigo-50 text-gray-600"
        }`
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={()=> route.push(path)}
    >
      <span className="w-52 ml-3">{text}</span>
    </li>
  );
};
