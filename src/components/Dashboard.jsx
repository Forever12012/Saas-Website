import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { NoPlanComponent } from "./NoPlanComponent";
import { Header } from "./Header";

export const Dashboard = () => {
  const [payment, setPayment] = useState([]);

  console.log(payment);

  const [paymentHistory, setPaymentHistory] = useState([]);

  console.log(paymentHistory);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    contact_number: "",
    profilePic: "",
  });

  const [userJourneyData, setUserJourneyData] = useState({
    userId: "",
    companyName: "",
    country: "",
    state: "",
    city: "",
    websiteLink: "",
    email: "",
    alternativeEmail: "",
    phoneNumber: "",
    altPhoneNumber: "",
    fbSocial: "",
    linkedinSocial: "",
    instagramSocial: "",
    userRequirements: "",
  });
  console.log(userJourneyData);

  const [billingInfo, setBillingInfo] = useState({
    id: "",
    name: "",
    packageName: "",
    packagePrice: "",
    isDeleted: "",
    country: "",
    state: "",
    city: "",
    contact_number: "",
    address: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    packagePrice: "",
    subscription_id: "", // Ensure this matches the backend field name
    userId: "",
  });

  const [activeSection, setActiveSection] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/index/protected", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data.user);
          fetchFacebookProfilePic(data.user.email);
        })
        .catch((error) => console.error("Error fetching user data:", error));

      fetch("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/index/get-data", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.data && data.data.length > 0) {
            setUserData((prevUserData) => ({
              ...prevUserData,
              ...data.data[0],
            }));
          }
        })
        .catch((error) =>
          console.error("Error fetching additional data:", error)
        );

      fetch("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/get-billing-info", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.data && data.data.length > 0) {
            setBillingInfo((prevBillingInfo) => ({
              ...prevBillingInfo,
              ...data.data[0],
            }));
          }
        })
        .catch((error) =>
          console.error("Error fetching additional data:", error)
        );

      fetch("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/get-payment-info", {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); // Log the data to see its structure
          if (data.data && data.data.length > 0) {
            const fetchedData = data.data[0];
            setPaymentInfo({
              packagePrice: fetchedData.packagePrice,
              subscription_id: fetchedData.subscriptionId,
              userId: fetchedData.userId, // Ensure this is the correct field
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching additional data:", error);
        });

      fetch("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/get-payment-info", {
        method: "GET",
      })
        .then((response) => {
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          const data = result.data; // Access the array inside the object
          console.log(data);
          setPayment(data); // Store the data in the state
        })
        .catch((error) => {
          console.error("Error fetching additional data:", error);
        });

      fetch("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/get-payment-history", {
        method: "GET",
      })
        .then((response) => {
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          const data = result.data; // Access the array inside the object
          console.log(data);
          setPaymentHistory(data); // Store the data in the state
        })
        .catch((error) => {
          console.error("Error fetching additional data:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (paymentInfo.userId) {
      fetch(
        ` https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/userJourney/userJourney/${paymentInfo.userId}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // Check if data is an array and has at least one element
          if (Array.isArray(data) && data.length > 0) {
            const userJourney = data[0];
            setUserJourneyData({
              userId: userJourney.userId || "",
              companyName: userJourney.companyName || "",
              country: userJourney.country || "",
              state: userJourney.state || "",
              city: userJourney.city || "",
              websiteLink: userJourney.websiteLink || "",
              email: userJourney.email || "",
              alternativeEmail: userJourney.alternativeEmail || "",
              phoneNumber: userJourney.phoneNumber || "",
              altPhoneNumber: userJourney.altPhoneNumber || "",
              fbSocial: userJourney.fbSocial || "",
              linkedinSocial: userJourney.linkedinSocial || "",
              instagramSocial: userJourney.instagramSocial || "",
              attachment: userJourney.attachment || null,
              filePath: userJourney.filePath || null,
              userRequirement: userJourney.userRequirement || "",
            });
          } else {
            console.warn("Unexpected data format:", data);
          }
        })
        .catch((error) =>
          console.error("Error fetching user journey data:", error)
        );
    }
  }, [paymentInfo.userId]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const fetchFacebookProfilePic = (email) => {
    const accessToken =
      "EAAGrU5aygIABOwsauWkgklh1jFvFZBnDKEpVNLZAjuXsgJqZAAOeZC7gN8lPmcAjdz9JVidyURnlusZCmLAbiqwXItTaZAkC7VHSr1BeX1Oo3ZCWxyZCWwnDghmbAZCXWzJlgV2gC08xPZAnCEOo7Chs2VOI9uiZCnDjzj6UCMBUrQBEvoxjfzm2sUNpm78ZBdq1iF8j8XKoEivGVuj61egJJhhAV8jFDAZDZD";
    const graphApiUrl = `https://graph.facebook.com/v12.0/${email}?fields=picture&access_token=${accessToken}`;

    fetch(graphApiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.picture && data.picture.data && data.picture.data.url) {
          setUserData((prevUserData) => ({
            ...prevUserData,
            profilePic: data.picture.data.url,
          }));
        }
      })
      .catch((error) =>
        console.error("Error fetching Facebook profile pic:", error)
      );
  };

  const handleSaveName = () => {
    const token = localStorage.getItem("token");
    fetch("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/index/updateName", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: tempName }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          name: tempName,
        }));
        setIsEditingName(false);
      })
      .catch((error) => console.error("Error updating name:", error));
  };

  const handleEditName = () => {
    setIsEditingName(true);
    setTempName(userData.name);
  };

  const handleCancelSubscription = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to cancel your subscription?"
    );

    if (!isConfirmed) {
      return; // User cancelled, do nothing
    }

    try {
      const token = localStorage.getItem("token");
      console.log("Cancel Subscription Request Payload:", {
        subscription_id: paymentInfo.subscription_id,
      });

      const response = await axios.post(
        "https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/cancel-subscription",
        {
          subscription_id: paymentInfo.subscription_id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Response from cancel subscription:", response.data);
      alert("Subscription cancelled successfully!");
      window.location.reload();
      // Update UI or state as needed
    } catch (error) {
      console.error(
        "Error cancelling subscription:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to cancel subscription.");
    }
  };

  return (
    <>
      {/* Start Navbar */}
      <nav id="topnav" className="defaultscroll is-sticky">
        <div className="container relative">
          <Header />

          <div id="navigation"></div>
          {/*end navigation*/}
        </div>
        {/*end container*/}
      </nav>
      {/*end header*/}
      {/* End Navbar */}
      {/* Start Hero */}
      <section className="relative lg:pb-24 pb-16">
        <div className="container-fluid relative">
          <div className="profile-banner relative text-transparent">
            <div className="relative shrink-0">
              <img
                src="assets/images/blog/bg.jpg"
                className="h-80 w-full object-cover"
                id="profile-banner"
                alt=""
              />
              <div className="absolute inset-0 bg-black/70" />
              <label
                className="absolute inset-0 cursor-pointer"
                htmlFor="pro-banner"
              />
            </div>
          </div>
        </div>
        {/*end container*/}
        <div className="container relative md:mt-24 mt-16">
          <div className="md:flex">
            <div className="lg:w-1/4 md:w-1/3 md:px-3">
              <div className="relative md:-mt-48 -mt-32">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                  <div className="profile-pic text-center mb-5">
                    <div>
                      <div className="relative size-28 mx-auto">
                        <img
                          src={
                            userData.profilePic || "assets/images/client/06.jpg"
                          } // Use Facebook profile pic if available, otherwise fallback
                          className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                          id="profile-image"
                          alt=""
                        />
                        <label
                          className="absolute inset-0 cursor-pointer"
                          htmlFor="pro-img"
                        />
                      </div>
                      <div className="mt-4">
                        <h5 className="text-lg font-semibold">
                          {userData.name}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700">
                    <ul
                      className="list-none sidebar-nav mb-0 mt-3"
                      id="navmenu-nav"
                    >
                      <li className="navbar-item account-menu">
                        <a
                          href="#"
                          onClick={() => setActiveSection("profile")}
                          className="navbar-link text-slate-400 flex items-center py-2 rounded"
                        >
                          <span className="me-2 text-[18px] mb-0">
                            <i className="uil uil-dashboard" />
                          </span>
                          <h6 className="mb-0 font-semibold">Profile</h6>
                        </a>
                      </li>
                      <li className="navbar-item account-menu">
                        <a
                          href="#"
                          onClick={() => setActiveSection("billing")}
                          className="navbar-link text-slate-400 flex items-center py-2 rounded"
                        >
                          <span className="me-2 text-[18px] mb-0">
                            <i className="uil uil-diary-alt" />
                          </span>
                          <h6 className="mb-0 font-semibold">Subscriptions</h6>
                        </a>
                      </li>
                      <li className="navbar-item account-menu">
                        <a
                          href="#"
                          onClick={() => setActiveSection("payment")}
                          className="navbar-link text-slate-400 flex items-center py-2 rounded"
                        >
                          <span className="me-2 text-[18px] mb-0">
                            <i className="uil uil-credit-card" />
                          </span>
                          <h6 className="mb-0 font-semibold">Payment</h6>
                        </a>
                      </li>
                      <li className="navbar-item account-menu">
                        <a
                          href="#"
                          onClick={() => setActiveSection("company")}
                          className="navbar-link text-slate-400 flex items-center py-2 rounded"
                        >
                          <span className="me-2 text-[18px] mb-0">
                            <i className="uil uil-info-circle" />
                          </span>
                          <h6 className="mb-0 font-semibold">
                            Company Details
                          </h6>
                        </a>
                      </li>

                      <li className="navbar-item account-menu">
                        <a
                          href="#"
                          onClick={handleSignOut}
                          className="navbar-link text-slate-400 flex items-center py-2 rounded"
                        >
                          <span className="me-2 text-[18px] mb-0">
                            <i className="uil uil-power" />
                          </span>
                          <h6 className="mb-0 font-semibold">Sign Out</h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
              {activeSection === "profile" && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  {/* Display billing info if present */}
                  {userData.billing && userData.billing.length > 0 ? (
                    <>
                      {userData.billing.map((bill, index) => (
                        <div
                          key={index}
                          className="mb-6 border-b border-gray-200 pb-4"
                        >
                          <div className="flex flex-col space-y-6">
                            {/* User Info */}
                            <div className="flex flex-col space-y-4">
                              <div className="flex items-center space-x-4">
                                <i
                                  data-feather="map-pin"
                                  className="fea icon-ex-md text-slate-400"
                                ></i>
                                <div className="flex-1">
                                  <h6 className="text-indigo-600 dark:text-white font-semibold">
                                    Name:
                                  </h6>
                                  <p className="text-slate-500">
                                    {userData.name}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <i
                                  data-feather="mail"
                                  className="fea icon-ex-md text-slate-400"
                                ></i>
                                <div className="flex-1">
                                  <h6 className="text-indigo-600 dark:text-white font-semibold">
                                    Email:
                                  </h6>
                                  <p className="text-slate-500">
                                    {userData.email}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Billing Address */}
                            <div className="flex flex-col space-y-4">
                              <div className="flex items-center space-x-4">
                                <i
                                  data-feather="map"
                                  className="fea icon-ex-md text-slate-400"
                                ></i>
                                <div className="flex-1">
                                  <h6 className="text-indigo-600 dark:text-white font-semibold">
                                    Address:
                                  </h6>
                                  <p className="text-slate-500">
                                    {bill.address}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <i
                                  data-feather="globe"
                                  className="fea icon-ex-md text-slate-400"
                                ></i>
                                <div className="flex-1">
                                  <h6 className="text-indigo-600 dark:text-white font-semibold">
                                    Country:
                                  </h6>
                                  <p className="text-slate-500">
                                    {bill.country}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <i
                                  data-feather="map"
                                  className="fea icon-ex-md text-slate-400"
                                ></i>
                                <div className="flex-1">
                                  <h6 className="text-indigo-600 dark:text-white font-semibold">
                                    State:
                                  </h6>
                                  <p className="text-slate-500">{bill.state}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <i
                                  data-feather="map-pin"
                                  className="fea icon-ex-md text-slate-400"
                                ></i>
                                <div className="flex-1">
                                  <h6 className="text-indigo-600 dark:text-white font-semibold">
                                    City:
                                  </h6>
                                  <p className="text-slate-500">{bill.city}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <i
                                  data-feather="phone"
                                  className="fea icon-ex-md text-slate-400"
                                ></i>
                                <div className="flex-1">
                                  <h6 className="text-indigo-600 dark:text-white font-semibold">
                                    Contact Number:
                                  </h6>
                                  <p className="text-slate-500">
                                    {bill.contact_number}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="space-y-4">
                      <h5 className="text-2xl font-semibold mb-4">
                        Personal Details
                      </h5>
                      <div className="flex items-center space-x-4">
                        <i
                          data-feather="user"
                          className="fea icon-ex-md text-slate-400"
                        ></i>
                        <div className="flex-1">
                          <h6 className="text-indigo-600 dark:text-white font-semibold">
                            Name:
                          </h6>
                          <p className="text-slate-500">{userData.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <i
                          data-feather="mail"
                          className="fea icon-ex-md text-slate-400"
                        ></i>
                        <div className="flex-1">
                          <h6 className="text-indigo-600 dark:text-white font-semibold">
                            Email:
                          </h6>
                          <p className="text-slate-500">{userData.email}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Always show the edit button */}
                  <button
                    onClick={isEditingName ? handleSaveName : handleEditName}
                    className={`mt-4 px-6 py-2 ${
                      isEditingName
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white rounded-md`}
                  >
                    {isEditingName ? "Save" : "Edit"}
                  </button>
                  {isEditingName && (
                    <button
                      onClick={() => setIsEditingName(false)}
                      className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Cancel
                    </button>
                  )}

                  {/* Show name edit inputs when editing */}
                  {isEditingName && (
                    <div className="mt-4 flex items-center space-x-4">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                      />
                      <button
                        onClick={handleSaveName}
                        className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setIsEditingName(false)}
                        className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeSection === "billing" && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Billing Info</h2>
                  <div className="bg-white p-4 rounded-md shadow-md">
                    {billingInfo &&
                    billingInfo.billing &&
                    billingInfo.billing.length > 0 &&
                    billingInfo.billing[0].isDeleted === false ? (
                      <div className="flex items-center justify-center lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0 mx-auto">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 ">
                          <div className="md:flex mt-6">
                            <div className="md:w-1/2 md:px-3">
                              <div className="flex items-center mb-4 justify-between">
                                <h5 className="text-xl font-semibold">
                                  Billing Info:
                                </h5>
                              </div>
                              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-lg font-semibold mb-2">
                                  {billingInfo.name}
                                </p>
                                <ul className="list-none">
                                  <li className="flex">
                                    <h6 className="text-indigo-600 dark:text-white font-medium">
                                      ID: {billingInfo.loginId}
                                    </h6>
                                  </li>
                                  <li className="flex mt-1">
                                    <h6 className="text-indigo-600 dark:text-white font-medium">
                                      Package Name:{" "}
                                      {billingInfo.billing[0].packageName}
                                    </h6>
                                  </li>
                                  <li className="flex mt-1">
                                    <h6 className="text-indigo-600 dark:text-white font-medium">
                                      Package Price:{" "}
                                      {billingInfo.billing[0].packagePrice}
                                    </h6>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="md:w-1/2 md:px-3 mt-[30] md:mt-0">
                              <div className="flex items-center mb-4 justify-between">
                                <h5 className="text-xl font-semibold">
                                  Shipping Address:
                                </h5>
                                <a href="#" className="text-indigo-600 text-lg">
                                  <i className="uil uil-edit align-middle"></i>
                                </a>
                              </div>
                              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                <ul className="list-none">
                                  <li className="flex">
                                    <i className="uil uil-map-marker text-lg me-2"></i>
                                    <h6 className="text-indigo-600 dark:text-white font-medium">
                                      {billingInfo.billing[0].address}
                                    </h6>
                                  </li>
                                  <li className="flex mt-1">
                                    <i className="uil uil-phone text-lg me-2"></i>
                                    <h6 className="text-indigo-600 dark:text-white font-medium">
                                      {billingInfo.billing[0].contact_number}
                                    </h6>
                                  </li>
                                  <li className="flex mt-1">
                                    <i className="uil uil-globe text-lg me-2"></i>
                                    <h6 className="text-indigo-600 dark:text-white font-medium">
                                      {billingInfo.billing[0].city},{" "}
                                      {billingInfo.billing[0].state}{" "}
                                      {billingInfo.billing[0].country}
                                    </h6>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <NoPlanComponent />
                    )}
                    {billingInfo &&
                      billingInfo.billing &&
                      billingInfo.billing.length > 0 && (
                        <div className="flex flex-wrap justify-around items-center mt-5 space-y-3 md:space-y-0 md:space-x-3">
                          <Link
                            to={`/updated-plans/${billingInfo.billing[0].packageName}`}
                            className="py-3 px-6 inline-block font-semibold tracking-wide border duration-300 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md transform hover:scale-105 shadow-lg"
                          >
                            Update Subscription
                          </Link>
                          <button
                            onClick={handleCancelSubscription}
                            className="py-3 px-6 inline-block font-semibold tracking-wide border duration-300 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md transform hover:scale-105 shadow-lg"
                          >
                            Cancel Subscription
                          </button>
                        </div>
                      )}
                  </div>
                </>
              )}

              {/* Add similar sections for billing, payment, invoice, etc. */}

              {activeSection === "payment" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Payment Information
                  </h2>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Payment ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Package ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Package Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Payment Status
                        </th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paymentHistory.map((payment) => (
                        <tr key={payment.payment_id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {payment.payment_id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {payment.package_id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {payment.packageName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {payment.payment_status}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {payment.subscriptionId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() =>
                                navigate(`/invoice/${payment.subscriptionId}`)
                              }
                              className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              View Invoice
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Add similar sections for billing, payment, invoice, etc. */}

              {activeSection === "company" && (
                <div>
                  <h5 className="text-xl font-semibold">Personal Details :</h5>
                  {userJourneyData.companyName ? (
                    <div className="mt-6">
                      <div className="flex items-center">
                        <i
                          data-feather="mail"
                          className="fea icon-ex-md text-slate-400 me-3"
                        ></i>
                        <div className="flex-1">
                          <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                            Company Name :
                          </h6>
                          <a href="#" className="text-slate-400">
                            {userJourneyData.companyName}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <i
                          data-feather="globe"
                          className="fea icon-ex-md text-slate-400 me-3"
                        ></i>
                        <div className="flex-1">
                          <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                            Website :
                          </h6>
                          <a href="#" className="text-slate-400">
                            {userJourneyData.websiteLink}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <i
                          data-feather="gift"
                          className="fea icon-ex-md text-slate-400 me-3"
                        ></i>
                        <div className="flex-1">
                          <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                            Email :
                          </h6>
                          <p className="text-slate-400 mb-0">
                            {userJourneyData.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <i
                          data-feather="map-pin"
                          className="fea icon-ex-md text-slate-400 me-3"
                        ></i>
                        <div className="flex-1">
                          <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                            Location :
                          </h6>
                          <a href="#" className="text-slate-400">
                            {`${userJourneyData.country || ""}, ${
                              userJourneyData.state || ""
                            }, ${userJourneyData.city || ""}`}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <i
                          data-feather="phone"
                          className="fea icon-ex-md text-slate-400 me-3"
                        ></i>
                        <div className="flex-1">
                          <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                            User Requirements :
                          </h6>
                          <a href="#" className="text-slate-400">
                            {userJourneyData.userRequirement}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center mt-3">
                        <i
                          data-feather="phone"
                          className="fea icon-ex-md text-slate-400 me-3"
                        ></i>
                        <div className="flex-1">
                          <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                            Cell No :
                          </h6>
                          <a href="#" className="text-slate-400">
                            {userJourneyData.phoneNumber}
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NoPlanComponent />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
