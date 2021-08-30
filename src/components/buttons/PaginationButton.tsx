import styled from "styled-components";
import { Color } from "../../constants/Color";

export const PaginationButton = styled.button<{
  isActive?: boolean;
  first?: boolean;
  last?: boolean;
}>`
  width: 2.5rem;
  height: 2.5rem;

  padding: 0 0.5rem;

  border: solid 1px ${Color.BS_gray_200};
  border: ${({ isActive }) => isActive && "none"};

  border-radius: ${({ first, last }) =>
    first ? "0.25rem 0 0 0.25rem" : last ? "0  0.25rem 0.25rem 0" : 0};

  color: ${({ isActive }) => (isActive ? Color.BS_white : Color.BS_gray_700)};
  background-color: ${({ isActive }) =>
    isActive ? Color.BS_primary : Color.BS_white};

  cursor: pointer;
`;
