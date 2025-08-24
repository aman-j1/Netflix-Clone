import { Link } from "react-router-dom";
import styled from "styled-components";

export const Hero = styled.div`
  position: relative;
  width: 100%;
`;

export const HeroWrap = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
`;

export const HeaderSection = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.7889) 8.333%,
    rgba(0, 0, 0, 0.7556) 16.67%,
    rgba(0, 0, 0, 0.7) 25%,
    rgba(0, 0, 0, 0.6222) 33.33%,
    rgba(0, 0, 0, 0.5222) 41.67%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.2778) 58.33%,
    rgba(0, 0, 0, 0.1778) 66.67%,
    rgba(0, 0, 0, 0.1) 75%,
    rgba(0, 0, 0, 0.04444) 83.33%,
    rgba(0, 0, 0, 0.01111) 91.67%,
    rgba(0, 0, 0, 0) 100%
  );
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const HeaderSectionWrp = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 7.5rem;
  margin: 0 auto -7.5rem auto;
  padding: 0 1.5rem;

  @media (min-width: 600px) {
    padding: 0 2rem;
  }

  @media (min-width: 960px) {
    padding: 0 5rem;
  }

  @media (min-width: 1280px) {
    padding: 0 9.25rem;
  }
`;

export const HeaderHeight = styled.div`
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
  height: 5rem;

  @media (min-width: 1280px) {
    height: 5.5rem;
  }
`;

export const MainHeader = styled.header`
  display: flex;
  width: 100%;
  padding: 0;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% + 16px);
`;

export const LogoWarp = styled.div`
  display: block;
`;

export const SVG = styled.svg`
  width: 9.25rem;
  height: 2.5rem;
  color: rgb(229, 9, 20);
  fill: currentColor;
  display: block;
  overflow: hidden;
`;

export const SignIn = styled.div`
  display: flex;
  margin-left: 16px;
  align-items: center;
  width: 100%;
`;

export const SignInWrap = styled.div`
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
  justify-content: flex-end;
`;
export const SignContainer = styled.div`
  display: flex;
  margin-left: -12px;
  flex-direction: row;
  justify-content: flex-end;
  padding: 3px;
  width: calc(100% - 12px);
`;

export const SignContainerInner = styled.div`
  display: flex;
  margin-left: 12px;
  flex-wrap: wrap;
`;

export const SignBtn = styled(Link)`
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
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: gainsboro;
  border-radius: 2px;
  border: 1px solid dimgray;
  box-sizing: border-box;
  color: black;
  cursor: default;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 13px;
  font-weight: 400;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  padding: 2px 7px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 0;
  cursor: pointer;
  fill: currentColor;
  position: relative;
  transition-duration: 250ms;
  transition-property: background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.68, 0.06);
  vertical-align: text-top;
  width: auto;
  font-family: unset;
  font-size: 0.875rem;
  font-weight: 500;
  min-height: 2rem;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  background: rgb(229, 9, 20);
  color: rgb(255, 255, 255);

  &:after {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: inherit;
    transition: inherit;
    border-style: solid;
    border-width: 0.0625rem;
    border-radius: calc(0.25rem - 0.0625rem);
    content: "";
    border-color: rgba(0, 0, 0, 0);
    outline: none;
  }

  &:hover {
    transition-timing-function: cubic-bezier(0.32, 0.94, 0.6, 1);
    background: rgb(193, 17, 25);
    border-color: black;
  }

  &:hover::after {
    border-color: rgba(0, 0, 0, 0);
  }
`;
// Hero & content Area

export const NetHero = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 120rem;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;

  &:after {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: inherit;
    transition: inherit;
    border-style: solid;
    border-width: 0.0625rem;
    border-radius: calc(0.25rem - 0.0625rem);
    content: "";
    border-color: rgba(0, 0, 0, 0);
  }
`;

export const NetHeroWrp = styled.div`
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  margin: 0 auto;
  padding-top: 100px;
  -webkit-background-size: cover;
  background-size: cover;
  -webkit-background-position: center;
  background-position: center;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  z-index: 3;

  &:before {
    content: "";
    width: 1px;
    margin-left: -1px;
    height: 0;
    padding-top: 46.666666666666664%;
    box-sizing: border-box;
  }
`;

export const NetHeroIage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const NetHeroIageInner = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
`;

export const HeroImageGrad = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-image: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.8965) 8.5%,
    rgba(0, 0, 0, 0.8861) 17%,
    rgba(0, 0, 0, 0.8688) 25.5%,
    rgba(0, 0, 0, 0.8444) 34%,
    rgba(0, 0, 0, 0.8132) 42.5%,
    rgba(0, 0, 0, 0.775) 51%,
    rgba(0, 0, 0, 0.7368) 59.5%,
    rgba(0, 0, 0, 0.7056) 68%,
    rgba(0, 0, 0, 0.6813) 76.5%,
    rgba(0, 0, 0, 0.6639) 85%,
    rgba(0, 0, 0, 0.6535) 93.5%,
    rgba(0, 0, 0, 0.65) 102%
  );

  @media (min-width: 600px) {
    background-image: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.85) 3%,
      rgba(0, 0, 0, 0.8465) 11.08%,
      rgba(0, 0, 0, 0.8361) 19.17%,
      rgba(0, 0, 0, 0.8187) 27.25%,
      rgba(0, 0, 0, 0.7944) 35.33%,
      rgba(0, 0, 0, 0.7632) 43.42%,
      rgba(0, 0, 0, 0.725) 51.5%,
      rgba(0, 0, 0, 0.6868) 59.58%,
      rgba(0, 0, 0, 0.6556) 67.67%,
      rgba(0, 0, 0, 0.6313) 75.75%,
      rgba(0, 0, 0, 0.6139) 83.83%,
      rgba(0, 0, 0, 0.6035) 91.92%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  @media (min-width: 960px) {
    background-image: linear-gradient(
      12deg,
      rgba(0, 0, 0, 0.85) 36%,
      rgba(0, 0, 0, 0.8465) 40.58%,
      rgba(0, 0, 0, 0.8361) 45.17%,
      rgba(0, 0, 0, 0.8187) 49.75%,
      rgba(0, 0, 0, 0.7944) 54.33%,
      rgba(0, 0, 0, 0.7632) 58.92%,
      rgba(0, 0, 0, 0.725) 63.5%,
      rgba(0, 0, 0, 0.6868) 68.08%,
      rgba(0, 0, 0, 0.6556) 72.67%,
      rgba(0, 0, 0, 0.6313) 77.25%,
      rgba(0, 0, 0, 0.6139) 81.83%,
      rgba(0, 0, 0, 0.6035) 86.42%,
      rgba(0, 0, 0, 0.6) 91%
    );
  }

  @media (min-width: 1280px) {
    background-image: linear-gradient(
      7deg,
      rgba(0, 0, 0, 0.85) 10%,
      rgba(0, 0, 0, 0.8465) 17.25%,
      rgba(0, 0, 0, 0.8361) 24.5%,
      rgba(0, 0, 0, 0.8187) 31.75%,
      rgba(0, 0, 0, 0.7944) 39%,
      rgba(0, 0, 0, 0.7632) 46.25%,
      rgba(0, 0, 0, 0.725) 53.5%,
      rgba(0, 0, 0, 0.6868) 60.75%,
      rgba(0, 0, 0, 0.6556) 68%,
      rgba(0, 0, 0, 0.6312) 75.25%,
      rgba(0, 0, 0, 0.6139) 82.5%,
      rgba(0, 0, 0, 0.6035) 89.75%,
      rgba(0, 0, 0, 0.6) 97%
    );
  }
`;

export const NetImaged = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

//Hero content

export const HeroContent = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  z-index: 3;
`;

export const HeroContentWrap = styled.div`
  margin: -2rem auto 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 80vh;
  width: 100%;
  max-width: 120rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  padding: 0 2rem 2rem 2rem;
  min-height: 31rem;

  @media (min-width: 960px) {
    min-height: 37rem;
  }

  @media (min-width: 1280px) {
    min-height: min(80vh, 45rem);
  }
`;

export const ContentContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  max-width: 100%;

  @media (min-width: 600px) {
    max-width: 27rem;
  }

  @media (min-width: 960px) {
    max-width: 31.75rem;
  }

  @media (min-width: 600px) {
    max-width: 36.75rem;
  }
`;

export const HeadingArea = styled.div`
  position: relative;
  -webkit-backface-visibility: hidden;
`;

export const H1 = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
  color: rgb(255, 255, 255);
  font-weight: 700;
  line-height: 125%;
  font-family: unset;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (min-width: 600px) {
    font-family: unset;
    font-size: 2rem;
    font-weight: 700;
  }

  @media (min-width: 960px) {
    font-family: unset;
    font-size: 2.5rem;
    font-weight: 700;
  }

  @media (min-width: 1280px) {
    font-family: unset;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 900;
  }
`;

export const P = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
  line-height: 25px;
  color: rgb(255, 255, 255);
  font-family: unset;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    font-family: unset;
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 960px) {
    font-family: unset;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1280px) {
    font-family: unset;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;

// form Area

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
  margin: 0;
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
    @media screen and (min-width: 1280px){
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

// Hero Bottom Section

export const HeroBottom = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
  height: 6.25rem;
  z-index: 1;
`;

export const CurveContainer = styled.div`
  box-sizing: border-box;
`;

export const CurveArea = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  top: 0;
  margin: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: solid 0.25rem transparent;
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  border-bottom: none;
  background: radial-gradient(
      50% 500% at 50% -420%,
      rgba(64, 97, 231, 0.4) 80%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    black;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  width: 200%;
  left: -50%;

  @media (min-width: 600px) {
    width: 180%;
    left: -40%;
  }

  @media (min-width: 960px) {
    width: 150%;
    left: -25%;
  }

  @media (min-width: 1280px) {
    width: 130%;
    left: -15%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin-top: -0.25rem;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      rgba(33, 13, 22, 1) 16%,
      rgba(184, 40, 105, 1),
      rgba(229, 9, 20, 1),
      rgba(184, 40, 105, 1),
      rgba(33, 13, 22, 1) 84%
    );
  }
`;

export const BottomMargin = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 1.375em;

  @media (min-width: 960px) {
    margin-top: 1.875rem;
  }

  @media (min-width: 960px) {
    margin-top: 1.25rem;
  }
`;
