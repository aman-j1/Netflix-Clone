import React from "react";
import Header from "../components/Header";
import "./style.css";
import Trending from "../components/Trending";
import ReasonCard from "../components/Card";
import FAQ from "../components/FAQs";
import BottomForm from "../components/BottomForm";
import Footer from "../components/footer";


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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
