import React from "react";

const OrderRow = ({ order, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.productName}</td>
      <td>{order.quantity}</td>
      <td>{order.email}</td>
      <td>{order.adress}</td>
      <td>{order.phone}</td>
      <td>
        <button class="btn btn-error btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default OrderRow;
