import React from "react";
import { pages } from "../../data/Pages";
import { SideBarWrapper } from "../wrappers/SideBarWrapper";
import { AccordionComponent } from "./AccordionComponent";

export const SideBar: React.FC = () => (
  <SideBarWrapper>
    {pages.map(({ title, accordion }, index) => {
      return (
        <>
          {accordion && (
            <AccordionComponent
              title={title}
              accordion={accordion}
              key={index}
            />
          )}
        </>
      );
    })}
  </SideBarWrapper>
);
