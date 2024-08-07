import { Link } from "react-router-dom";

export const NoPlanComponent = () => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
    <div className="flex flex-col items-center">
      <i className="uil uil-exclamation-triangle text-4xl text-red-500 mb-4"></i>
      <p className="text-lg font-medium mb-4">
        It looks like you don't have an active subscription.
      </p>
      <Link
        to="/get-pricing"
        className="py-3 px-6 inline-block font-semibold tracking-wide border duration-300 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md shadow-md transform hover:scale-105"
      >
        Explore Plans
      </Link>
    </div>
  </div>
);
