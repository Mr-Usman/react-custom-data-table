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
  data: Array<TableData>;
  setData: Dispatch<SetStateAction<Array<TableData>>>;
  onColumnFieldSort: (key: string) => void;
  sortConfig: SortConfig | null;
  setSortConfig: Dispatch<SetStateAction<SortConfig | null>>;
  filterText: string;
  setFilterText: Dispatch<SetStateAction<string>>;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Array<TableData>>([
    { name: "John Michael", job: "Manager", employed: "23/04/18" },
    { name: "Alexa Liras", job: "Developer", employed: "23/04/18" },
    { name: "Laurent Perrier", job: "Executive", employed: "19/09/17" },
    { name: "Michael Levi", job: "Developer", employed: "24/12/08" },
    { name: "Richard Gran", job: "Manager", employed: "04/10/21" },
    { name: "Usman", job: "Manager", employed: "23/04/18" },
    { name: "Ali", job: "Developer", employed: "23/04/18" },
    { name: "Hamza", job: "Executive", employed: "19/09/17" },
    { name: "Muneeb", job: "Developer", employed: "24/12/08" },
    { name: "Ovais", job: "Manager", employed: "04/10/21" },
    { name: "Alex", job: "Manager", employed: "23/04/18" },
    { name: "Maurice", job: "Developer", employed: "23/04/18" },
    { name: "Antoine", job: "Executive", employed: "19/09/17" },
    { name: "John", job: "Developer", employed: "24/12/08" },
    { name: "Chris", job: "Manager", employed: "04/10/21" },
    { name: "Martin", job: "Executive", employed: "19/09/17" },
    { name: "Huhoo", job: "Developer", employed: "24/12/08" },
    { name: "Fuchs", job: "Manager", employed: "04/10/21" },
    { name: "Mehmood", job: "Manager", employed: "04/10/21" },
    { name: "Jakob", job: "Executive", employed: "19/09/17" },
    { name: "Kruz", job: "Developer", employed: "24/12/08" },
    { name: "Zwei", job: "Manager", employed: "04/10/21" },
  ]);

  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [filterText, setFilterText] = useState<string>("");

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
      value={{
        data,
        setData,
        onColumnFieldSort,
        sortConfig,
        setSortConfig,
        filterText,
        setFilterText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
