import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assests/images/login.png";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loding from "../../components/Loding";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();

  let signInError;
  // LOGIN WITH EMAIL & PASSWORD
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // LOGIN WITH GOOGLE
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  // User
  if (user || gUser) {
    navigate("/home");
  }
  // Loding
  if (loading || gLoading) {
    return <Loding></Loding>;
  }
  // Error
  if (error || gError) {
    signInError = (
      <p className="text-error">
        {error?.message} || {gError?.message}
      </p>
    );
  }
  // collect data from input form
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    reset();
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 card lg:card-side mx-6 my-20 bg-base-100 shadow-xl">
        <figure>
          <img src={loginImg} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">LOGIN</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
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
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text text-error">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text text-error">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
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
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text text-error">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text text-error">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {signInError}
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="LOGIN"
            />
          </form>
          <p>
            <small>
              Don't have an account?{" "}
              <Link className="text-primary" to="/register">
                create account
              </Link>
            </small>
          </p>
          <div className="flex w-full items-center">
            <div className="grid h-[2px] flex-grow card bg-primary rounded-box place-items-center">
              <hr />
            </div>
            <div className="divider divider-horizontal text-primary">OR</div>
            <div className="grid h-[2px] flex-grow card bg-primary rounded-box place-items-center">
              <hr />
            </div>
          </div>
          <button
            className="btn btn-primary btn-outline w-full"
            onClick={() => signInWithGoogle()}
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
