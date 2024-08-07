import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EnterCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");
    console.log("Token:", token); // Debugging line

    axios
      .post(
        "https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/verify-code",
        { code },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        if (res.data.message === "Success") {
          navigate("/dashboard");
        } else {
          setError("Invalid code. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error verifying code:", err);
        setError("An error occurred while verifying the code.");
      });
  };

  return (
    <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center bg-cover">
      <div className="container relative">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white shadow-md rounded-md">
            <h5 className="my-6 text-xl font-semibold">Enter the Code</h5>
            {error && (
              <div className="mb-4 text-red-600 text-center">{error}</div>
            )}
            <form className="text-start" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="LoginCode">
                    Code:
                  </label>
                  <input
                    id="LoginCode"
                    type="text"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
                    placeholder="Enter the Code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="submit"
                    className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                    value="Submit"
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
