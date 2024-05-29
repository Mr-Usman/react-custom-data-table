import { useMemo } from "react";
import { JSX, useState } from "react";
import { Table, Th, Td } from "./styled";

type Column = {
  label: string;
  accessor: string;
  sortable: boolean;
};

type TableData = {
  name: string;
  job: string;
  employed: string;
};

const columns: Array<Column> = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "Job", accessor: "job", sortable: true },
  { label: "Employed", accessor: "employed", sortable: true },
];

const data: Array<TableData> = [
  { name: "John Michael", job: "Manager", employed: "23/04/18" },
  { name: "Alexa Liras", job: "Developer", employed: "23/04/18" },
  { name: "Laurent Perrier", job: "Executive", employed: "19/09/17" },
  { name: "Michael Levi", job: "Developer", employed: "24/12/08" },
  { name: "Richard Gran", job: "Manager", employed: "04/10/21" },
];

export const DataTable = (): JSX.Element => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
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
  }, [sortConfig]);

  const onFieldSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig?.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <Table>
      <thead>
        <tr>
          {columns?.map((column) => (
            <Th
              key={column?.accessor}
              onClick={() =>
                column?.sortable ? onFieldSort(column.accessor) : null
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
    </Table>
  );
};
