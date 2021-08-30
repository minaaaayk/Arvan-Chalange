import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Color, Path } from "../../constants";
import { useAuthStore } from "../../store/AuthStore";

export const Header: React.FC = () => {
  const { logout, data: user } = useAuthStore();
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <HeaderWrapper>
        <Nav>
          <Navbar.Brand>Arvan Challenge</Navbar.Brand>
          <UserName style={{ fontSize: "1em" }}>
            Welcome {user?.username}
          </UserName>
        </Nav>
        <Nav className="justify-content-end">
          <LogoutButton
            variant="dark"
            onClick={() => {
              logout();
              history.push(Path.login);
            }}
          >
            logOut
          </LogoutButton>
        </Nav>
      </HeaderWrapper>
    </Navbar>
  );
};

const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-left: 0;
  margin-right: 0;
  min-width: 100%;
  padding: 0.5rem 1.25rem;
`;

const LogoutButton = styled(Button)`
  color: ${Color.BS_cyan};
  border-color: ${Color.BS_cyan};
`;

const UserName = styled(Navbar.Brand)`
  font-size: 1em;
  align-items: center;
  display: flex;
`;
