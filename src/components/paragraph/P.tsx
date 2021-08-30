import styled from "styled-components";
import { Color } from "../../constants";

export const P = styled.span<{ color?: string; fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};

  color: ${({ color }) => color || Color.BS_gray_800};

  margin: 0 0.25rem;
`;
