import { FC } from "react";
import { PaginationWrapper, PageButton } from "./styled";

type PaginationProps = {
  rowsPerPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  rowsPerPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <PaginationWrapper>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton onClick={() => onPageChange(index + 1)} key={index}>
          {index + 1}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};
