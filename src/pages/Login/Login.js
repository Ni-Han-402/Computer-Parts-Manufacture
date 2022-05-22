import React from "react";
import { useForm } from "react-hook-form";
import loginImg from "../../assests/images/login.png";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 card lg:card-side max-w-screen-lg mt-28 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={loginImg} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">LOGIN</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: "Your email is not valid",
                },
              })}
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text text-error">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text text-error">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Must be 8 characters or longer",
                },
              })}
            />
            <label class="label">
              {errors.password?.type === "required" && (
                <span class="label-text text-error">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span class="label-text text-error">
                  {errors.password.message}
                </span>
              )}
            </label>
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <input class="btn btn-primary w-full" type="submit" value="LOGIN" />
        </form>
        <div class="flex w-full items-center">
          <div class="grid h-[2px] flex-grow card bg-primary rounded-box place-items-center">
            <hr />
          </div>
          <div class="divider divider-horizontal text-primary">OR</div>
          <div class="grid h-[2px] flex-grow card bg-primary rounded-box place-items-center">
            <hr />
          </div>
        </div>
        <button className="btn btn-primary btn-outline w-full">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
