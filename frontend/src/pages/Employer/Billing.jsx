import React from "react";
import Input from "./Input"; // Reuse your Input component

const Billing = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Billing Information</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input label="Cardholder Name" required />
        <Input label="Card Number" type="text" placeholder="1234 5678 9012 3456" required />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input label="Expiry Date" type="month" required />
        <Input label="CVV" type="password" placeholder="123" required />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <Input label="Billing Address" required />
      </div>

      <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
              >
        Save Billing Info
      </button>
    </div>
  );
};

export default Billing;
