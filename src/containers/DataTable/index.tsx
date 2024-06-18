import { useEffect, useMemo, useState } from "react";
import { Table, Input as FilterByName, Pagination } from "../../components";
import { useDataTable } from "../../hooks/useDataTable";
import { Column } from "../../types";

const columns: Array<Column> = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "Job", accessor: "job", sortable: true },
  { label: "Employed", accessor: "employed", sortable: true },
];

const pagesToShow = 5;

export const DataTable = () => {
  const {
    data,
    filterText,
    filteredData,
    setFilteredData,
    numberOfRowsPerPage,
  } = useDataTable();
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setFilteredData(
      data.filter(({ name }) => {
        return name.toLowerCase().includes(filterText.toLowerCase());
      })
    );
  }, [data, filterText, setFilteredData]);

  useEffect(() => {
    setActivePage(1);
  }, [filterText, numberOfRowsPerPage]);

  const start = useMemo(
    () => (activePage - 1) * numberOfRowsPerPage,
    [activePage, numberOfRowsPerPage]
  );
  const end = useMemo(
    () => start + numberOfRowsPerPage,
    [start, numberOfRowsPerPage]
  );

  const activeDataRows = useMemo(
    () => filteredData.slice(start, end),
    [filteredData, end, start]
  );

  const totalPages = useMemo(
    () => Math.ceil(filteredData.length / numberOfRowsPerPage),
    [filteredData, numberOfRowsPerPage]
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
