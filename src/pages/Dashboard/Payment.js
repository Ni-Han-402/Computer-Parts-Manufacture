import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loding from "../../components/Loding";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4OnKAN1BTwxtqbiQ9ZdR3Z9fak4QRVCp2hYfuU3haoLAgqHUOgVqRLtFPYJ5UtI2HSDIHR5HdAxvMBHpCfc8Af00qzKzrQ35"
);

const Payment = () => {
  const { orderId } = useParams();
  const url = `http://localhost:5000/order/${orderId}`;

  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery("order", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loding></Loding>;
  }

  return (
    <div class="bg-base-200">
      <h2 className="text-2xl">Please Pay fro {orderId}</h2>
      <div class="grid grid-cols-2 items-center mx-20 gap-10">
        <div class="card-body bg-base-100 rounded-lg shadow-lg">
          <p className="text-success">Hello, {order.name}</p>
          <h2 class="card-title">{order.productName}</h2>
          <p>Quantity: {order.quantity}</p>
          <p>Total: {order.price}</p>
        </div>
        <div class="card-body bg-base-100 rounded-lg shadow-lg">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
