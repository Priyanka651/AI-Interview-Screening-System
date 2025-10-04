import React from "react";
import msLogo from "../assets/ms.png";
import googleLogo from "../assets/google.png";
import amaLogo from "../assets/ama.png";
import metaLogo from "../assets/meta.png";

export default function Companies() {
  return (
    <section className="px-2 py-10 text-center">
      <h1 className="text-orange-600 font-bold uppercase tracking-wide">
        Awesome Companies Hiring for Remote Jobs*
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-5">
        <img src={msLogo} alt="ms" className="w-24 h-auto object-contain" />
        <img src={googleLogo} alt="google" className="w-15 h-auto object-contain" />
        <img src={amaLogo} alt="ama" className="w-25 h-auto object-contain" />
        <img src={metaLogo} alt="meta" className="w-24 h-auto object-contain" />
      </div>
    </section>
  );
}
