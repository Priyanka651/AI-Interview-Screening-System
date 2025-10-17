
import React from "react";
import Input from "./Input"; // Reuse your Input component

const CompanyInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Company Information</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input label="Company Name" required />
        <Input label="Company Website" placeholder="https://www.company.com" type="url" required />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input label="Industry" required />
        <Input label="Number of Employees" type="number" required />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <label className="block text-sm font-medium mb-1">Company Description</label>
        <textarea
          className="w-full border rounded p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          rows="4"
          placeholder="Briefly describe your company..."
          required
        />
      </div>

      <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
              >
        Save Company Info
      </button>
    </div>
  );
};

export default CompanyInfo;
