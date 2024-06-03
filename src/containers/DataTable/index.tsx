import { Table, Input as FilterByName, Pagination } from "../../components";
import { Column, TableData } from "../../types";

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

export const DataTable = () => {
  return (
    <>
      <FilterByName />
      <Table data={data} columns={columns} />
      <Pagination />
    </>
  );
};
