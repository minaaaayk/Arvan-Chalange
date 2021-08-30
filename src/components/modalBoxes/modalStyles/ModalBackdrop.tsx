import styled from "styled-components";
import { Color } from "../../../constants";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  background: ${Color.BackgroundBlur};

  display: flex;
  justify-content: center;
  align-items: center;
`;
