
import React, { useState } from "react";
import Input from "./Input";

const Billing = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  const plans = [
    { name: "Basic", price: "$29/mo", description: "Ideal for startups hiring a few roles." },
    { name: "Pro", price: "$79/mo", description: "For growing companies posting multiple jobs." },
    { name: "Enterprise", price: "Custom", description: "Tailored solutions for large organizations." },
  ];

  return (
    <section className="w-full flex flex-col items-center py-12 px-6 bg-gray-50">
      {/* --- Plans Section --- */}
      <h2 className="text-3xl font-bold text-teal-700 mb-10 text-center">
        Choose Your Plan & Enter Billing Information
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={`w-[250px] h-[230px] p-5 rounded-xl border-2 cursor-pointer text-center shadow-md transition-transform transform hover:scale-105 ${
              selectedPlan === plan.name
                ? "border-orange-500 bg-orange-50 shadow-lg"
                : "border-gray-200 bg-white hover:border-orange-300"
            }`}
          >
            <h3 className="text-xl font-semibold text-teal-700 mb-1">{plan.name}</h3>
            <p className="text-gray-600 text-sm mb-2 h-[40px]">{plan.description}</p>
            <p className="text-2xl font-bold text-orange-500 mb-3">{plan.price}</p>
            <button
              className={`w-full py-2 rounded-md font-semibold text-sm transition ${
                selectedPlan === plan.name
                  ? "bg-gradient-to-r from-orange-500 to-teal-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {selectedPlan === plan.name ? "Selected" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>

      {/* --- Billing Section --- */}
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-teal-700">Billing Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input label="Cardholder Name" required />
          <Input
            label="Card Number"
            type="text"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input label="Expiry Date" type="month" required />
          <Input label="CVV" type="password" placeholder="123" required />
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <Input label="Billing Address" required />
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold mb-2 text-teal-700">Order Summary</h4>
          <p>
            Plan: <span className="font-medium text-orange-600">{selectedPlan}</span>
          </p>
          <p>
            Total:{" "}
            <span className="font-medium text-orange-600">
              {plans.find((p) => p.name === selectedPlan)?.price}
            </span>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
        >
          Save Billing Info
        </button>
      </div>
    </section>
  );
};

export default Billing;









// import React from "react";
// import Input from "./Input";

// const Billing = () => {
//   return (
//     <section className="w-full flex justify-center items-center py-10 px-6 bg-gray-50">
//       <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
//         <h3 className="text-2xl font-bold mb-6 text-teal-700">Billing Information</h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <Input label="Cardholder Name" required />
//           <Input
//             label="Card Number"
//             type="text"
//             placeholder="1234 5678 9012 3456"
//             required
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <Input label="Expiry Date" type="month" required />
//           <Input label="CVV" type="password" placeholder="123" required />
//         </div>

//         <div className="grid grid-cols-1 gap-4 mb-4">
//           <Input label="Billing Address" required />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
//         >
//           Save Billing Info
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Billing;



