import React, { useEffect, useState } from "react";

const useReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://nameless-refuge-04709.herokuapp.com/Reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return [review, setReview];
};

export default useReview;
