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
            <h1 class="mb-5 text-5xl font-bold text-base-100">SPECIAL OFFER</h1>
            <p class="mb-5">
              Most Reliable eCommerce site in Bangladesh. We keep the stocks so
              that we can make sure you are getting what you are ordering the
              fastest possible time. Online Shopping in Bangladesh for Authentic
              Products
            </p>
            <button class="btn btn-accent">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
