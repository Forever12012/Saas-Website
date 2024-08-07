import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateName = () => {
    if (values.name.length < 3) {
      setNameError("Name should be at least 3 letters long.");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(values.password)) {
      setPasswordError(
        "Password should be at least 6 characters long and include an uppercase letter, a number, and a special symbol."
      );
    } else {
      setPasswordError("");
    }
  };

  const validateForm = () => {
    validateName();
    validateEmail();
    validatePassword();
    if (
      values.name.length < 3 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ||
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        values.password
      )
    ) {
      return false;
    }
    if (!values.acceptTerms) {
      setErrorMessage("You must accept the terms and conditions.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    if (!validateForm()) {
      return;
    }
    axios
      .post("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/index/signup", values)
      .then((res) => {
        setSuccessMessage("Account created successfully!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 4000);
      })
      .catch((err) => {
        if (err.response?.status === 409) {
          setErrorMessage("Email already exists");
        } else {
          setErrorMessage(
            err.response?.data?.error || "An error occurred. Please try again."
          );
        }
      });
  };

  return (
    <section className="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.html')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div className="container relative">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <Link to="/">
              <img
                src="assets/images/logo-icon-64.png"
                className="mx-auto"
                alt="Logo"
              />
            </Link>
            <h5 className="my-6 text-xl font-semibold">Sign Up</h5>
            {successMessage && (
              <div className="mb-4 text-green-600 text-center">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-4 text-red-600 text-center">
                {errorMessage}
              </div>
            )}
            <form className="text-start" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="RegisterName">
                    Your Name:
                  </label>
                  <input
                    id="RegisterName"
                    type="text"
                    name="name"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    placeholder="Harry"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={validateName}
                    required
                  />
                  {nameError && (
                    <div className="mt-1 text-red-600">{nameError}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="RegisterEmail">
                    Email Address:
                  </label>
                  <input
                    id="RegisterEmail"
                    type="email"
                    name="email"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    placeholder="name@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={validateEmail}
                    required
                  />
                  {emailError && (
                    <div className="mt-1 text-red-600">{emailError}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="RegisterPassword">
                    Password:
                  </label>
                  <input
                    id="RegisterPassword"
                    type="password"
                    name="password"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={validatePassword}
                    required
                  />
                  {passwordError && (
                    <div className="mt-1 text-red-600">{passwordError}</div>
                  )}
                </div>
                <div className="mb-4">
                  <div className="flex items-center w-full mb-0">
                    <input
                      className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                      type="checkbox"
                      id="AcceptT&C"
                      name="acceptTerms"
                      checked={values.acceptTerms}
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="form-check-label text-slate-400"
                      htmlFor="AcceptT&C"
                    >
                      I Accept
                      <a href="#" className="text-indigo-600">
                        Terms And Condition
                      </a>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="submit"
                    className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                    value="Register"
                  />
                </div>
                <div className="text-center">
                  <span className="text-slate-400 me-2">
                    Already have an account ?
                  </span>
                  <Link
                    to="/login"
                    className="text-black dark:text-white font-bold inline-block"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
