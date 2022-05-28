import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const PartDetail = () => {
  const [user] = useAuthState(auth);
  const { partId } = useParams();
  const [part, setPart] = useState({});

  const [stockQuan, setStockQuan] = useState(part.availableQuantity);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // collect data from input form
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const quantity = data.quantity;
    const price = data.price * quantity;
    const productName = data.productName;
    const adress = data.adress;
    const phone = data.phone;
    const order = { name, email, productName, price, adress, phone, quantity };

    if (order) {
      const newStock = part.availableQuantity - data.quantity;
      console.log(newStock);
      setStockQuan(newStock);
    }

    await fetch("https://nameless-refuge-04709.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    reset();
  };

  useEffect(() => {
    const url = `https://nameless-refuge-04709.herokuapp.com/part/${partId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  return (
    <div className="container mx-auto px-6">
      <div class="card lg:card-side max-w-[800px] mx-auto bg-base-100 shadow-xl">
        <figure className="bg-base-200 p-10">
          <img className="max-h-[200px]" src={part.img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{part.productName}</h2>
          <h1>Price: {part.price}</h1>
          <p>{part.description}</p>
          <p>Minimum Quantity: {part.minimumQuantity}</p>
          <p>Available Quantity: {part.availableQuantity}</p>
        </div>
      </div>
      <div className="card lg:card-side max-w-[500px] mx-auto bg-base-100 my-20 border-2">
        <form className="w-full p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={user.displayName}
              className="input input-bordered"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text text-error">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              value={user.email}
              className="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text text-error">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={part.productName}
              className="input input-bordered"
              {...register("productName")}
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
              value={part.price}
              className="input input-bordered"
              {...register("price")}
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
              <span className="label-text">Your Adress</span>
            </label>
            <input
              type="text"
              placeholder="Your Adress"
              // value={user.displayName}
              className="input input-bordered"
              {...register("adress", {
                required: {
                  value: true,
                  message: "Adress is required",
                },
              })}
            />
            <label className="label">
              {errors.adress?.type === "required" && (
                <span className="label-text text-error">
                  {errors.adress.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="Your Phone Number"
              // value={user.displayName}
              className="input input-bordered"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone Number is required",
                },
              })}
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text text-error">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Put Quantity Here"
              className="input input-bordered"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Please put quantity",
                },
                min: {
                  value: part.minimumQuantity,
                  message: `You Must Order Minimum ${part.minimumQuantity} Quantity`,
                },
                max: {
                  value: part.availableQuantity,
                  message: `You Must Order Maximum ${part.availableQuantity} Quantity`,
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text text-error">
                  {errors.quantity.message}
                </span>
              )}
              {errors.quantity?.type === "min" && (
                <span className="label-text text-error">
                  {errors.quantity.message}
                </span>
              )}
              {errors.quantity?.type === "max" && (
                <span className="label-text text-error">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="ORDER"
          />
        </form>
      </div>
    </div>
  );
};

export default PartDetail;
