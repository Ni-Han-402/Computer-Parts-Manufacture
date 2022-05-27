import React from "react";
import { useQuery } from "react-query";
import Loding from "../../components/Loding";
import OrderRow from "./OrderRow";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://nameless-refuge-04709.herokuapp.com/orders", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loding></Loding>;
  }
  return (
    <div className="p-10">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th className="bg-secondary text-base-100"></th>
              <th className="bg-secondary text-base-100">Name</th>
              <th className="bg-secondary text-base-100">Quantity</th>
              <th className="bg-secondary text-base-100">Email</th>
              <th className="bg-secondary text-base-100">Adress</th>
              <th className="bg-secondary text-base-100">Phone</th>
              <th className="bg-secondary text-base-100">Remove Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
