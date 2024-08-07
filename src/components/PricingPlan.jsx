import React from "react";
import { Link } from "react-router-dom";

const PricingPlan = ({ planName, price, details }) => (
  <div className="p-6 py-8">
    <h6 className="font-bold uppercase mb-5 text-indigo-600">{planName}</h6>
    <div className="flex mb-5">
      <span className="text-xl font-semibold">$</span>
      <span className="price text-4xl font-semibold mb-0">{price}</span>
      <span className="text-xl font-semibold self-end mb-1">/mo</span>
    </div>
    <ul className="list-none text-slate-400">
      {details.map((detail, index) => (
        <li key={index} className="mb-1 flex">
          <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
          {detail}
        </li>
      ))}
    </ul>
    <Link
      to={{
        pathname: "/checkout",
        state: { planName, price },
      }}
      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
    >
      Get Started
    </Link>
  </div>
);

export const StarterPlan = () => (
  <PricingPlan
    planName="Starter"
    price="40"
    details={[
      "5000 messages per month",
      "Source Files",
      "Free Appointments",
      "Enhanced Security",
    ]}
  />
);

export const BusinessPlan = () => (
  <PricingPlan
    planName="Business"
    price="120"
    details={[
      "20000 messages per month",
      "Source Files",
      "Free Appointments",
      "Priority Support",
      "Enhanced Security",
    ]}
  />
);

export const ProPlan = () => (
  <PricingPlan
    planName="Pro"
    price="300"
    details={[
      "Unlimited messages per month",
      "Source Files",
      "Free Appointments",
      "Priority Support",
      "Enhanced Security",
      "Custom Integrations",
    ]}
  />
);
