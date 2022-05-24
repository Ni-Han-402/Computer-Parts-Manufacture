import React from "react";
import notFound from "../../assests/images/404.jpg";

const NotFound = () => {
  return (
    <div className="container mx-auto">
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
