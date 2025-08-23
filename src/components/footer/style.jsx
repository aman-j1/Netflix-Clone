import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
`;

export const FooterWrapper = styled.div`
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  padding-bottom: 6rem;
`;

export const Footers = styled.footer`
  flex-direction: column;
  display: flex;
  margin-top: -36px;
  width: 100%;
`;

export const Query = styled.div`
  margin-top: 36px;
  width: fit-content;
  padding: 3px;

  & > p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.7);
    font-family: unset;
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;

    & a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration-color: rgba(255, 255, 255, 0.7);
      border-radius: 0.125rem;
    }
  }
`;

// Menu

export const MenuSection = styled.div`
  display: flex;
  margin-top: 36px;
  width: fit-content;
`;

export const MenuSectionInner = styled.div`
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
  padding: 4px;
  list-style-type: none;
  line-height: 1.5;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const MenuListItems = styled.ul`
  width: calc(100% + 0.75rem);
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  margin-left: -0.75rem;
  margin-top: -0.75rem;
  margin-bottom: 14px;
  flex-wrap: wrap;
`;

export const MenuListitem = styled.li`
  flex: 0 0 calc(25% - 0.75rem);
  margin-left: 12px;
  margin-top: 12px;
  display: flex;
`;

export const MenuLink = styled(Link)`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background: none;
  border-radius: 0;
  border: 0;
  box-sizing: content-box;
  color: inherit;
  cursor: default;
  display: inline;
  font: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  margin: 0;
  opacity: 1;
  padding: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: ;
  cursor: pointer;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  color: rgba(255, 255, 255, 0.7);
  text-decoration-color: rgba(255, 255, 255, 0.7);
  border-radius: 0.125rem;
`;

// NetIndia

export const NetIndia = styled.div`
  display: flex;
  margin-top: 36px;
  width: fit-content;

  & > p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.7);
    font-family: unset;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 18px;
  }
`;

//recaptcha

export const ReCaptcha = styled.div`
  display: flex;
  margin-top: 36px;
  width: fit-content;
`;

export const ReCaptchaTerm = styled.div`
  margin-bottom: 1rem;

  & > p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.5);
    font-family: unset;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 16px;

    &>button{
      -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: none;
    border-radius: 0;
    border: 0;
    box-sizing: content-box;
    color: inherit;
    cursor: default;
    display: inline;
    font: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    margin: 0;
    opacity: 1;
    padding: 0;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: blue;
    cursor: pointer;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    border-radius: 0.125rem;
        color: rgb(68, 142, 244);
    }
  }
`;
