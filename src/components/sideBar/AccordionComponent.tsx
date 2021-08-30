import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { IPage } from "../../@types";
import { Color } from "../../constants";
import { CLink } from "../Link";
import { SideBarItem } from "./SideBarItem";

export const AccordionComponent: React.FC<IPage> = ({ accordion, title }) => {
  const { pathname } = useLocation();
  return (
    <>
      <SideBarItem key={title}>{title}</SideBarItem>
      {accordion && (
        <Accordion>
          {accordion.map(({ title, path }, id) => (
            <AccordionItem
              className="child"
              key={id}
              isActive={path === pathname || pathname.includes(`${path}/page/`)}
              to={path}
            >
              {title}
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </>
  );
};

export const Accordion = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const AccordionItem = styled(CLink)<{ isActive: boolean }>`
  padding: 0.75rem 0 0.75rem 2rem;
  font-size: 1em;

  color: ${Color.BS_white};
  background-color: ${({ isActive }) => isActive && Color.BS_BlurItem};

  :hover {
    background-color: ${Color.BS_BlurItem};
    color: ${Color.BS_gray_200};
    text-decoration: none;
  }
`;
