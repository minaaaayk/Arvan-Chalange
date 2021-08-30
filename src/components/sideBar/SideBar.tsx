import React from "react";
import { Col } from "react-bootstrap";
import { pages } from "../../data/Pages";
import { SideBarWrapper } from "../wrappers/SideBarWrapper";
import { AccordionComponent } from "./AccordionComponent";

export const SideBar: React.FC = () => {
  return (
    <Col
      style={{
        maxWidth: "250px",
      }}
    >
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
    </Col>
  );
};
