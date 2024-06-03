import { TextInput } from "./styled";
import { useDataTable } from "../../hooks/useDataTable";
import { useDebounce } from "../../hooks/useDebounce";
import { ChangeEvent, useEffect } from "react";

export const Input = () => {
  const { filterText, setFilterText } = useDataTable();
  const debouncedFilterText = useDebounce(filterText, 1000);

  const onFilterTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e?.target?.value);
  };

  useEffect(() => {
    setFilterText(debouncedFilterText);
  }, [debouncedFilterText, setFilterText]);

  return (
    <TextInput
      type="text"
      name="filterText"
      value={filterText}
      onChange={onFilterTextChange}
    />
  );
};
