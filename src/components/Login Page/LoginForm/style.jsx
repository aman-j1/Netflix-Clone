import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginFormSec = styled.div`
  width: 100%;
  position: relative;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  -webkit-box-pack: center;
  justify-content: center;
  transition-property: opacity, transform;
  transition-duration: 0.2s;
`;

export const LoginFormWrap = styled.div`
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
  pointer-events: all;
  --wct--layout-container--pointer-events: all;
`;

export const LoginFormF = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding-bottom: 48px;
  width: 100%;
`;

export const LoginFormInner = styled.div`
  flex: 1 0 calc(8.333333333333334% - 12px);
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
  pointer-events: all;
  --wct--layout-container--pointer-events: all;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin: 0px;
  padding: 48px 64px;
  flex-direction: column;
`;

export const FormContent = styled.div`
  margin-top: -16px;
  display: flex;
  flex-wrap: wrap;
`;

export const FormTitle = styled.div`
  margin-top: 16px;
  padding-bottom: 12px;
  line-height: 1.25;

  & > h1 {
    margin-block: 0px;
    margin: 0px;
    padding: 0px;
    color: rgb(255, 255, 255);
    font-family: unset;
    font-size: 2rem;
    font-weight: 700;
    text-align: start;
    user-select: text;
  }
`;

export const FieldSet = styled.div`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const FieldSetInner = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export const InputLabel = styled.label`
  position: absolute;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition-property: all;
  transition-duration: 250ms;
  pointer-events: none;
  transition-timing-function: cubic-bezier(0.4, 0, 0.68, 0.06);
  color: rgba(255, 255, 255, 0.7);
  font-family: unset;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  left: 1rem;
  right: 1rem;
  top: 1rem;
`;

export const InputFormField = styled.div`
  -webkit-box-align: center;
  align-items: center;
  color: black;
  display: inline-flex;
  fill: currentcolor;
  font-size: 13px;
  font-weight: 400;
  gap: 2px;
  letter-spacing: normal;
  line-height: 100%;
  padding: 2px;
  position: relative;
  text-align: left;
  z-index: 0;
  direction: ltr;
  fill: currentcolor;
  min-width: 12.5rem;
  font-family: unset;
  font-size: 1rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
  width: 100%;
`;

export const Input = styled.input`
  min-height: 16px;
  min-width: 16px;
  color: inherit;
  caret-color: rgb(255, 255, 255);
  line-height: 1.5;
  width: 100%;
  direction: ltr;
  padding: 1.5rem 1rem 0.5rem;
  background: none;
      border: none;
`;

export const InputArea = styled.div`
  display: inline-flex;
  vertical-align: text-top;
  position: relative;
  flex-wrap: wrap;

  &.focused > label {
    color: rgba(255, 255, 255, 0.7);
    font-family: unset;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    left: 1rem;
    right: 1rem;
    top: 0.5rem;
  }

  &.focused  input{
    appearance: unset;
  }
`;

export const InputOverlay = styled.div`
  -webkit-box-align: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  border-radius: 2px;
  inset: 0px;
  color: transparent;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  user-select: none;
  border-style: solid;
  z-index: -1;
  background: rgba(22, 22, 22, 0.7);
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  border-color: rgba(128, 128, 128, 0.7);
`;

export const LoginBtnWrap = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const LoginBtn = styled.div`
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
  font-size: 1rem;
  font-weight: 500;
  min-height: 2.5rem;
  padding: 0.375rem 1rem;
  border-radius: 0.25rem;
  background: rgb(229, 9, 20);
  color: rgb(255, 255, 255);
  -webkit-box-flex: 1;
  flex-grow: 1;

  &::after {
    inset: 0px;
    position: absolute;
    transition: inherit;
    border-style: solid;
    border-width: 0.0625rem;
    border-radius: calc(0.1875rem);
    content: "";
    border-color: rgba(0, 0, 0, 0);
  }
`;

export const TextOr = styled.p`
  margin-block: 0px;
  margin: 0px;
  padding: 0px;
  color: rgba(255, 255, 255, 0.7);
  font-family: unset;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  user-select: text;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export const ToggleBtn = styled(Link)`
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
  font-size: 1rem;
  font-weight: 500;
  min-height: 2.5rem;
  padding: 0.375rem 1rem;
  border-radius: 0.25rem;
  background: rgba(128, 128, 128, 0.4);
  color: rgb(255, 255, 255);
  -webkit-box-flex: 1;
  flex-grow: 1;

  &::after {
    inset: 0px;
    position: absolute;
    transition: inherit;
    border-style: solid;
    border-width: 0.0625rem;
    border-radius: calc(0.1875rem);
    content: "";
    border-color: rgba(0, 0, 0, 0);
  }

  &:hover{
            transition-timing-function: cubic-bezier(0.32, 0.94, 0.6, 1);
        background: rgba(128, 128, 128, 0.3);
  }
`;

export const ForgetWrap = styled.div`
      -webkit-box-flex: 1;
    flex-grow: 1;
    margin: 0px;
    display: inherit;
    height: auto;
    width: 100%;
    pointer-events: none;
    --wct--layout-container--pointer-events: all;
`;

export const ForgetWrapInner = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;

  & > span{
    margin-block: 0px;
    margin: 0px;
    padding: 0px;
    color: rgb(255, 255, 255);
    font-family: unset;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const ForgetBtn = styled(Link)`
      appearance: none;
    background: none;
    border: 0px;
    box-sizing: content-box;
    display: inline;
    font: inherit;
    letter-spacing: inherit;
    margin: 0px;
    opacity: 1;
    padding: 0px;
    color: blue;
    cursor: pointer;
    text-decoration: underline;
    user-select: text;
    border-radius: 0.125rem;
    color: rgb(255, 255, 255);
`