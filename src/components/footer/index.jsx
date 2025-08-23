import React from "react";

import {
  FooterSection,
  FooterWrapper,
  Footers,
  Query,
  MenuSection,
  MenuSectionInner,
  MenuListItems,
  MenuListitem,
  MenuLink,
  NetIndia,
  ReCaptcha,
ReCaptchaTerm
} from "./style";

import { menu } from "./menuSection";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterWrapper>
          <Footers>
            <Query>
              <p>
                <span id="" data-uia="">
                  Questions? Call{" "}
                  <a href="tel:000-800-919-1743">000-800-919-1743</a>
                </span>
              </p>
            </Query>
            <MenuSection>
              <MenuSectionInner>
                <MenuListItems>
                  {menu.map((item, key) => (
                    <MenuListitem key={key}>
                      <MenuLink to={item.url}>{item.text}</MenuLink>
                    </MenuListitem>
                  ))}
                </MenuListItems>
              </MenuSectionInner>
            </MenuSection>
            <NetIndia>
              <p>Netflix India</p>
            </NetIndia>

            <ReCaptcha>
              <span data-uia="recaptcha-terms-of-use">
                <ReCaptchaTerm>
                  <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.&nbsp;<button class=" e1gz2xdw0 default-ltr-cache-1nszz3b" data-uia="recaptcha-learn-more-button" role="link" type="button">Learn more.</button></p>
                </ReCaptchaTerm>
              </span>
            </ReCaptcha>
          </Footers>
        </FooterWrapper>
      </FooterSection>
    </>
  );
};

export default Footer;
