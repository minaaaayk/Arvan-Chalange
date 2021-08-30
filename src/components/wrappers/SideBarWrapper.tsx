import styled from "styled-components";
import { Color } from "../../constants";

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  overflow: auto;
  background-color: ${Color.BS_blue};
`;
