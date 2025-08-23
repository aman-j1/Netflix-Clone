import React from "react";
import {
    FormSection,
  FormArea,
  FormContainer,
  Form,
  FormTitle,
  FormContent,
  Formbtn,
  FieldSet,
  Label,
  InputArea,
  Input,
  InputOverlay,
} from "./style";

const BottomForm = () => {
  return (
    <>
        <FormSection>
            <FormArea>
                <FormContainer>
                    <Form>
                        <FormTitle>
                            Ready to watch? Enter your email to create or restart your membership.
                        </FormTitle>
                        <FormContent>
                            <FieldSet>
                                <Label>Email address</Label>
                                <InputArea>
                                    <Input autoComplete="email" minLength={5} maxLength={50} type="email"/>
                                    <InputOverlay></InputOverlay>
                                </InputArea>
                            </FieldSet>
                            <Formbtn>
                                Get Started
                                <div
                                aria-hidden="true"
                                className="default-ltr-cache-1lj9d5t e1ax5wel0"
                                style={{
                                  display: "inline-block",
                                  height: "1.5rem",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  height="24"
                                  data-icon="ChevronRightStandard"
                                  aria-hidden="true"
                                  style={{
                                    width: "1.5rem",
                                    height: "inherit",
                                    marginLeft: "0.75rem",
                                  }}
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </Formbtn>
                        </FormContent>
                    </Form>
                </FormContainer>
            </FormArea>
        </FormSection>
    </>
  );
};

export default BottomForm;
