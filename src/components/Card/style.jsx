import styled from "styled-components";

export const CardSection = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;

  @media (min-width: 960px) {
    margin-bottom: 4rem;
  }
`;

export const CardInner = styled.div`
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -16px;
  width: 100%;
`;

export const CardTitleWrap = styled.div`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardTitle = styled.h2`
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

// Card
export const CardArea = styled.div`
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
  margin-top: 16px;
`;

export const CardAreaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: calc(100% + 1rem);
  margin-top: -0.75rem;
  margin-left: -1rem;
`;

export const CardItem = styled.div`
  flex: 0 0 calc(25% - 1rem);
  margin-top: 12px;
  margin-left: 16px;
  display: flex;
`;

export const CardItemInner = styled.div`
  border-radius: 1rem;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  background: linear-gradient(149deg, #192247 0%, #210e17 99.08%);

  @media (min-width: 600px) {
    background: linear-gradient(149deg, #192247 0%, #210e17 99.08%);
  }
`;

export const CardLayout = styled.div`
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
`;

export const CardItemContainer = styled.div`
  padding: 1.5rem 1rem 8rem 1rem;
  margin-top: -1rem;
`;

export const CardItemTitle = styled.div`
  width: calc(100% - 0px);
  margin-top: 16px;
  display: flex;

  & > h3 {
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 0;
    padding: 0;
    color: rgb(255, 255, 255);
    font-family: unset;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.25;
    @media (min-width: 600px) {
      font-family: unset;
      font-size: 1.25rem;
      font-weight: 500;
    }

    @media (min-width: 960px) {
      font-family: unset;
      font-size: 1.25rem;
      font-weight: 500;
    }

    @media (min-width: 1280px) {
      font-family: unset;
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  & > p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.7);
    font-family: unset;
    font-size: 1rem;
    line-height: 1.25;
    font-weight: 400;
  }
`;

export const SVGInner = styled.div`
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  -webkit-transform: translate(36px, 36px) scale(0.88) translate(-36px, -36px);
  -moz-transform: translate(36px, 36px) scale(0.88) translate(-36px, -36px);
  -ms-transform: translate(36px, 36px) scale(0.88) translate(-36px, -36px);
  transform: translate(36px, 36px) scale(0.88) translate(-36px, -36px);
  margin-top: 16px;

  @media (min-width: 960px) {
    bottom: 0.5rem;
    right: 0.5rem;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  @media (min-width: 1280px) {
    bottom: 0.75rem;
    right: 0.75rem;
  }
`;
