import { Col } from "react-bootstrap";
import styled from "styled-components";
import { Color } from "../../constants";

export const SideBarWrapper = styled(Col)`
  display: flex;
  flex-direction: column;

  min-height: 100%;
  width: 100%;

  max-width: 250px;

  overflow: auto;
  background-color: ${Color.BS_blue};
`;
