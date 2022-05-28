import React from "react";
import delivered from "../../assests/icons/delivered.png";
import revenue from "../../assests/icons/revenue.png";
import review from "../../assests/icons/review.png";
import tools from "../../assests/icons/tools.png";

const BusinessSummary = () => {
  return (
    <div className="container mx-auto px-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div class="card w-100 bg-base-100">
          <div class="card-body flex items-center">
            <img src={delivered} alt="" />
            <h2 class="card-title">DELIVERED</h2>
            <h1 className="text-3xl font-bold">599+</h1>
            <p>We Delivered</p>
          </div>
        </div>
        <div class="card w-100 bg-base-100">
          <div class="card-body flex items-center">
            <img src={revenue} alt="" />
            <h2 class="card-title">REVENUE</h2>
            <h1 className="text-3xl font-bold">150M+</h1>
            <p>Anual Revenue</p>
          </div>
        </div>
        <div class="card w-100 bg-base-100">
          <div class="card-body flex items-center">
            <img src={review} alt="" />
            <h2 class="card-title">REVIEW</h2>
            <h1 className="text-3xl font-bold">56K+</h1>
            <p>Customer Reveiws</p>
          </div>
        </div>
        <div class="card w-100 bg-base-100">
          <div class="card-body flex items-center">
            <img src={tools} alt="" />
            <h2 class="card-title">TOOLS</h2>
            <h1 className="text-3xl font-bold">130+</h1>
            <p>Our Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
