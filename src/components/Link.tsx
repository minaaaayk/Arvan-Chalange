import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../constants";

export const CLink = styled(Link)`
  text-decoration: none;
  color: ${Color.darkGray};
  font-size: 1rem;

  :hover {
    text-decoration: underline;
  }
`;
