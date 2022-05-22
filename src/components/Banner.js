import React from "react";
import slider1 from "../assests/images/slider-1.png";
import banner from "../assests/images/banner-1.png";
import slider2 from "../assests/images/slider-2.png";
import slider3 from "../assests/images/slider-3.png";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 card lg:card-side bg-base-100 shadow-xl">
        <div class="hero rounded-xl">
          <div class="hero-content grid grid-cols-1">
            <img src={banner} alt="" className="md:max-w-screen-sm mx-auto" />
            <div className="text-center md:max-w-screen-sm mx-auto">
              <h1 class="text-3xl font-bold text-primary">ROGX GAMING PC</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
