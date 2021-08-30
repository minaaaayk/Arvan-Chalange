import styled from "styled-components";
import { Color } from "../../constants";

export const TBody = styled.tbody`
  width: 100%;
`;

export const RowItem = styled.tr`
  width: 100%;
  height: 50px;

  padding: 1rem;

  vertical-align: top;

  &.expanded {
    & > td {
      white-space: normal;
    }
  }
`;

export const ColumnItem = styled.td<{
  borderLeft?: boolean;
  borderRight?: boolean;
}>`
  font-size: 14px;
  border-bottom: 1px solid ${Color.border};

  border-left: ${({ borderLeft }) =>
    borderLeft && ` 1px solid ${Color.border}`};

  border-right: ${({ borderRight }) =>
    borderRight && ` 1px solid ${Color.border}`};

  padding: 21px 0.5rem;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  text-align: left;
  max-width: 10rem;

  span {
    margin-left: 0.5rem;
  }
`;
