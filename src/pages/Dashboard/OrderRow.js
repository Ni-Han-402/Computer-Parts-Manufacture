import React from "react";

const OrderRow = ({ order, index, refetch }) => {
  const { _id, email, productName, adress, phone, quantity } = order;

  const handleDelete = (id) => {
    const url = `https://nameless-refuge-04709.herokuapp.com/orders/${id}`;
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
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{email}</td>
      <td>{adress}</td>
      <td>{phone}</td>
      <td>
        <button onClick={() => handleDelete(_id)} class="btn btn-error btn-xs">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
