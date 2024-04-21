import React, { createContext, useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../provider/AuthProvider";
import { auth } from "../../firebase/firebase.config";

const Login = () => {
  const { signInUser, googleSigIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => console.log(error, error.message));
    //console.log(email, password);
  };

  const handleGoogleSignIn = () => {
    googleSigIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className=" w-2/3 h-3/5 mx-auto rounded-sm">
      <div className="hero max-h-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provide user id and password to login your account
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                New here ? <Link to="/signUp">Sign-Up</Link>
              </p>
              <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                Sign in with google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
