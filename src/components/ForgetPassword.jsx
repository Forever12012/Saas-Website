import React, { useState } from "react";
import axios from "axios";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/resetPassword/forget-password",
        { email }
      );
      setMessage(response.data.error || response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center bg-cover">
      <div className="container relative">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white shadow-md rounded-md">
            <h5 className="my-6 text-xl font-semibold">Reset Your Password</h5>
            <p className="text-slate-400 mb-6">
              Please enter your email address. You will receive a link to create
              a new password via email.
            </p>
            {message && (
              <p
                className={
                  message.includes("success")
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {message}
              </p>
            )}
            <form className="text-start" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="LoginEmail">
                    Email Address:
                  </label>
                  <input
                    id="LoginEmail"
                    type="email"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="submit"
                    className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                    value="Send"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
