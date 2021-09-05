import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { Color } from "../../constants";
import { ColumnItem } from "../tableComponents/TableComponents";

export const CustomDropdown = styled(Dropdown)`
  & > .dropdown-toggle,
  &.show > .btn-info.dropdown-toggle {
    color: ${Color.BS_white};
  }

  & > .dropdown-menu.show {
    transform: translate(-110px, 40px) !important;
  }
`;

export const BodyColumn = styled(ColumnItem)`
  min-width: 20rem;
`;

export const ActionColumn = styled(ColumnItem)`
  padding: 0 0.5rem;
  overflow: inherit;
  max-width: 7.5rem;
`;
