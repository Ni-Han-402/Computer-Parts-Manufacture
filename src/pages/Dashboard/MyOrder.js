import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Total Orders: {orders.length}</h1>
      {/*  */}
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
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.email}</td>
                <td>{order.adress}</td>
                <td>{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
