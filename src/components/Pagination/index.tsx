import { FC, useMemo } from "react";
import { PaginationWrapper, PageButton } from "./styled";
import { useDataTable } from "../../hooks/useDataTable";

type PaginationProps = {
  activePage: number;
  totalPages: number;
  pagesToShow: number;
  onPageChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  activePage,
  totalPages,
  onPageChange,
  pagesToShow,
}) => {
  const { setNumberOfRowsPerPage } = useDataTable();
  const currentBlock = Math.ceil(activePage / pagesToShow);

  const startPage = (currentBlock - 1) * pagesToShow + 1;
  const endPage = Math.min(currentBlock * pagesToShow, totalPages);

  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [startPage, endPage]);

  return (
    // TODO: make into separate component
    <>
      <select onChange={(e) => setNumberOfRowsPerPage(+e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>

      <PaginationWrapper>
        <button
          disabled={activePage === 1}
          onClick={() => {
            if (activePage > 1) {
              onPageChange(activePage - 1);
            }
          }}
        >
          Previous
        </button>
        {pageNumbers.map((page) => (
          <PageButton
            style={{
              backgroundColor: activePage === page ? "red" : "#f1f1f1",
            }}
            onClick={() => onPageChange(page)}
            key={page}
          >
            {page}
          </PageButton>
        ))}
        <button
          disabled={activePage === totalPages}
          onClick={() => {
            if (activePage < totalPages) {
              onPageChange(activePage + 1);
            }
          }}
        >
          Next
        </button>
      </PaginationWrapper>
    </>
  );
};
