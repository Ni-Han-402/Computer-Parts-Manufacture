import React, { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://nameless-refuge-04709.herokuapp.com/part")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return [parts, setParts];
};

export default useParts;
