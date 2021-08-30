import React from "react";
import { Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { pages } from "../data/Pages";

export const Routes: React.FC = () => {
  return (
    <Col style={{ padding: "2rem 1.25rem" }}>
      {pages.map(({ path, accordion, component, innerPages }) => (
        <Switch>
          {component && path && (
            <Route exact path={path} component={component} />
          )}

          {accordion?.map(({ path, component }) => (
            <Route exact path={path} component={component} />
          ))}

          {accordion?.map(({ innerPages }) =>
            innerPages?.map(({ component, path }) => (
              <Route path={path} component={component} />
            ))
          )}
        </Switch>
      ))}
    </Col>
  );
};
