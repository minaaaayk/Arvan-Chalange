import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Color } from "../../constants";
import { ModalBox } from "./ModalBox";

interface IProps {
  onClose: () => void;
  onAccept: () => void;
}

export const DeletePostModal: React.FC<IProps> = ({ onClose, onAccept }) => (
  <ModalBox
    onClose={onClose}
    headerText="Delete Article"
    footer={
      <FlexWrapper justifyContent="flex-end" gap="0 1rem">
        <Button variant="outline-secondary" onClick={onClose}>
          NO
        </Button>
        <Button variant="danger" onClick={onAccept}>
          Yes
        </Button>
      </FlexWrapper>
    }
  >
    <Paragraph>Are you sure to delete Article?</Paragraph>
  </ModalBox>
);

const Paragraph = styled(FlexWrapper)`
  color: ${Color.BS_gray_800};
`;
