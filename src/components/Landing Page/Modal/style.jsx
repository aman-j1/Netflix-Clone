import styled from "styled-components";

export const Modals = styled.div`
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  inset: 0px;
  z-index: 1000;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 250ms cubic-bezier(0.32, 0.94, 0.6, 1) 67ms;
  padding: 0px;
  opacity: 1;
`;

export const Dialogue = styled.div`
  background: white;
  border: 1px solid dimgray;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  background: rgb(22, 22, 22);
  border: 0.0625rem solid rgba(128, 128, 128, 0.4);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0.25rem 0.5rem 0px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  width: 100%;
  margin: 1.5rem;
  max-height: min(90%, 100% - 3rem);
  max-width: 41.8125rem;
  overflow: auto hidden;
  position: relative;
  transition: opacity 100ms cubic-bezier(0.32, 0.94, 0.6, 1) 100ms,
    transform 533ms cubic-bezier(0.32, 0.94, 0.6, 1) 4ms;

  opacity: 1;
  transform: scale(1);

`;

export const CloseWrap = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    left: 0px;
    overflow: visible;
    right: 0px;
    text-align: right;
    top: 0px;
    z-index: 1;
    position: sticky;
    height: 0px;
    padding: 0px 1rem;
`;

export const CloseBtn = styled.button`
    appearance: none;
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-family: inherit;
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
    border: 0.0625rem solid rgba(0, 0, 0, 0);
    box-sizing: border-box;
    display: inline-flex;
    font-size: 13px;
    font-weight: 400;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    padding: 2px 7px;
    user-select: none;
    border-radius: 1.25rem;
    cursor: pointer;
    fill: currentcolor;
    position: relative;
    transition-duration: 250ms;
    transition-property: background-color, border-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.68, 0.06);
    vertical-align: text-top;
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
        margin: 1rem 0px;

        &:hover{
                    transition-timing-function: cubic-bezier(0.32, 0.94, 0.6, 1);
        background: rgba(128, 128, 128, 0.4);
        border-color: rgba(0, 0, 0, 0);
        color: rgb(255, 255, 255);
        }
`;

export const ClosebtnInner = styled.div`
        display: inline-block;
    height: 1.5rem;
`;