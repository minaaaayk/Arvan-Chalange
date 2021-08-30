import styled from "styled-components";
import { ModalSize } from "../../../@types";
import { Radius } from "../../../constants";

export const ModalWrapper = styled.div<{ width: ModalSize }>`
  display: flex;
  flex-direction: column;

  border-radius: ${Radius.m};

  width: ${({ width }) => width || "auto"};

  position: absolute;
  top: 0;
  z-index: 700;
  outline: 0;

  padding: 4rem 0;
`;
