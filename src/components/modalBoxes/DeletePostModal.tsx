import { FlexWrapper } from "components/wrappers/FlexWrapper";
import React from "react";
import { Button } from "react-bootstrap";
import { Color } from "../../constants";
import { ModalBox } from "./ModalBox";

interface IProps {
  onClose: () => void;
  onAccept: () => void;
}

export const DeletePostModal: React.FC<IProps> = ({ onClose, onAccept }) => {
  return (
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
      <FlexWrapper style={{ color: Color.BS_gray_800 }}>
        Are you sure to delete Article?
      </FlexWrapper>
    </ModalBox>
  );
};
