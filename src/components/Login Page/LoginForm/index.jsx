import React, { useState } from "react";
import {
  LoginFormSec,
  LoginFormWrap,
  LoginFormF,
  LoginFormInner,
  FormContent,
  FormTitle,
  FieldSet,
  FieldSetInner,
  InputArea,
  InputLabel,
  InputFormField,
  Input,
  InputOverlay,
  LoginBtnWrap,
  LoginBtn,
  TextOr,
  ToggleBtn,
  ForgetWrap,
  ForgetWrapInner,
  ForgetBtn,
} from "./style";

const LoginForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPassFocused, setIsPassFocused] = useState(false);
  const [email, setEmail] = useState("");       // ✅ add this
  const [password, setPassword] = useState("");

  return (
    <LoginFormSec>
      <LoginFormWrap>
        <LoginFormF>
          <LoginFormInner>
            <FormContent>
              <FormTitle>
                <h1>Sign In</h1>
              </FormTitle>
            </FormContent>
            <FieldSet>
              <FieldSetInner>
                <InputArea className={isFocused || email ? "focused" : ""}>
                  <InputLabel>Email or mobile number</InputLabel>
                  <InputFormField>
                    <Input
                      type="text"
                      autoComplete="email"
                      dir="ltr"
                      id="email"
                      data-uia="field-userLoginId"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                    <InputOverlay></InputOverlay>
                  </InputFormField>
                </InputArea>
              </FieldSetInner>
            </FieldSet>
            <FieldSet>
              <FieldSetInner>
                <InputArea
                  className={isPassFocused || password ? "focused" : ""}
                >
                  <InputLabel>Password</InputLabel>
                  <InputFormField>
                    <Input
                      type="password"
                      autoComplete="password"
                      dir="ltr"
                      id="password:"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setIsPassFocused(true)}
                      onBlur={() => setIsPassFocused(false)}
                    />
                    <InputOverlay></InputOverlay>
                  </InputFormField>
                </InputArea>
              </FieldSetInner>
              <LoginBtnWrap>
                <LoginBtn>Sign In</LoginBtn>
              </LoginBtnWrap>
            </FieldSet>
            <FieldSet>
              <TextOr>OR</TextOr>
            </FieldSet>
            <FieldSet>
              <ToggleBtn to="/">Sign Up</ToggleBtn>
            </FieldSet>
            <FieldSet>
              <ForgetWrap>
                <ForgetWrapInner>
                  <span>
                    <ForgetBtn>Forgot password?</ForgetBtn>
                  </span>
                </ForgetWrapInner>
              </ForgetWrap>
            </FieldSet>
          </LoginFormInner>
        </LoginFormF>
      </LoginFormWrap>
    </LoginFormSec>
  );
};

export default LoginForm;
