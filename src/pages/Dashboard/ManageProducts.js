import React from "react";
import { useQuery } from "react-query";
import Loding from "../../components/Loding";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("https://nameless-refuge-04709.herokuapp.com/part", {
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
              <th className="bg-primary text-base-100"></th>
              <th className="bg-primary text-base-100">Avatar</th>
              <th className="bg-primary text-base-100">Product Name</th>
              <th className="bg-primary text-base-100">Price</th>
              <th className="bg-primary text-base-100">Min Quantity</th>
              <th className="bg-primary text-base-100">Max Quantity</th>
              <th className="bg-primary text-base-100">Remove Product</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <ProductRow
                key={part._id}
                index={index}
                part={part}
                refetch={refetch}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
