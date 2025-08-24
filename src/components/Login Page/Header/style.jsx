import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderSection = styled.div`
  width: 100%;
  position: relative;
`;

export const Header = styled.header`
  width: inherit;
  padding-top: 1.5rem;
  padding-bottom: calc(1.5rem + 4px);
  margin: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-sizing: unset;

  @media (min-width: 600px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 960px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1280px) {
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: calc(83.3333% - 6rem);
  }
`;

export const HeaderWrap = styled.div`
    box-sizing: border-box;
    display: inherit;
    height: auto;
    width: 100%;
`;

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: -0.5rem;
    margin-left: -1rem;
    align-items: center;
    width: calc(100% + 1rem);
`;

export const HeaderLogoWrap = styled.div`
    flex:0 0 calc(33.333333333333336% - 1rem);
    display: flex;
    margin-top: 8px;
    margin-left: 16px;
`;

export const HeaderLink = styled(Link)`
    appearance: none;
    background: none;
    border-radius: 0px;
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
        color: purple;
`;