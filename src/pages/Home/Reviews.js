import React, { useState } from "react";
import useReview from "../../hooks/useReview";
import Review from "./Review";

const Reviews = () => {
  const [review, setReview] = useReview();
  return (
    <div className="container mx-auto px-6 my-10">
      <h1 className="text-2xl lg:text-3xl font-bold text-primary my-10">
        REVIEWS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {review
          .map((rev) => <Review key={rev._id} rev={rev}></Review>)
          .reverse()
          .slice(0, 3)}
      </div>
    </div>
  );
};

export default Reviews;
