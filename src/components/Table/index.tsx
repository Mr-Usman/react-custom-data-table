import { FC, useMemo } from "react";
import { Table as Tab, Th, Td } from "./styled";
import { Column, TableData } from "../../types";
import { useDataTable } from "../../hooks/useDataTable";

export const Table: FC<{ columns: Column[]; data: TableData[] }> = ({
  columns,
  data,
}) => {
  const { onColumnFieldSort, sortConfig, filterText } = useDataTable();

  const filteredRows = useMemo(() => {
    if (!filterText) return data;
    return data.filter((row) => {
      return Object.values(row).some((cell) =>
        String(cell).toLowerCase().includes(filterText.toLowerCase())
      );
    });
  }, [data, filterText]);

  const sortedData = useMemo(() => {
    let sortableItems = [...filteredRows];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const key = sortConfig?.key as keyof TableData;
        if (a[key] < b[key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredRows, sortConfig]);

  return (
    <Tab>
      <thead>
        <tr>
          {columns?.map((column) => (
            <Th
              key={column?.accessor}
              onClick={() =>
                column?.sortable ? onColumnFieldSort(column.accessor) : null
              }
              sortable={column?.sortable}
            >
              {column?.label}
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            <Td>{row.name}</Td>
            <Td>{row.job}</Td>
            <Td>{row.employed}</Td>
          </tr>
        ))}
      </tbody>
    </Tab>
  );
};
