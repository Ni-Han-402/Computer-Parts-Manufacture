import React from "react";

const Review = ({ rev }) => {
  const { img, name, description, ratings } = rev;
  return (
    <div class="card w-100 bg-base-100 shadow-xl">
      <div class="card-body flex items-center">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>Ratings: {ratings}</p>
      </div>
    </div>
  );
};

export default Review;
