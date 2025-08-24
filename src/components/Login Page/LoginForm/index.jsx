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
} from "./style";

const LoginForm = () => {
    const [isFocused, setIsFocused] = useState(false);
   
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
                <InputArea className={isFocused ? "focused" : ""}>
                  <InputLabel>Email or mobile number</InputLabel>
                  <InputFormField>
                    <Input
                      type="text"
                      autoComplete="email"
                      dir="ltr"
                      id="email:"
                      name="userLoginId"
                      data-uia="field-userLoginId"
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                    <InputOverlay></InputOverlay>
                  </InputFormField>
                </InputArea>
              </FieldSetInner>
            </FieldSet>
          </LoginFormInner>
        </LoginFormF>
      </LoginFormWrap>
    </LoginFormSec>
  );
};

export default LoginForm;
