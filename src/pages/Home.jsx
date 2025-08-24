import React from "react";
import Header from "../components/Landing Page/Header";
import "./style.css";
import Trending from "../components/Landing Page/Trending";
import ReasonCard from "../components/Landing Page/Card";
import FAQ from "../components/Landing Page/FAQs";
import BottomForm from "../components/Landing Page/BottomForm";
import Footer from "../components/Landing Page/footer";


const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="bodyMain">
        <div className="rows">
          <Trending />
          <ReasonCard />
          <FAQ />
          <BottomForm />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
