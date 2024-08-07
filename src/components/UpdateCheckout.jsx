import { Header } from "./Header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export const UpdateCheckout = () => {
  const { plan } = useParams();
  const [phone, setPhone] = useState("");
  const [orderData, setOrderData] = useState({
    amount: null,
    currency: "INR",
    plan: plan,
    order_id: null,
    packageId: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    packagePrice: "",
    subscription_id: "", // Ensure this matches the backend field name
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: null,
    city: "",
    pinCode: "",
    contactNumber: "",
  });

  const countries = Country.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.isoCode,
    ...country,
  }));

  const updatedStates = (countryIsoCode) =>
    State.getStatesOfCountry(countryIsoCode).map((state) => ({
      label: state.name,
      value: state.isoCode,
      ...state,
    }));

  const updatedCities = (countryIsoCode, stateIsoCode) =>
    City.getCitiesOfState(countryIsoCode, stateIsoCode).map((city) => ({
      label: city.name,
      value: city.name,
      ...city,
    }));

  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch package_price from pricing-master endpoint
    axios
      .get(`https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/pricing-master/${plan}`)
      .then((response) => {
        console.log("API Response:", response.data); // Log the response
        setOrderData((prevData) => ({
          ...prevData,
          amount: response.data.packagePrice * 100,
          packageId: response.data.packageId, // Ensure packagePrice is used correctly
        }));
      })
      .catch((error) => {
        console.error("Error fetching package price:", error);
        setError("Failed to fetch package price");
      });

    fetch("https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/get-payment-info", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to see its structure
        if (data.data && data.data.length > 0) {
          const fetchedData = data.data[0];
          setPaymentInfo({
            packagePrice: fetchedData.packagePrice,
            subscription_id: fetchedData.subscriptionId, // Ensure this is the correct field
          });
        }
      })
      .catch((error) =>
        console.error("Error fetching additional data:", error)
      );
  }, [plan]);

  useEffect(() => {
    const validateForm = () => {
      const requiredFields = [
        "firstName",
        "lastName",
        "email",
        "address",
        "pinCode",
      ];
      const isValid = requiredFields.every(
        (field) => formData[field].trim() !== ""
      );
      setIsFormValid(isValid && phone.trim() !== "");
    };

    validateForm();
  }, [formData, phone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    if (actionMeta.name === "country") {
      setFormData((prevData) => ({
        ...prevData,
        country: selectedOption,
        state: null,
        city: "",
      }));
    } else if (actionMeta.name === "state") {
      setFormData((prevData) => ({
        ...prevData,
        state: selectedOption,
        city: "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [actionMeta.name]: selectedOption,
      }));
    }
  };

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get(
          `https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/get-id/${formData.email}`
        );
        setUserId(response.data.loginId);
        console.log(response.data.loginId);
      } catch (error) {
        console.error("Error fetching user ID:", error);
        setError("Failed to fetch user ID");
      }
    };

    if (formData.email.trim() !== "") {
      fetchUserId();
    }
  }, [formData.email]);

  const handleSubscription = async () => {
    const packageData = {
      packageId: orderData.packageId,
    };
    try {
      const response = await axios.post(
        "https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/create-subscription",
        packageData
      );

      const subscriptionId = response.data.id;

      const options = {
        key: "rzp_test_LBjhBzKgcEj7hb",
        subscription_id: subscriptionId,
        name: "Acme Corp",
        description: "Subscription for starter package",
        handler: async function (response) {
          console.log(
            "Subscription successful with ID:",
            response.razorpay_subscription_id
          );
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Signature:", response.razorpay_signature);

          const paymentData = {
            payment_id: response.razorpay_payment_id,
            subscriptionId: response.razorpay_subscription_id,
            package_id: plan,
            package_name: plan,
            payment_status: "success",
            payment_date: new Date().toISOString(),
            userId: userId,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            address2: formData.address2,
            email: formData.email,
            country: formData.country.label,
            state: formData.state ? formData.state.label : "",
            city: formData.city ? formData.city.label : "",
            pinCode: formData.pinCode,
            contactNumber: phone,
            packagePrice: orderData.amount / 100,
          };

          try {
            await axios.post(
              "https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/payments",
              paymentData
            );
            alert("Subscription and billing recorded successfully.");
          } catch (error) {
            alert("Failed to record subscription.");
            setError(
              error.response
                ? error.response.data.message
                : "Failed to record subscription."
            );
          }
        },
        prefill: {
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          contact: phone,
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("subscription.failed", function (response) {
        alert(`Subscription failed: ${response.error.description}`);
        setError(`Subscription failed: ${response.error.description}`);
      });

      rzp1.open();
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Internal Server Error"
      );
    }
  };

  const handleCancelSubscription = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Cancel Subscription Request Payload:", {
        subscription_id: paymentInfo.subscription_id,
      });

      const response = await axios.post(
        "https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/cancel-update-subscription",
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

      // Update UI or state as needed
    } catch (error) {
      console.error(
        "Error cancelling subscription:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to cancel subscription.");
    }
  };

  const handleUpdateSubscription = async () => {
    handleCancelSubscription();
    handleSubscription();
  };

  return (
    <>
      <Header />
      <br />
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <h3 className="text-xl leading-normal font-semibold">
                  Billing address
                </h3>
                <form>
                  <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        First Name : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="First Name:"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        Last Name : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Last Name:"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="lg:col-span-12">
                      <label className="form-label font-semibold">
                        Your Email : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="lg:col-span-12">
                      <label className="form-label font-semibold">
                        Address : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Address:"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="lg:col-span-12">
                      <label className="form-label font-semibold">
                        Address 2 :
                      </label>
                      <input
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Address:"
                        id="address2"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="lg:col-span-4">
                      <label className="font-semibold">Country:</label>
                      <Select
                        name="country"
                        value={formData.country}
                        onChange={handleSelectChange}
                        options={updatedCountries}
                      />
                    </div>
                    <div className="lg:col-span-4">
                      <label className="font-semibold">State:</label>
                      <Select
                        name="state"
                        options={
                          formData.country
                            ? updatedStates(formData.country.value)
                            : []
                        }
                        value={formData.state}
                        onChange={handleSelectChange}
                      />
                    </div>
                    <div className="lg:col-span-4">
                      <label className="font-semibold">City:</label>
                      <Select
                        name="city"
                        options={
                          formData.country && formData.state
                            ? updatedCities(
                                formData.country.value,
                                formData.state.value
                              )
                            : []
                        }
                        value={formData.city}
                        onChange={handleSelectChange}
                      />
                    </div>
                    <div className="lg:col-span-4">
                      <label className="form-label font-semibold">
                        Pin Code : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-0"
                        placeholder="Pin:"
                        id="pinCode"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                        required
                      />
                    </div>
                    <div className="lg:col-span-4">
                      <label className="form-label font-semibold">
                        Contact Number : <span className="text-red-600">*</span>
                      </label>
                      <PhoneInput
                        country={"in"}
                        enableSearch={true}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        containerStyle={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </form>

                <h3 className="text-xl leading-normal font-semibold mt-6">
                  Payment
                </h3>
                <div className="mt-4">
                  <input
                    type="button"
                    onClick={handleUpdateSubscription}
                    disabled={!isFormValid}
                    className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 
                            text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 
                            hover:border-indigo-700 text-white rounded-md w-full"
                    value="Update Plan"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-semibold">Your Package</h5>
                  <a
                    href="javascript:void(0)"
                    className="bg-indigo-600 flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5"
                  >
                    1
                  </a>
                </div>
                <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold">
                        {capitalizeFirstLetter(plan)}
                      </h5>
                    </div>
                    <p className="text-slate-400 font-semibold">
                      $ {orderData.amount / 100}
                      {console.log(orderData.amount / 100)}
                    </p>
                  </div>
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">Total (USD)</h5>
                    </div>
                    <p className="font-semibold">$ {orderData.amount / 100}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Back to top */}
      <a
        href="#"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-indigo-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up" />
      </a>
      {/* Back to top */}
    </>
  );
};
