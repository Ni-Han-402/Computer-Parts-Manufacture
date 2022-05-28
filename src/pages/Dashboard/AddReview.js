import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loding from "../../components/Loding";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  if (loading) {
    return <Loding></Loding>;
  }
  // collect data from input form
  const onSubmit = async (data) => {
    const review = {
      name: data.name,
      description: data.description,
      ratings: data.ratings,
      img: data.img,
    };

    await fetch("https://nameless-refuge-04709.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
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
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Describe Here"
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
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              {...register("ratings", {
                required: {
                  value: true,
                  message: "Ratings is required",
                },
                max: {
                  value: 5,
                  message: "Maximum Ratings 5",
                },
              })}
            />
            <label className="label">
              {errors.ratings?.type === "required" && (
                <span className="label-text text-error">
                  {errors.ratings.message}
                </span>
              )}
              {errors.ratings?.type === "max" && (
                <span className="label-text text-error">
                  {errors.ratings.message}
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
            value="ADD REVIEW"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
