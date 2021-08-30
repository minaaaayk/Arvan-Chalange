import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterParams } from "../@types";
import { Spinner } from "../components/buttons/Spinner";
import { InputLabel } from "../components/inputs/InputLabel";
import { LoginButton } from "../components/login/LoginButton";
import {
  LoginForm,
  LoginRow,
  LoginTitle,
} from "../components/login/LoginComponents";
import { P } from "../components/paragraph/P";
import { FlexWrapper } from "../components/wrappers/FlexWrapper";
import { LoginWrapper } from "../components/wrappers/LoginWrapper";
import { Path } from "../constants/Path";
import { useAuthStore } from "../store";
import { registerValidation } from "../validations";

export const Register: React.FC = () => {
  const { register, isLogin, isLoading } = useAuthStore();
  const history = useHistory();
  const methods = useForm<RegisterParams>({
    resolver: yupResolver(registerValidation),
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    register(data, {
      onSuccess: (message: string) => {
        toast.success(message);
        history.push(Path.articles);
      },
      onFailed: (message: string) => {
        toast.error(message);
      },
    });
  });

  return (
    <>
      {isLogin() ? (
        <Redirect to={Path.articles} />
      ) : (
        <LoginWrapper>
          <FormProvider {...methods}>
            <LoginForm noValidate onSubmit={onSubmit}>
              <LoginRow>
                <LoginTitle>Register</LoginTitle>
                <InputLabel label="User" name="username" />
                <InputLabel label="Email" name="email" />
                <InputLabel label="Password" name="password" />
              </LoginRow>
              <LoginRow>
                {isLoading ? (
                  <Spinner width="2rem" />
                ) : (
                  <LoginButton type="submit">Register</LoginButton>
                )}
              </LoginRow>
              <FlexWrapper>
                <P>Already Registered?</P>
                <P style={{ fontWeight: "bold" }}>
                  <a href={Path.login}>Login</a>
                </P>
              </FlexWrapper>
            </LoginForm>
          </FormProvider>
        </LoginWrapper>
      )}
    </>
  );
};
