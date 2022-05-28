import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loding from "../../components/Loding";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

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
    const profile = {
      name: data.name,
      email: data.email,
      about: data.about,
      phone: data.phone,
      img: data.img,
    };

    await fetch("https://nameless-refuge-04709.herokuapp.com/profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    reset();
  };

  return (
    <div className="m-20">
      <div className="card bg-base-100 my-20 border-2">
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
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
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
              <span className="label-text">About Me</span>
            </label>
            <textarea
              type="text"
              placeholder="Write about you.."
              // value={}
              className="input input-bordered h-24"
              {...register("about", {
                required: {
                  value: true,
                  message: "About is required",
                },
              })}
            />
            <label className="label">
              {errors.about?.type === "required" && (
                <span className="label-text text-error">
                  {errors.about.message}
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
            value="EDIT PROFILE"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
