import React from "react";

const ComputerPart = ({ item }) => {
  const { name, img, price, minimumQuantity, availableQuantity } = item;
  return (
    <div class="card w-100 bg-base-100 shadow-xl">
      <figure className="bg-base-200 h-96">
        <img className="h-[300px] p-5" src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>Price: {price}(Per Unit)</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>Minimum: {minimumQuantity}</p>
        <p>Available: {availableQuantity}</p>
        <button className="btn btn-secondary">PURCHASE</button>
      </div>
    </div>
  );
};

export default ComputerPart;
