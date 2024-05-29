import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th<{ sortable: boolean }>`
  padding: 8px;
  background: #f4f4f4;
  cursor: ${({ sortable }) => (sortable ? "pointer" : "default")};
  &:hover {
    background: ${({ sortable }) => (sortable ? "#e2e2e2" : "#f4f4f4")};
  }
`;

export const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;
