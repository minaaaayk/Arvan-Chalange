import React, { useCallback, useEffect, useRef } from "react";
import { IModalProps, ModalSize } from "../../@types";
import { Color } from "../../constants";
import { CloseIcon } from "./modalStyles/CloseIcon";
import { ModalBackdrop } from "./modalStyles/ModalBackdrop";
import { ModalContent } from "./modalStyles/ModalContent";
import { ModalFooter } from "./modalStyles/ModalFooter";
import { ModalHeader } from "./modalStyles/ModalHeader";
import { ModalHeaderText } from "./modalStyles/ModalHeaderText";
import { ModalWrapper } from "./modalStyles/ModalWrapper";

interface IProps extends IModalProps {
  modalSize?: ModalSize;
}

/**
 * @alpha need to improve styling
 * @param onClose - (function) for hiding function
 * @param headerText - (string) for header of moda
 * @param footer - (component) for footer of modal
 */

export const ModalBox: React.FC<IProps> = ({
  onClose,
  headerText,
  modalSize = ModalSize.m,
  children,
  footer,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handelClick = useCallback(
    (e: any) => {
      if (ref && ref.current && ref.current.contains(e.target)) {
        return;
      }
      onClose();
      document.body.style.overflow = "auto";
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handelClick);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("mousedown", handelClick);
    };
  }, [handelClick]);

  return (
    <ModalBackdrop>
      <ModalWrapper width={modalSize} ref={ref}>
        <ModalHeader>
          <ModalHeaderText>{headerText}</ModalHeaderText>
          <CloseIcon
            fill={Color.BS_gray_600}
            onClick={onClose}
            width="1rem"
            height="1rem"
          ></CloseIcon>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>{footer}</ModalFooter>
      </ModalWrapper>
    </ModalBackdrop>
  );
};
