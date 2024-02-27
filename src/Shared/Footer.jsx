import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#1C3C6B] py-12">
      <div className="w-[88%] mx-auto flex gap-10">
        <div className="w-1/4">
          <h5 className="text-white font-semibold text-[17px] mb-2">
            Discover
          </h5>
          <div className="flex gap-4">
            <ul>
              <li className="text-white text-sm">Home</li>
              <li className="text-white text-sm">Terms</li>
              <li className="text-white text-sm">Talent & Culture</li>
            </ul>
            <ul>
              <li className="text-white text-sm">Refund Policy</li>
              <li className="text-white text-sm">EMI Policy</li>
              <li className="text-white text-sm">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="w-1/4">
          <h5 className="text-white font-semibold text-[17px] mb-2">
            Payment Methods
          </h5>
        </div>

        <div className="w-1/4">
          <h5 className="text-white font-semibold text-[17px] mb-2">
            Need Help?
          </h5>
          <p className="text-white text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
            consectetur nam nemo reiciendis, rerum cum labore provident eos
            excepturi.
          </p>
        </div>
        <div className="w-1/4">
          <h5 className="text-white font-semibold text-[17px] mb-2">
            Contact Info
          </h5>
          <ul>
            <li className="text-white text-sm">info@chologuri.com</li>
            <li className="text-white text-sm">+880 1373929</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 w-[88%] mx-auto" />
      <div className=" w-[88%] mx-auto flex justify-between">
        <a href="" className="text-white font-semibold">
          CholoGuri
        </a>
        <p className="text-white font-semibold text-[12px]">Copyright CholoGuri.com</p>
      </div>
    </div>
  );
}
