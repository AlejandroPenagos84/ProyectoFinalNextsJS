import React from "react";
import ThComponent from "./ThComponent"; // Asegúrate de importar ThComponent desde su ubicación correcta
import TdComponent from "./TdComponent"; // Asegúrate de importar ThComponent desde su ubicación correcta


interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({children}) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <ThComponent text="Nombre Del Producto" />
          <ThComponent text="Categoria " />
          <ThComponent text="Precio" />
          <ThComponent text="Rating" />
          <ThComponent text="Stock" />
          <ThComponent text="Ver Producto" />
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

export default Table;
