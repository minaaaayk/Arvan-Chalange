import React from "react";
import { Loading } from "../tableComponents/Loading";

export const Parsing: React.FC<{ isLoading: boolean }> = ({
  isLoading,
  children,
}) => {
  return <>{isLoading ? <Loading /> : children}</>;
};
