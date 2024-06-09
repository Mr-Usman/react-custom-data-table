import { FC, useMemo } from "react";
import { PaginationWrapper, PageButton } from "./styled";

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
  const startPage = useMemo(() => {
    const start = Math.floor((activePage - 1) / pagesToShow) * pagesToShow + 1;
    return start;
  }, [activePage, pagesToShow]);

  const endPage = useMemo(() => {
    const end = Math.min(startPage + pagesToShow - 1, totalPages);
    return end;
  }, [pagesToShow, startPage, totalPages]);

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
      <select onChange={(e) => console.log("event value:", e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
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
