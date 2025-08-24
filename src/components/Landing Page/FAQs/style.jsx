import styled from "styled-components";

export const FAQSection = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;

  @media (min-width: 960px) {
    margin-bottom: 4rem;
  }
`;

export const FaqInner = styled.div`
  box-sizing: border-box;
  display: inherit;
  height: auto;
  width: 100%;
`;

export const FaqRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -16px;
`;

export const FaqTitleWrap = styled.div`
  width: fit-content;
  display: flex;
  margin-top: 16px;
`;

export const FaqTitle = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
  color: rgb(255, 255, 255);
  line-height: 1.25;
  font-family: unset;
  font-size: 1.125rem;
  font-weight: 500;

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

export const FaqItemsWrap = styled.div`
  width: fit-content;
  margin-top: 1rem;
  display: flex;
`;

export const FaqItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: unset;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const FaqItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-indent: 0;
  margin: 0 0 0.5rem 0;
`;

export const FaqQuestion = styled.h3`
  margin: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: inherit;
  font-weight: inherit;
  margin-bottom: 0rem;
  position: relative;
  background-color: rgb(45, 45, 45);
  color: rgb(255, 255, 255);
  transition-duration: 250ms;
  transition-property: background-color, margin-bottom, border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.68, 0.06);
  border-radius: 0rem;

  &:hover {
    transition-timing-function: cubic-bezier(0.32, 0.94, 0.6, 1);
    background-color: rgb(65, 65, 65);
  }
  &[data-expanded="true"] {
    & svg{
            flex-shrink: 0;
    transform: rotate(-45deg);
    }
  }
`;

export const QuestionButton = styled.button`
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
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  text-align: left;
  padding: 1.5rem;
  position: relative;
`;

export const AnswerWrap = styled.div`
  overflow: hidden;
  max-height: 0;
  visibility: collapse;
  max-height: 0rem;
  padding: 0rem 1.5rem;
  -webkit-transition: all 250ms cubic-bezier(0.32, 0.94, 0.6, 1);
  transition: all 250ms cubic-bezier(0.32, 0.94, 0.6, 1);
  text-align: left;
  background-color: rgb(45, 45, 45);
  color: rgb(255, 255, 255);
  border-radius: 0rem;
  line-height: 1.25;

  &[data-expanded="true"] {
    border-radius: 0rem;
    max-height: unset;
    padding: 1.5rem;
    visibility: visible;
    margin-top: 1px;
  }
`;
