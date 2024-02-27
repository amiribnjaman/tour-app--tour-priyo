import React from "react";

export default function PopularTours() {
  return (
    <div className="w-[88%] mx-auto mt-24 mb-14 ">
      <div>
        <h3 className="text-2xl font-bold text-[#1C3C6B]">
          Popular Tours
        </h3>
      </div>

      {/*---------------Destination carousal body----------- */}
      <div className="mt-6 flex gap-4">
        <div className="w-[210px] h-[180px] rounded-md bg-[#deecf4] relative">
          <h5 className="absolute bottom-4 left-10">Cox's Bazar</h5>
        </div>
        <div className="w-[210px] h-[180px] rounded-md bg-[#deecf4] relative">
          <h5 className="absolute bottom-4 left-10">Sajek</h5>
        </div>
        <div className="w-[210px] h-[180px] rounded-md bg-[#deecf4] relative">
          <h5 className="absolute bottom-4 left-10">Cox's Bazar</h5>
        </div>
        <div className="w-[210px] h-[180px] rounded-md bg-[#deecf4] relative">
          <h5 className="absolute bottom-4 left-10">Sajek</h5>
        </div>
        <div className="w-[210px] h-[180px] rounded-md bg-[#deecf4] relative">
          <h5 className="absolute bottom-4 left-10">Sajek</h5>
        </div>
      </div>
    </div>
  );
}
