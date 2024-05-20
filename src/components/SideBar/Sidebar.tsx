// SideBar.tsx
import React, { ReactNode } from 'react';

interface SideBarProps {
  children?: ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <button 
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            Menu
          </button>
        </div>
        <ul className="flex-1 px-3">
          {children}
        </ul>
        <div className="border-t flex p-3">
          <div className="flex justify-between items-center w-52 ml-3">
            <div className="leading-4">
              <h4 className="font-semibold">Alejandro Penagos</h4>
              <span className="text-xs text-gray-600"></span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
