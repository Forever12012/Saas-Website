import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Invoice() {
  const { subscriptionId } = useParams();
  console.log(subscriptionId);

  const [invoiceInfo, setInvoiceInfo] = useState({
    payment_id: "",
    package_name: "",
    purchase_date: "",
    orderId: "",
    userId: "",
    first_name: "",
    last_name: "",
    payment_date: "",
  });

  const [billingInfo, setBillingInfo] = useState([]);
  const [bill, setBill] = useState({
    contact_number: "",
    address: "",
    pin_code: "",
  });

  console.log(bill);

  useEffect(() => {
    const fetchInvoiceInfo = async () => {
      try {
        const response = await fetch(
          `https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/get-invoice-info/${subscriptionId}`
        );
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setInvoiceInfo((prevInvoiceInfo) => ({
            ...prevInvoiceInfo,
            ...data.data[0],
          }));
        }
      } catch (error) {
        console.error("Error fetching invoice info:", error);
      }
    };

    const fetchBillingInfo = async () => {
      try {
        const response = await fetch(
          `https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/payment/get-billing-history/${subscriptionId}`
        );
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          setBillingInfo(data.data); // Set the entire array of billing history

          // Set the first entry's details in the bill state, if applicable
          const firstEntry = data.data[0];
          setBill({
            contact_number: firstEntry.contact_number,
            address: firstEntry.address,
            pin_code: firstEntry.pin_code,
          });
        } else {
          console.log("No billing information found.");
        }
      } catch (error) {
        console.error("Error fetching billing info:", error);
      }
    };

    fetchInvoiceInfo();
    fetchBillingInfo();
  }, [subscriptionId]);

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Function to format the date in YYYY-MM-DD format (or customize as needed)
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };

    // Set the current date when the component mounts
    setCurrentDate(formatDate(new Date()));
  }, []);

  return (
    <div>
      <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="md:flex justify-center mt-24">
            <div className="lg:w-4/5 w-full">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                  <div className="md:flex justify-between">
                    <div>
                      <img
                        src="assets/images/logo-dark.png"
                        className="block dark:hidden"
                        alt=""
                      />
                      <img
                        src="assets/images/logo-light.png"
                        className="hidden dark:block"
                        alt=""
                      />
                    </div>
                    <div className="mt-6 md:mt-0 md:w-56">
                      <h5 className="text-lg font-semibold">Address:</h5>
                      <ul className="list-none">
                        <li className="flex mt-3">
                          <i
                            data-feather="map-pin"
                            className="size-4 me-3 mt-1"
                          ></i>
                          <a
                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            data-type="iframe"
                            className="lightbox text-slate-400"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            1419 Riverwood Drive, <br /> Redding, CA 96001
                          </a>
                        </li>
                        <li className="flex mt-3">
                          <i
                            data-feather="mail"
                            className="size-4 me-3 mt-1"
                          ></i>
                          <a
                            href="mailto:contact@example.com"
                            className="text-slate-400"
                          >
                            info@techwind.com
                          </a>
                        </li>
                        <li className="flex mt-3">
                          <i
                            data-feather="phone"
                            className="size-4 me-3 mt-1"
                          ></i>
                          <a
                            href="tel:+152534-468-854"
                            className="text-slate-400"
                          >
                            (+12) 1546-456-856
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="md:flex justify-between">
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold">Invoice Details :</h5>
                    <ul className="list-none">
                      <li className="flex mt-3">
                        <span className="w-32">Payment Id. :</span>
                        <span className="text-slate-400">
                          {invoiceInfo.payment_id}
                        </span>
                      </li>
                      <li className="flex mt-3">
                        <span className="w-32">Name :</span>
                        <span className="text-slate-400">
                          {invoiceInfo.first_name} {invoiceInfo.last_name}
                        </span>
                      </li>
                      <li className="flex mt-3">
                        <span className="w-32">Address :</span>
                        <span className="text-slate-400">
                          {bill.address}, {bill.pin_code}
                        </span>
                      </li>
                      <li className="flex mt-3">
                        <span className="w-32">Phone :</span>
                        <span className="text-slate-400">
                          {bill.contact_number}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 md:w-35">
                    <ul className="list-none">
                      <li className="flex mt-3">
                        <span className="w-30">Date :</span>
                        <span className="text-slate-400">{currentDate}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md mt-6">
                  <table className="w-full text-start text-slate-500 dark:text-slate-400">
                    <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                      <tr>
                        <th scope="col" className="text-center px-6 py-3 w-16">
                          No.
                        </th>
                        <th scope="col" className="text-start px-6 py-3">
                          Package Name
                        </th>
                        <th scope="col" className="text-center px-6 py-3 w-20">
                          Purchase Date
                        </th>
                        <th scope="col" className="text-center px-6 py-3 w-28">
                          Rate($)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {billingInfo.map((item, index) => (
                        <tr className="bg-white dark:bg-slate-900" key={index}>
                          <td className="text-center px-6 py-4">{index + 1}</td>
                          <th
                            scope="row"
                            className="text-start px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {item.packageName}
                          </th>
                          <td className="text-center px-6 py-4">
                            {invoiceInfo.payment_date}
                          </td>
                          <td className="text-center px-6 py-4">
                            {item.packagePrice}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="invoice-footer border-t border-gray-100 dark:border-gray-700 pt-6">
                  <div className="md:flex justify-between">
                    <div>
                      <div className="text-slate-400 text-center md:text-start">
                        <h6 className="mb-0">
                          Customer Services :{" "}
                          <p className="text-amber-500">(+12) 1546-456-856</p>
                        </h6>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="text-slate-400 text-center md:text-end">
                        <h6 className="mb-0">
                          <Link to={"/terms"} className="text-indigo-600">
                            Terms & Conditions
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Invoice;
