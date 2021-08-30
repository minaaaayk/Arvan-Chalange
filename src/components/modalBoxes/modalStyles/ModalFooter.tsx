import styled from "styled-components";
import { Color, Radius } from "../../../constants";

export const ModalFooter = styled.div<{ bgColor?: Color }>`
  border-radius: 0 0 ${Radius.xs} ${Radius.xs};
  border-top: 1px solid ${Color.BS_gray_300};
  width: 100%;
  padding: 1rem;
  background-color: ${({ bgColor }) => bgColor || Color.white};
  align-items: center;
`;
