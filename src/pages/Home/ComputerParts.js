import React, { useEffect, useState } from "react";
import ComputerPart from "./ComputerPart";
import product1 from "../../assests/images/product-1.png";
import product2 from "../../assests/images/product-2.png";
import product3 from "../../assests/images/product-3.png";

const ComputerParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://nameless-refuge-04709.herokuapp.com/part")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
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
