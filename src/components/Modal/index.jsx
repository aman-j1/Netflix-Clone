import React from "react";
import ReactDOM from "react-dom";
import { Modals, Dialogue, CloseWrap, CloseBtn, ClosebtnInner } from "./style";

const Modal = ({ children, onClose }) => {
return ReactDOM.createPortal(
    <Modals>
      <Dialogue style={{margin: "0", overflow: "hidden"}}>
        <CloseWrap>
          <CloseBtn onClick={onClose}>
            <ClosebtnInner>
              <svg
                style={{ width: "1.5rem", height: "inherit" }}
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="XMedium"
                data-icon-id=":r2i:"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </ClosebtnInner>
          </CloseBtn>
        </CloseWrap>
        {children}
      </Dialogue>
    </Modals>,
  document.getElementById("modal-root")
)
};

export default Modal;
