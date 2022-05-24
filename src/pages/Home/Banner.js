import React from "react";
import banner from "../../assests/images/banner-1.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 card lg:card-side bg-base-200 shadow-xl">
        <div className="hero rounded-xl">
          <div className="hero-content grid grid-cols-1">
            <img src={banner} alt="" className="md:max-w-screen-sm mx-auto" />
            <div className="text-center md:max-w-screen-sm mx-auto">
              <h1 className="text-3xl font-bold text-primary">
                ROGX GAMING PC
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
