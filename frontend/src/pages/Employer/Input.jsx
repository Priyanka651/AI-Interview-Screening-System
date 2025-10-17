import React from "react";

const Input = ({ label, type = "text", placeholder, required }) => (
  <div>
    <label className="block text-sm font-medium mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border rounded p-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
      required={required}
    />
  </div>
);

export default Input;
