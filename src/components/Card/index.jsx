import React from "react";
import {
  CardSection,
  CardInner,
  CardRow,
  CardTitleWrap,
  CardTitle,
  CardArea,
  CardAreaRow,
  CardItem,
  CardItemInner,
  CardLayout,
  CardItemContainer,
  CardItemTitle,
  SVGInner
} from "./style";

import { features } from "./content";
const ReasonCard = () => {
  return (
    <>
      <CardSection>
        <CardInner>
          <CardRow>
            <CardTitleWrap>
              <CardTitle>More reasons to join</CardTitle>
            </CardTitleWrap>
            <CardArea>
              <CardAreaRow>
                {features.map((feature, index) => (
                  <CardItem key={index}>
                    <CardItemInner>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                        }}
                      >
                        <CardLayout>
                          <CardItemContainer>
                            <CardItemTitle>
                              <h3>{feature.title}</h3>
                            </CardItemTitle>
                            <CardItemTitle>
                              <p>{feature.description}</p>
                            </CardItemTitle>
                            <SVGInner dangerouslySetInnerHTML={{ __html: feature.icon }}>
                            </SVGInner>
                          </CardItemContainer>
                        </CardLayout>
                      </div>
                    </CardItemInner>
                  </CardItem>
                ))}
              </CardAreaRow>
            </CardArea>
          </CardRow>
        </CardInner>
      </CardSection>
    </>
  );
};

export default ReasonCard;
