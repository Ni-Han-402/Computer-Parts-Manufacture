import React, { useEffect, useState } from "react";
import ComputerPart from "./ComputerPart";
import product1 from "../../assests/images/product-1.png";
import product2 from "../../assests/images/product-2.png";
import product3 from "../../assests/images/product-3.png";

const ComputerParts = () => {
  const parts = [
    {
      _id: 1,
      name: "Gaming PC",
      description: "Best prices gaming pc is on your hands.",
      price: 100,
      minimumQuantity: 50,
      availableQuantity: 200,
      img: product1,
    },
    {
      _id: 2,
      name: "Gaming PC",
      description: "Best prices gaming pc is on your hands.",
      price: 180,
      minimumQuantity: 50,
      availableQuantity: 150,
      img: product2,
    },
    {
      _id: 3,
      name: "Gaming PC",
      description: "Best prices gaming pc is on your hands.",
      price: 130,
      minimumQuantity: 50,
      availableQuantity: 250,
      img: product3,
    },
  ];
  return (
    <div className="container mx-auto px-6 my-10">
      <h1 className="text-2xl lg:text-3xl font-bold text-primary my-10">
        COMPUTER PARTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts.map((item) => (
          <ComputerPart key={item._id} item={item}></ComputerPart>
        ))}
      </div>
    </div>
  );
};

export default ComputerParts;
