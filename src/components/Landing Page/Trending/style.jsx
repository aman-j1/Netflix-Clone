import styled, { keyframes } from "styled-components";

const loading = keyframes`
    0% {
    background-color: rgb(35, 35, 35);
}
40% {
    background-color: rgb(35, 35, 35);
}
70% {
    background-color: rgb(65, 65, 65);
}
90% {
    background-color: rgb(35, 35, 35);
}
`;

export const TrendingMain = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;

  @media (min-width: 960px) {
    margin-bottom: 4rem;
  }
`;

export const TrendingTitle = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
  color: rgb(255, 255, 255);
  font-family: unset;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 30px;

  @media (min-width: 600px) {
    font-family: unset;
    font-size: 1.125rem;
    font-weight: 500;
  }

  @media (min-width: 960px) {
    font-family: unset;
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (min-width: 1280px) {
    font-family: unset;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

//Slider

export const TrendingSlider = styled.div`
  margin-top: 0.75rem;

  @media (min-width: 960px) {
    margin-top: 1rem;
  }
`;

export const TrendingSliderWrap = styled.div`
  position: relative;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const SliderArea = styled.div`
  border-radius: 0.5rem;
  width: 100%;
`;

export const SlideItems = styled.ul`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: visible;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-scroll-snap-type: x mandatory;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  scroll-margin-inline-start: 2.5em;
`;

export const SliderItem = styled.li`
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  scroll-snap-snap-align: start;
  scroll-snap-align: start;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  scroll-margin-inline-start: 2.3rem;
  padding: 0.3rem 0.625rem;

  @media (min-width: 600px) {
    scroll-margin-inline-start: 2.4rem;
  }

  @media (min-width: 960px) {
    padding: 0.4rem 1.375rem;
  }

  @media (min-width: 1280px) {
    scroll-margin-inline-start: 2.75rem;
    padding: 0.5rem 1.375rem;
  }
`;

export const ItemBtn = styled.button`
  position: relative;
  padding: 0;
  background: rgb(35, 35, 35);
  border: none;
  border-radius: 0.5rem;
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  -webkit-appearance: button;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    z-index: 2;
  }
`;

export const Poster = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background-color: rgb(35, 35, 35);
  width: 7rem;
  height: 9.8rem;

  @media (min-width: 960px) {
    width: 8.75rem;
    height: 12.25rem;
  }

  @media (min-width: 1280px) {
    width: 11.25rem;
    height: 15.75rem;
  }
`;

export const BgAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 0.5rem;
  z-index: 1;
  background-color: rgb(35, 35, 35);
  -webkit-animation: loading 4000ms infinite linear;
  animation: ${loading} 4000ms infinite linear;
`;

export const BgImage = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 0.5rem;
  -webkit-background-size: cover;
  background-size: cover;
  z-index: 2;
`;

export const RightBtn = styled.div`
  position: absolute;
  height: 100%;
  border: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 3;
  background: rgb(0, 0, 0);
  right: 0px;
  padding-left: 0.75rem;
  transition: transform 400ms ease-in-out;
`;

export const LeftBtn = styled.div`
  position: absolute;
  height: 100%;
  border: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 3;
  background: rgb(0, 0, 0);
  left: 0px;
  padding-right: 0.75rem;
  transition: transform 400ms ease-in-out;
`;

export const ArrowBtn = styled.button`
  transition: opacity 400ms ease-in-out;
  height: 7.5rem;
  width: 1.5rem;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transform: translateX(0);

  ${(props) =>
    props.$hide &&
    css`
      opacity: 0;
      visibility: hidden;
      transform: translateX(${props.$direction === "right" ? "20px" : "-20px"});
    `}
`;

export const Countes = styled.span`
  position: absolute;
  z-index: 2;
  font-size: 4rem;
  bottom: 0.1rem;
  left: -0.625rem;

  @media (min-width: 960px) {
    font-size: 5rem;
    bottom: 0rem;
    left: -1.375rem;
  }

  @media (min-width: 1280px) {
    font-size: 6.25rem;
  }
`;

export const CountesPosition = styled.span`
  position: relative;
`;

export const CountNumber = styled.span`
  line-height: 1;
  display: inline-block;
  height: 1em;
  position: relative;
  font-weight: 700;
  color: rgb(65, 65, 65);
  -webkit-text-stroke: 0.25rem rgb(255, 255, 255);
  text-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);

  &:before {
    content: attr(data-content);
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke: 0;
    position: absolute;
  }
`;

/// Modal

export const ModalContent = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  position: relative;
  z-index: 0;
  min-width: 17rem;
`;
export const ModalContentWrap = styled.div`
  position: relative;
  z-index: 0;
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
    font-size: 1.125rem;
    font-weight: 500;
        min-height: auto;
    padding: 0.75rem 0.8rem;
    border-radius: 0.25rem;
    background: rgb(229, 9, 20);
    color: rgb(255, 255, 255);
    font-size: 1.125rem;
    margin-left: 0.5rem;
    
`;
export const ModalImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0px;
    z-index: 2;
    background: linear-gradient(
        40deg,
        rgb(22, 22, 22) 24.16%,
        rgba(6, 10, 23, 0) 56.61%
      ),
      linear-gradient(0deg, rgb(22, 22, 22) 3.91%, rgba(6, 10, 23, 0) 69.26%);
  }
`;

export const ModalImage = styled.div`
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  position: absolute;
  inset: 0px;
  z-index: 1;
  opacity: 1;
  transition: opacity 300ms ease-in-out;
`;

export const ModalContents = styled.div`
  padding: 1rem 1rem 1.5rem;

  @media (min-width: 600px) {
    padding: 1rem 2.5rem 2.5rem;
  }
`;

export const OverView = styled.div`
  padding-top: 1rem;

  & > p {
    margin-block: 0px;
    margin: 0px;
    padding: 0px;
    color: rgb(255, 255, 255);
    font-family: unset;
    font-size: 0.875rem;
    font-weight: 400;

    @media (min-width: 600px){
        font-family: unset;
        font-size: 1rem;
        font-weight: 400;
    }

    @media (min-width: 960px){
                font-family: unset;
        font-size: 1rem;
        font-weight: 400;
    }

    @media (min-width: 1280px){
        font-family: unset;
        font-size: 1rem;
        font-weight: 400;
    }
  }
`;

export const BtnWrap = styled.div`
    width: 100%;
    padding-top: 1.5rem;
    display: none;

    @media screen and (min-width: 600px){
              width: 50%;
        padding-top: 2.5rem;
        display: block;
    }
`;

export const TitleSection = styled.div`
    bottom: 0px;
    z-index: 3;
    width: calc(100% - 2rem);
    left: 1rem;

    @media (min-width: 600px){
      width: calc(100% - 5rem);
        left: 2.5rem;
    }

    &>h3{
      background: linear-gradient(90deg, #bc835b, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 2rem;
    }
`;