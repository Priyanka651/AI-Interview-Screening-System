import React from "react";

export default function RemoteOptions() {
  const options = ["100% Remote", "Hybrid Remote", "Option for Remote"];

  return (
    <section className="py-16 px-8 bg-blue-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-6">What kind of remote work are you looking for?</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {options.map((opt, i) => (
          <div key={i} className="bg-white text-gray-800 p-6 rounded-lg shadow-md w-64">
            {opt}
          </div>
        ))}
      </div>
<button className="w-40 mt-6 px-6 py-2 rounded-lg text-white
                   bg-gradient-to-r from-orange-400 to-orange-500
                   hover:from-orange-500 hover:to-orange-700 transition">
  Next
</button>


    </section>
  );
}
