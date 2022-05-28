import React from "react";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ComputerParts from "./ComputerParts";
import Facility from "./Facility";
import Offer from "./Offer";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Facility></Facility>
      <ComputerParts></ComputerParts>
      <Offer></Offer>
      <Reviews></Reviews>
      <BusinessSummary></BusinessSummary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
