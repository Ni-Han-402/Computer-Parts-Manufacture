import React from "react";
import banner from "../../assests/images/banner-pc.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-6">
      <div
        class="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div class="hero-overlay bg-opacity-50"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
