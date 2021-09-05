import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginParams } from "../@types";
import { Spinner } from "../components/buttons/Spinner";
import { InputLabel } from "../components/inputs/InputLabel";
import { LoginButton } from "../components/login/LoginButton";
import {
  LoginForm,
  LoginRow,
  LoginTitle,
} from "../components/login/LoginComponents";
import { BoldP, P } from "../components/paragraph/P";
import { FlexWrapper } from "../components/wrappers/FlexWrapper";
import { LoginWrapper } from "../components/wrappers/LoginWrapper";
import { Path } from "../constants/Path";
import { useAuthStore } from "../store";
import { loginValidation } from "../validations";

export const Login: React.FC = () => {
  const { login, isLogin, isLoading } = useAuthStore();
  const history = useHistory();
  const methods = useForm<LoginParams>({
    resolver: yupResolver(loginValidation),
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await login(data, {
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
                <LoginTitle>LOGIN</LoginTitle>
                <InputLabel label="Email" name="email" />
                <InputLabel label="Password" name="password" type="password" />
              </LoginRow>
              <LoginRow>
                {isLoading ? (
                  <Spinner width="2rem" />
                ) : (
                  <LoginButton type="submit">Login</LoginButton>
                )}
              </LoginRow>

              <FlexWrapper>
                <P>Don’t have account?</P>
                <BoldP>
                  <a href={Path.register}>Register Now</a>
                </BoldP>
              </FlexWrapper>
            </LoginForm>
          </FormProvider>
        </LoginWrapper>
      )}
    </>
  );
};
