import { Button, Container, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Color } from "../../constants";

export const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-left: 0;
  margin-right: 0;
  min-width: 100%;
  padding: 0.5rem 1.25rem;
`;

export const LogoutButton = styled(Button)`
  color: ${Color.BS_cyan};
  border-color: ${Color.BS_cyan};
`;

export const UserName = styled(Navbar.Brand)`
  font-size: 1em;
  align-items: center;
  display: flex;
`;
