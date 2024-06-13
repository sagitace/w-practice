import React from "react";
import Image from "next/image";

const Testportal = () => {
  return (
    <div className="landing m-4 rounded-md p-4">
      <div className="border px-10 inner-landing rounded-md p-3 bg-[url('/assets/bg.jpg')] bg-cover">
        <div className="grid grid-cols-3 min-[768px]:grid-cols-4 gap-3 pt-4">
          <div className="col-1">
            <Image
              className="br-round border-2 border-shadow object-cover"
              src="/assets/dp.jpg"
              alt="default picture"
              width={220}
              height={200}
            />{" "}
          </div>
          <div className="col-span-2 col-2 lg:pl-5 md:pl-4 sm:pl-4">
            <h1 className="xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm ">
              Test Portal
            </h1>
            <p className="text-xs text-stone-400">Y | Shows | Seasons 0</p>
            <p className="mt-7 text-sm">No description yet</p>
          </div>
          <div className="col-3 border w-full flex col-span-1 max-[768px]:col-span-3 max-[768px]:mt-3 h-40 justify-center items-center">
            Trailer
          </div>
        </div>

        <h3 className="font-bold text-lg my-10">Collection</h3>

        <div className="grid xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-7 grid-cols-3 gap-3 pb-5">
          <div className="col-1 border rounded-md h-40 flex justify-center items-center">
            Collection
          </div>
          <div className="col-2 border rounded-md h-40 flex justify-center items-center">
            Collection
          </div>
          <div className="col-3 border rounded-md h-40 flex justify-center items-center">
            Collection
          </div>
          <div className="col-4 border rounded-md h-40 flex justify-center items-center">
            Collection
          </div>
          <div className="col-5 border rounded-md h-40 flex justify-center items-center">
            Collection
          </div>
          <div className="col-6 border rounded-md h-40 flex justify-center items-center">
            Collection
          </div>
          <div className="col-7 border rounded-md h-40 flex justify-center items-center">
            Collection
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testportal;
