import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [part, setPart] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // collect data from input form
  const onSubmit = async (data) => {
    const part = {
      productName: data.productName,
      price: data.price,
      description: data.description,
      minimumQuantity: data.minimumQuantity,
      availableQuantity: data.availableQuantity,
      img: data.img,
    };

    await fetch("http://localhost:5000/part", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(part),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    reset();
  };

  return (
    <div>
      <div className="card lg:card-side max-w-[500px] mx-auto bg-base-100 my-20 border-2">
        <form className="w-full p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              value={part.name}
              className="input input-bordered"
              {...register("productName", {
                required: {
                  value: true,
                  message: "Product Name is required",
                },
              })}
            />
            <label className="label">
              {errors.productName?.type === "required" && (
                <span className="label-text text-error">
                  {errors.productName.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              // value={user.displayName}
              className="input input-bordered"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text text-error">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Describe Here"
              // value={}
              className="input input-bordered h-24"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text text-error">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Minimum Quantity</span>
            </label>
            <input
              type="number"
              // value={user.displayName}
              className="input input-bordered"
              {...register("minimumQuantity", {
                required: {
                  value: true,
                  message: "Minimum Quantity is required",
                },
              })}
            />
            <label className="label">
              {errors.minimumQuantity?.type === "required" && (
                <span className="label-text text-error">
                  {errors.minimumQuantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              // value={user.displayName}
              className="input input-bordered"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "Available Quantity is required",
                },
              })}
            />
            <label className="label">
              {errors.availableQuantity?.type === "required" && (
                <span className="label-text text-error">
                  {errors.availableQuantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              {...register("img", {
                required: {
                  value: true,
                  message: "Please Add Image",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text text-error">
                  {errors.img.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="ADD PRODUCT"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
