import styled from "styled-components";
import { Color, Radius } from "../../../constants";

export const ModalHeader = styled.div<{ bgColor?: Color }>`
  border-radius: ${Radius.xs} ${Radius.xs} 0 0;
  border-bottom: 1px solid ${Color.BS_gray_300};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ bgColor }) => bgColor || Color.BS_white};
  align-items: center;
`;
