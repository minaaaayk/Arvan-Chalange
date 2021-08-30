import styled from "styled-components";
import { Color } from "../../constants";

export const SideBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 1.25rem;
  margin: 0.5rem 0;
  color: ${Color.BS_white};
  font-size: 1.5em;
`;
