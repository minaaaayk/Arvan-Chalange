import styled from "styled-components";
import { Color } from "../../constants";

export const Error = styled.p<{ isMessage?: boolean }>`
  color: ${Color.BS_red};
  padding: 0;
  margin: 0;
  margin-top: ${({ isMessage }) => isMessage && "10px"};
`;
