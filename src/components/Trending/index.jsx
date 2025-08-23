import React, { useEffect, useRef, useState } from "react";
import {
  TrendingMain,
  TrendingTitle,
  TrendingSlider,
  TrendingSliderWrap,
  SliderArea,
  SlideItems,
  SliderItem,
  ItemBtn,
  Poster,
  BgAnimation,
  BgImage,
  RightBtn,
  LeftBtn,
  ArrowBtn,
  Countes,
  CountesPosition,
  CountNumber,
  ModalContent,
  ModalContentWrap,
  ModalImageContainer,
  ModalImage,
  ModalContents,
  OverView,
  Formbtn,
  BtnWrap,
  TitleSection
} from "./style";
import Modal from "../Modal/index"; // Modal using React Portal

import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderRef = useRef(null);

  const API_KEY = "f9f852419bfb1b562121c1c429a3c8b6";
  const API_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(API_URL);
        const first10 = response.data.results.slice(0, 10);
        setTrending(first10);
      } catch (error) {
        console.error("Error fetching trending shows:", error);
      }
    };

    fetchTrending();
  }, []);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = 750;
    if (slider) {
      const scrollOffset = direction === "left" ? -scrollAmount : scrollAmount;
      slider.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, [trending]);

  const openModal = async (itemId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${itemId}?api_key=${API_KEY}&language=en-US`
      );
      setModalData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <TrendingMain>
        <div>
          <TrendingTitle>Trending Now</TrendingTitle>
        </div>
        <TrendingSlider>
          <TrendingSliderWrap>
            <div>
              {showLeftArrow && (
                <LeftBtn>
                  <ArrowBtn
                    $hide={!showLeftArrow}
                    $direction="left"
                    className="slider-btn prev"
                    onClick={() => scroll("left")}
                  >
                    {/* Left Arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </ArrowBtn>
                </LeftBtn>
              )}
            </div>
            <SliderArea>
              <SlideItems ref={sliderRef}>
                {trending.map((item, ind) =>
                  item.poster_path ? (
                    <SliderItem
                      key={item.id}
                      onClick={() => openModal(item.id)}
                    >
                      <ItemBtn>
                        <Poster>
                          <BgAnimation style={{ animationDelay: "0ms" }} />
                          <BgImage
                            style={{
                              backgroundImage: `url(https://image.tmdb.org/t/p/w300${item.poster_path})`,
                            }}
                          />
                        </Poster>
                        <Countes>
                          <CountesPosition>
                            <CountNumber data-content={ind + 1}>
                              {ind + 1}
                            </CountNumber>
                          </CountesPosition>
                        </Countes>
                      </ItemBtn>
                    </SliderItem>
                  ) : null
                )}
              </SlideItems>
            </SliderArea>
            <div>
              {showRightArrow && (
                <RightBtn $hide={!showRightArrow}>
                  <ArrowBtn
                    $hide={!showRightArrow}
                    $direction="right"
                    className="slider-btn next"
                    onClick={() => scroll("right")}
                  >
                    {/* Right Arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </ArrowBtn>
                </RightBtn>
              )}
            </div>
          </TrendingSliderWrap>
        </TrendingSlider>
      </TrendingMain>

      {/* Modal for item details */}
      {isModalOpen && modalData && (
        <Modal onClose={closeModal}>
          <ModalContent>
            <ModalContentWrap>
              <ModalImageContainer>
                <ModalImage
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${modalData.backdrop_path})`,
                  }}
                ></ModalImage>
              </ModalImageContainer>
              <ModalContents>
                <TitleSection>
                  <h3>{modalData.name}</h3>
                </TitleSection>
                <OverView>
                  <p>{modalData.overview}</p>
                </OverView>
                <BtnWrap>
                  <Formbtn>
                    Get Started
                    <div
                      aria-hidden="true"
                      className="default-ltr-cache-1lj9d5t e1ax5wel0"
                      style={{
                        display: "inline-block",
                        height: "1.5rem",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="ChevronRightStandard"
                        aria-hidden="true"
                        style={{
                          width: "1.5rem",
                          height: "inherit",
                          marginLeft: "0.75rem",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </Formbtn>
                </BtnWrap>
              </ModalContents>
            </ModalContentWrap>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Trending;
