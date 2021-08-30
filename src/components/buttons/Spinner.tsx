import styled from "styled-components";
import { Color } from "../../constants";

export const Spinner = styled.div<{ width?: string; color?: Color }>`
  width: ${({ width }) => width || "5rem"};
  height: ${({ width }) => width || "5rem"};
  border-radius: 50%;
  border: ${({ width }) => `calc(${width}/8)` || "10px"} solid ${Color.white};
  border-top-color: ${({ color }) => color || Color.red};
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
