import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assests/images/register.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loding from "../../components/Loding";
import useToken from "../../hooks/useToken";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();

  let registerError;

  // Register WITH EMAIL & PASSWORD
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // LOGIN WITH GOOGLE
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updatedError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  if (token) {
    navigate("/home");
  }
  // User
  // if (user || gUser) {
  //   navigate("/home");
  // }
  // Loding
  if (loading || gLoading || updating) {
    return <Loding></Loding>;
  }
  // Error
  if (error || gError || updatedError) {
    registerError = (
      <p className="text-error">
        {error?.message} || {gError?.message || updatedError?.message}
      </p>
    );
  }

  // collect data from input form
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset();
    navigate("/home");
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 card my-20 mx-6 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">REGISTER</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
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
            {registerError}
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="REGISTER"
            />
          </form>
          <p>
            <small>
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                please login
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
        <figure>
          <img src={registerImg} alt="Album" />
        </figure>
      </div>
    </div>
  );
};

export default Register;
