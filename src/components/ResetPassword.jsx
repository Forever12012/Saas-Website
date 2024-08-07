import React, { useState } from "react";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (!token) {
      setMessage("Invalid or expired reset link");
      return;
    }

    try {
      const response = await fetch(
        "https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/resetPassword/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, newPassword }),
        }
      );
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("Failed to reset password");
    }
  };

  return (
    <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center bg-cover">
      <div className="container relative">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white shadow-md rounded-md">
            <h5 className="my-6 text-xl font-semibold">Reset Your Password</h5>
            <div className="grid grid-cols-1">
              <form className="text-start" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="newPassword">
                      New Password:
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="confirmPassword">
                      Confirm Password:
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="submit"
                      className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      value="Reset Password"
                    />
                  </div>
                  {message && <p className="text-red-500">{message}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
