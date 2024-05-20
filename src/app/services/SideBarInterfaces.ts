import React from "react";

export interface SideBarItemProps {
    text: string,
    path:string;
  }
  
  export interface SideBarItemPropsReactNode extends SideBarItemProps {
    children?: React.ReactNode;
  }