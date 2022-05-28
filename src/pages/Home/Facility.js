import React, { useState } from "react";
import discount from "../../assests/icons/discount.png";
import support from "../../assests/icons/support.png";
import shipping from "../../assests/icons/shipping.png";

const Facility = () => {
  const [facility] = useState();
  return (
    <div className="container mx-auto px-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div class="card w-100 bg-base-100 shadow-xl">
          <div class="card-body flex items-center">
            <img src={discount} alt="" />
            <h2 class="card-title">Dicount</h2>
            <p>Get Big Discount Everyday</p>
          </div>
        </div>
        <div class="card w-100 bg-base-100 shadow-xl">
          <div class="card-body flex items-center">
            <img src={support} alt="" />
            <h2 class="card-title">24/7 Support</h2>
            <p>Connect With Customer Everyday</p>
          </div>
        </div>
        <div class="card w-100 bg-base-100 shadow-xl">
          <div class="card-body flex items-center">
            <img src={shipping} alt="" />
            <h2 class="card-title">Free Shipping</h2>
            <p>On order Over 300$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
