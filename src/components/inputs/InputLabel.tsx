import React, { ElementType, InputHTMLAttributes } from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { Error } from "./Error";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label: string;
  //TODO Fix `name` require
  name: string;
  readOnly?: boolean;
  as?: ElementType;
  rows?: number;
}

export const InputLabel: React.FC<IInput> = ({
  value,
  label,
  name,
  type = "text",
  defaultValue,
  readOnly,
  onKeyDown,
  as,
  rows,
  placeholder = "",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormGroup controlId={name}>
      <Form.Label>
        {errors && errors[name] ? <Error>{label}</Error> : `${label}`}
      </Form.Label>
      <Form.Control
        required
        type={type}
        value={value}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue}
        readOnly={readOnly}
        onKeyDown={onKeyDown}
        isInvalid={errors[name]}
        as={as}
        rows={rows}
      />
      <Error isMessage>
        {errors && errors[name] ? errors[name].message : ""}
      </Error>
    </FormGroup>
  );
};

const FormGroup = styled(Form.Group)`
  width: 100%;
`;
