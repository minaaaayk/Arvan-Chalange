import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { ITableHeader } from "../../@types";
import { Color } from "../../constants";
import { FlexWrapper } from "../wrappers/FlexWrapper";
import { TBody } from "./TableComponents";

interface IProps {
  tableHeader: ITableHeader[];
  TableBody?: React.FC;
}

// TODO: make more responsive
export const TableMainContent: React.FC<IProps> = ({
  tableHeader,
  TableBody,
  children,
}) => (
  <MainContainer responsive="sm">
    <Header>
      <HeaderRow>
        {tableHeader.map(({ title }, index) => (
          <HeaderItem key={index}>
            <FlexWrapper>{title}</FlexWrapper>
          </HeaderItem>
        ))}
      </HeaderRow>
    </Header>

    {/* FIXME we don't need `TableBody` anymore. it should be handled using children */}
    <TBody>{children || (TableBody && <TableBody />)}</TBody>
  </MainContainer>
);

const MainContainer = styled(Table)`
  width: 100%;
  margin-top: 1.5rem;
  border-spacing: 0;
  text-align: right;
  vertical-align: center;

  tbody,
  td,
  tfoot,
  th,
  thead,
  tr {
    vertical-align: baseline;
  }
`;

const Header = styled.thead`
  background-color: ${Color.BS_gray_200};
`;

const HeaderRow = styled.tr`
  height: 40px;
  & > th:last-child > div {
    display: flex;
    justify-content: flex-end;
    padding-right: 1.75rem;
  }
`;

const HeaderItem = styled.th`
  font-size: 1em;
  padding: 10px 0.5rem;
  margin: 0;

  border: none;
  color: ${Color.BS_gray_700};
`;
