import React from "react";
import { Spinner } from "../buttons/Spinner";
import { FlexWrapper } from "../wrappers/FlexWrapper";

export const Loading: React.FC = () => {
  return (
    <FlexWrapper justifyContent="center">
      <Spinner width="2rem" />
    </FlexWrapper>
  );
};
