import { useContext } from "react";
import { DataContext, DataContextType } from "../context";

export const useDataTable = (): DataContextType => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useDataTable must be used within a DataProvider");
  }

  return context;
};
