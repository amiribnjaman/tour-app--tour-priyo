import React from "react";
import { Link } from "react-router-dom";
import campaignDiscount from "../../Assets/Images/campaign-discount.jpg";

export default function DealSectoin() {
  return (
    <div className="w-[88%] mx-auto mt-20 mb-14 ">
      {/*------------Deal Section Header---------- */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-3xl font-bold text-[#1C3C6B]">Hot Deals</h3>
        </div>
        <div>
          <ul className="flex gap-1 bg-white rounded-full px-2.5 py-1.5">
            <li>
              <Link className="py-1 px-6 text-sm bg-[#ECF3FE] rounded-full">
                All
              </Link>
            </li>
            <li>
              <Link className="py-1 px-6 text-sm hover:bg-[#ECF3FE] rounded-full">
                Flight
              </Link>
            </li>
            <li>
              <Link className="py-1 px-6 text-sm hover:bg-[#ECF3FE] rounded-full">
                Hotel
              </Link>
            </li>
            <li>
              <Link className="py-1 px-6 text-sm hover:bg-[#ECF3FE] rounded-full">
                Tour
              </Link>
            </li>
            <li>
              <Link className="py-1 px-6 text-sm hover:bg-[#ECF3FE] rounded-full">
                Others
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Deal items */}
      <div className="flex gap-10">
        {/*--------Deal single item card--------*/}
        <div className=" w-[400px] p-4 bg-white rounded mt-14">
          {/* deal content */}
          <div className="flex">
            <div className="relative -top-6 -left-6 rounded-md">
              <img
                width={200}
                height={200}
                src={campaignDiscount}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <h4 className="font-semibold">For Pay in Cash Payment Method</h4>
              <h6>On base fare, till 31 Aug’23</h6>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between relative">
            <h6 className="bg-[#deecf4] rounded py-1 px-1.5 text-[12px] font-semibold">FLYPIC0823</h6>
            <button className="bg-[#FCCD03] font-semibold rounded px-2.5 py-1.5 absolute bottom-[-27px] right-1">
              Learn more
            </button>
          </div>
        </div>
        {/*--------Deal single item card--------*/}
        <div className="w-[400px] p-4 bg-white rounded mt-14">
          {/* deal content */}
          <div className="flex">
            <div className="relative -top-6 -left-6 rounded-md">
              <img
                width={200}
                height={200}
                src={campaignDiscount}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <h4 className="font-semibold">For Pay in Cash Payment Method</h4>
              <h6>On base fare, till 31 Aug’23</h6>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between relative">
            <h6 className="bg-[#deecf4] rounded py-1 px-1.5 text-[12px] font-semibold">FLYPIC0823</h6>
            <button className="bg-[#FCCD03] font-semibold rounded px-2.5 py-1.5 absolute bottom-[-27px] right-1">
              Learn more
            </button>
          </div>
        </div>
        {/*--------Deal single item card--------*/}
        <div className="w-[180px] p-4 bg-white rounded mt-14">
          {/* deal content */}
          <div className="flex">
            <div className="relative -top-6 -left-6 rounded-md">
              <img
                width={200}
                height={200}
                src={campaignDiscount}
                alt=""
                className="rounded-md"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between relative">
            <h6 className="bg-[#deecf4] rounded py-1 px-1.5 text-[12px] font-semibold">FLYPIC0823</h6>
          </div>
        </div>
      </div>
    </div>
  );
}