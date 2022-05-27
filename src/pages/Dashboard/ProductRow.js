import React from "react";

const ProductRow = ({ part, index }) => {
  const { img, productName, price, minimumQuantity, availableQuantity } = part;
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
        <button class="btn btn-error btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default ProductRow;
