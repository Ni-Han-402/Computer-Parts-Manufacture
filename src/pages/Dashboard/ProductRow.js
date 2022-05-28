import React from "react";
import { useParams } from "react-router-dom";

const ProductRow = ({ part, index, refetch }) => {
  const { _id, img, productName, price, minimumQuantity, availableQuantity } =
    part;

  const handleDelete = (id) => {
    const url = `https://nameless-refuge-04709.herokuapp.com/part/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>{price}</td>
      <td>{minimumQuantity}</td>
      <td>{availableQuantity}</td>
      <td>
        <button onClick={() => handleDelete(_id)} class="btn btn-error btn-xs">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
