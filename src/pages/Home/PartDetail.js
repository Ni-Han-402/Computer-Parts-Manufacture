import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PartDetail = () => {
  const { partId } = useParams();
  const [part, setPart] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/part/${partId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  return (
    <div className="container mx-auto px-6">
      <div class="card lg:card-side max-w-[1080px] mx-auto bg-base-100 shadow-xl">
        <figure className="bg-base-200 p-10">
          <img className="max-h-[300px]" src={part.img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{part.name}</h2>
          <h1>{part.price}</h1>
          <p>{part.description}</p>
          <p>Minimum Quantity: {part.minimumQuantity}</p>
          <p>Available Quantity: {part.availableQuantity}</p>
          <button class="btn btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default PartDetail;
