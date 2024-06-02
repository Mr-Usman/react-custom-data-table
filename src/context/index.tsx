import React, {
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import { TableData } from "../types";

type SortConfig = { key: string; direction: string };

export interface DataContextType {
  data: Array<object>;
  setData: Dispatch<SetStateAction<Array<TableData>>>;
  onColumnFieldSort: (key: string) => void;
  sortConfig: SortConfig | null;
  setSortConfig: Dispatch<SetStateAction<SortConfig | null>>;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Array<TableData>>([
    { name: "John Michael", job: "Manager", employed: "23/04/18" },
  ]);

  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  const onColumnFieldSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <DataContext.Provider
      value={{ data, setData, onColumnFieldSort, sortConfig, setSortConfig }}
    >
      {children}
    </DataContext.Provider>
  );
};
