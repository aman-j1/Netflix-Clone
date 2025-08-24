import React, { useEffect } from "react";
import {
  FAQSection,
  FaqInner,
  FaqRow,
  FaqTitleWrap,
  FaqTitle,
  FaqItemsWrap,
  FaqItems,
  FaqItem,
  FaqQuestion,
  QuestionButton,
  AnswerWrap,
} from "./style";

import { Faqcontent } from "./FaqContent";

const FAQ = () => {
useEffect(() => {
  const questions = document.querySelectorAll(".faq-question");

  const handleClick = (clickedQuestion) => {
    const isAlreadyOpen = clickedQuestion.getAttribute("data-expanded") === "true";

    // Close all questions and answers
    const allQuestions = document.querySelectorAll(".faq-question");
    const allAnswers = document.querySelectorAll(".faq-answer");

    allQuestions.forEach((q) => q.setAttribute("data-expanded", "false"));
    allAnswers.forEach((a) => a.setAttribute("data-expanded", "false"));

    // If it was not already open, open the clicked one
    if (!isAlreadyOpen) {
      clickedQuestion.setAttribute("data-expanded", "true");
      const answer = clickedQuestion.nextElementSibling;
      if (answer && answer.classList.contains("faq-answer")) {
        answer.setAttribute("data-expanded", "true");
      }
    }
  };

  questions.forEach((question) => {
    question.addEventListener("click", () => handleClick(question));
  });

  // Cleanup
  return () => {
    questions.forEach((question) => {
      question.replaceWith(question.cloneNode(true));
    });
  };
}, []);

  return (
    <FAQSection>
      <FaqInner>
        <FaqRow>
          <FaqTitleWrap>
            <FaqTitle>Frequently Asked Questions</FaqTitle>
          </FaqTitleWrap>
          <FaqItemsWrap>
            <FaqItems>
              {Faqcontent.map((item, key) => (
                <FaqItem key={key}>
                  <FaqQuestion className="faq-question" data-expanded="false">
                    <QuestionButton>
                      {item.title}
                      <svg
                        viewBox="0 0 36 36"
                        width="36"
                        height="36"
                        data-icon="PlusLarge"
                        data-icon-id=":rd:"
                        aria-hidden="true"
                        className="default-ltr-iqcdef-cache-1ulhx3w e164gv2o4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img"
                        style={{position: "realtive", top: "-1px"}}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </QuestionButton>
                  </FaqQuestion>
                  <AnswerWrap
                    className="faq-answer"
                    data-expanded="false"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </FaqItem>
              ))}
            </FaqItems>
          </FaqItemsWrap>
        </FaqRow>
      </FaqInner>
    </FAQSection>
  );
};

export default FAQ;
