import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { LoginSocialFacebook } from "reactjs-social-login";
import FacebookLogin from "./FacebookLogin";
import styled from "styled-components";

export const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [authType, setAuthType] = useState("");

  useEffect(() => {
    // Clear Google account details on component mount
    googleLogout();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    if (e.target.name === "email") {
      checkAuthType();
    }
  };

  const checkAuthType = () => {
    if (values.email) {
      axios
        .post("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/index/check-auth-type", {
          email: values.email,
        })
        .then((res) => {
          if (res.data.authType && res.data.authType !== "Standard") {
            setAuthType(res.data.authType);
            if (
              res.data.authType === "Google" ||
              res.data.authType === "Facebook"
            ) {
              navigate("/enter-code");
              // Call backend to send email with code
              axios
                .post("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/index/send-code", {
                  email: values.email,
                })
                .then((res) => {
                  console.log("Code sent successfully"); // Handle success (optional)
                })
                .catch((err) => {
                  console.error("Error sending code:", err); // Handle error (optional)
                });
            }
          }
        })
        .catch((err) => {
          console.error("Auth type check error: ", err);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    axios
      .post("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/index/login", values)
      .then((res) => {
        if (res.data.message === "Success") {
          console.log("Token received:", res.data.token); // Debugging line
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        } else {
          setError("Account not found");
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.error || "Account not found");
        } else if (err.request) {
          setError("No response from server. Please try again later.");
        } else {
          setError("An error occurred. Please try again.");
        }
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    try {
      const decodedToken = jwtDecode(credentialResponse.credential);
      if (decodedToken) {
        const { name, email } = decodedToken;
        axios
          .post("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/index/social-login", {
            name,
            email,
            authType: "Google",
          })
          .then((res) => {
            if (res.data.message === "Success") {
              localStorage.setItem("token", res.data.token);
              navigate("/dashboard");
            } else {
              setError("Account not found");
            }
          })
          .catch((err) => {
            setError("An error occurred. Please try again.");
          });
      } else {
        setError("Failed to decode token or token is invalid");
      }
    } catch (error) {
      setError("Error decoding token");
    }
  };

  const handleGoogleLoginError = () => {
    setError("Google login failed");
  };

  const handleFacebookLoginSuccess = (response) => {
    const { name, email } = response.data;
    axios
      .post("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/index/social-login", {
        name,
        email,
        authType: "Facebook",
      })
      .then((res) => {
        if (res.data.message === "Success") {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        } else {
          setError("Account not found");
        }
      })
      .catch((err) => {
        setError("An error occurred. Please try again.");
      });
  };

  const handleFacebookLoginError = (error) => {
    setError("Facebook login failed");
  };

  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
    & > *:not(:last-child) {
      margin-bottom: 8px; // Adjust the spacing as needed
    }
  `;

  return (
    <section className="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.html')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div className="container relative">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <Link
              to="/home"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              &larr; Back to Home
            </Link>
            <Link to="/">
              <img
                src="assets/images/logo-icon-64.png"
                className="mx-auto"
                alt="Logo"
              />
            </Link>
            <h5 className="my-6 text-xl font-semibold">Login</h5>
            {error && (
              <div className="mb-4 text-red-600 text-center">{error}</div>
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
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    placeholder="name@example.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} // Check auth type on blur
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="LoginPassword">
                    Password:
                  </label>
                  <input
                    id="LoginPassword"
                    type="password"
                    className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex justify-center mb-4">
                  <div className="flex items-center">
                    <p className="text-slate-400 mb-0">
                      <Link to="/forget-password" className="text-slate-400">
                        Forgot password?
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <input
                    type="submit"
                    className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                    value="Login / Sign in"
                  />
                </div>
                <div className="text-center">
                  <span className="text-slate-400 me-2">
                    Don't have an account?
                  </span>
                  <Link
                    to="/signup"
                    className="text-black dark:text-white font-bold inline-block"
                  >
                    Sign Up
                  </Link>
                  <br />
                  <button
                    className="text-black dark:text-white font-bold inline-block"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                  <div className="flex justify-center mt-4">
                    <ButtonContainer>
                      <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={handleGoogleLoginError}
                      />
                      <LoginSocialFacebook
                        appId="469850475626624"
                        onResolve={handleFacebookLoginSuccess}
                        onReject={handleFacebookLoginError}
                        scope="email"
                      >
                        <FacebookLogin />
                      </LoginSocialFacebook>
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
