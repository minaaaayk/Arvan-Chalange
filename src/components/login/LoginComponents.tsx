import { Form } from "react-bootstrap";
import styled from "styled-components";
import { Color } from "../../constants";
import { CenterWrapper } from "../wrappers/CenterWrapper";

export const LoginForm = styled(Form)`
  background-color: ${Color.BS_gray_200};
  width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 35px 1.25rem 1.25rem 1.25rem;
`;

export const LoginTitle = styled(CenterWrapper)`
  width: 100%;
  font-size: 3em;
  margin-bottom: 2rem;
  color: ${Color.BS_gray_600};
`;

export const LoginRow = styled(CenterWrapper)`
  width: 100%;
  flex-direction: column;
  gap: 1rem 0;
`;
