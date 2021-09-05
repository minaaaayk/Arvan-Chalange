import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Path } from "../../constants";
import { useAuthStore } from "../../store/AuthStore";
import { HeaderWrapper, LogoutButton, UserName } from "./HeaderStyles";

export const Header: React.FC = () => {
  const { logout, data: user } = useAuthStore();
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <HeaderWrapper>
        <Nav>
          <Navbar.Brand>Arvan Challenge</Navbar.Brand>
          <UserName>Welcome {user?.username}</UserName>
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
