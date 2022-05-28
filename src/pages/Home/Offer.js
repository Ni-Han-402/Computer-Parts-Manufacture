import React from "react";
import offer from "../../assests/images/offer.png";
import laptop from "../../assests/images/product-2.png";

const Offer = () => {
  return (
    <div className="container mx-auto px-6">
      <div
        class="hero w-full text-start"
        style={{ backgroundImage: `url(${offer})` }}
      >
        <div class="hero-overlay bg-opacity-50"></div>
        <div class="hero-content grid grid-cols-1 md:grid-cols-2 items-center lg:flex-row-reverse">
          <div className="text-white">
            <h1 class="text-5xl font-bold">SPECIAL OFFER</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Shop Now</button>
          </div>
          <div className="flex justify-center">
            <img src={laptop} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
