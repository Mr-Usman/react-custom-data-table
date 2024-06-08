import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const PageButton = styled.button`
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  color: #333;
  cursor: pointer;
  margin: 0 0.25rem;
  padding: 0.5rem 0.75rem;

  &:hover {
    background-color: #e1e1e1;
  }
`;
