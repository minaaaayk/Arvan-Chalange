import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { Routes } from "../routers/Routes";
import { Header } from "./header/Header";
import { SideBar } from "./sideBar/SideBar";

export const DashBoard: React.FC = () => (
  <Page>
    <Header />
    <Wrapper>
      <SideBar />
      <Routes />
    </Wrapper>
  </Page>
);

const Page = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

const Wrapper = styled(Row)`
  min-height: 100vh;
  max-width: 100%;
`;
