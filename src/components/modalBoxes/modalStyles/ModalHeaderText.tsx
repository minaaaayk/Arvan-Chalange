import styled from "styled-components";
import { Color, FontWeight } from "../../../constants";

export const ModalHeaderText = styled.h2<{ textColor?: Color }>`
  color: ${({ textColor }) => textColor || Color.primary};
  align-self: center;
  font-size: 1em;
  font-weight: ${FontWeight.black};
`;
