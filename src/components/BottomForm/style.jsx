import styled from "styled-components";

export const FormSection = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;
  @media (min-width: 960px) {
    margin-bottom: 4rem;
  }
`;

export const FormArea = styled.div`
  border-radius: 8px;
  width: 100%;
`;

export const FormContainer = styled.div`
  text-align: center;
  box-sizing: border-box;
  max-width: 61.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  content: "1";
  padding: 0;
  margin: 0 auto;
  max-width: none;

  @media (min-width: 600px) {
    content: "2";
    padding: 0;
  }

  @media (min-width: 960px) {
    content: "2";
    max-width: 40.1875rem;
  }

  @media (min-width: 960px) {
    max-width: 48.9375rem;
  }
`;

export const Form = styled.form`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const FormTitle = styled.h3`
  margin: 0;
  font-family: unset;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(255, 255, 255);
  font-family: unset;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 960px) {
    color: rgb(255, 255, 255);
    font-family: unset;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const FormContent = styled.div`
  text-align: left;
  position: relative;
  margin: 1rem auto 0;
  width: 100%;
  max-width: 36.625rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0;
  padding-top: 16px;
  -webkit-align-items: "center";
  -webkit-box-align: "center";
  -ms-flex-align: "center";
  align-items: "center";
  max-width: none;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
`;

export const Formbtn = styled.button`
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-top: 0;
  margin-left: 0.5rem;
  appearance: none;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-optical-sizing: inherit;
  font-size-adjust: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  margin: 0px;
  opacity: 1;
  text-decoration: none;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  user-select: none;
  border: 0px;
  cursor: pointer;
  fill: currentcolor;
  position: relative;
  transition-duration: 250ms;
  transition-property: background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.68, 0.06);
  vertical-align: text-top;
  width: auto;
  font-family: unset;
  font-size: 1.5rem;
  font-weight: 500;
  min-height: 3.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  background: rgb(229, 9, 20);
  color: rgb(255, 255, 255);
  font-size: 1.125rem;
  margin-left: 0.5rem;
  @media screen and (min-width: 1280px) {
    font-size: 1.5rem;
  }
`;

export const FieldSet = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: inline-flex;
  vertical-align: text-top;
  width: auto;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
`;

export const Label = styled.label`
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition-property: top, font-size, line-height;
  transition-duration: 250ms;
  pointer-events: none;
  transition-timing-function: cubic-bezier(0.4, 0, 0.68, 0.06);
  color: rgba(255, 255, 255, 0.7);
  font-family: unset;
  font-size: 1rem;
  font-weight: 400;
  left: 1rem;
  line-height: 1.5;
  right: 1rem;
  top: 1rem;
`;

export const InputArea = styled.div`
  font-family: unset;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  color: rgb(255, 255, 255);
  fill: currentcolor;
  min-width: 12.5rem;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: black;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  fill: currentColor;
  font-size: 13px;
  font-weight: 400;
  gap: 2px;
  letter-spacing: normal;
  line-height: 100%;
  padding: 2px;
  position: relative;
  text-align: left;
  z-index: 0;
  padding: 0px;
`;

export const Input = styled.input`
  -webkit-animation: animation-und0r9-autofillEnd;
  animation: animation-und0r9-autofillEnd;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background: transparent;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 0 solid transparent;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  margin: 0;
  min-height: 15px;
  min-width: 15px;
  padding: 0;
  text-align: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  min-height: 16px;
  min-width: 16px;
  color: inherit;
  filter: opacity(0%);
  caret-color: rgb(255, 255, 255);
  width: 100%;
  font-family: unset;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1.5rem 1rem 0.5rem;
`;

export const InputOverlay = styled.div`
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  border-radius: 2px;
  bottom: 0;
  color: transparent;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1;
  border-style: solid;
  background: rgba(22, 22, 22, 0.7);
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  border-color: rgba(128, 128, 128, 0.7);
`;
