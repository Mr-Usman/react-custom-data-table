import { useMemo, useState } from "react";
import { Table, Input as FilterByName, Pagination } from "../../components";
import { useDataTable } from "../../hooks/useDataTable";
import { Column } from "../../types";

const columns: Array<Column> = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "Job", accessor: "job", sortable: true },
  { label: "Employed", accessor: "employed", sortable: true },
];

const noOfRowsPerPage = 5;
const pagesToShow = 5;

export const DataTable = () => {
  const { data } = useDataTable();
  const [activePage, setActivePage] = useState(1);

  const start = useMemo(() => (activePage - 1) * noOfRowsPerPage, [activePage]);
  const end = useMemo(() => start + noOfRowsPerPage, [start]);

  const activeDataRows = useMemo(
    () => data.slice(start, end),
    [data, end, start]
  );

  const totalPages = useMemo(
    () => Math.ceil(data.length / noOfRowsPerPage),
    [data]
  );

  const onPageChange = (page: number) => {
    setActivePage(page);
  };

  return (
    <>
      <FilterByName />
      <Table data={activeDataRows} columns={columns} />
      <Pagination
        activePage={activePage}
        onPageChange={onPageChange}
        totalPages={totalPages}
        pagesToShow={pagesToShow}
      />
    </>
  );
};
