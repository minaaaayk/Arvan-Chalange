import React from "react";
import styled from "styled-components";
import { IPagination, Pagination } from "./Pagination";

export const TableFooter: React.FC<IPagination> = (props) => {
  return (
    <Wrapper>
      <Pagination {...props} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.75rem;
  width: 100%;
`;
