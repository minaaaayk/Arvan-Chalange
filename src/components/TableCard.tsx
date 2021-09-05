import React from "react";
import { TableAlert } from "./tableComponents/TableAlert";
import { TableFooter } from "./tableComponents/TableFooter";
import { TableTitle } from "./tableComponents/TableTitle";
import { FlexWrapper } from "./wrappers/FlexWrapper";

interface IProps {
  title: string;
  total?: number;
  offset?: number;
  message?: string;
}

export const TableCard: React.FC<IProps> = ({
  children,
  title,
  message,
  offset,
  total,
}) => {
  return (
    <FlexWrapper flexDirection="column">
      <FlexWrapper justifyContent="space-between">
        <FlexWrapper alignItems="center">
          <TableTitle>{title}</TableTitle>
        </FlexWrapper>

        {message && (
          <TableAlert variant="success">
            <strong>Well done!</strong>
            {message}
          </TableAlert>
        )}
      </FlexWrapper>

      {children}

      <TableFooter current_page={offset || 1} pages={total ? total / 10 : 1} />
    </FlexWrapper>
  );
};
