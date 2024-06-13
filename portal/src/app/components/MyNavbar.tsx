/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

const MyNavbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <div>
      <>
        <nav className="bg-[#2a2c31] z-50 shadow-lg fixed top-0 w-full">
          <div className="max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between md:h-16 h-12">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <img
                      className="h-5 md:h-6 lg:h-7 xl:h8"
                      src="/assets/logo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="ml-4 flex items-center space-x-1 sm:space-x-3 md:space-x-5">
                  <a
                    href="/"
                    className="text-white  hover:text-black rounded-lg p-2"
                  >
                    <img
                      src="https://img.icons8.com/material-sharp/24/ffffff/home.png"
                      alt="Home" className="w-5 md:w-6 lg:w-7"
                    />
                  </a>
                  <a
                    href="/"
                    className="text-white hover:text-black rounded-lg p-2"
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/24/ffffff/appointment-reminders--v1.png"
                      alt="appointment-reminders--v1" className="w-5 md:w-6 lg:w-7"
                    />
                  </a>
                  <Dropdown
                    label=""
                    className="bg-[#4e4f52] border-none focus:outline-none"
                    type="button"
                    inline
                    dismissOnClick={false}
                    renderTrigger={() => (
                      <div className="flex items-center justify-center cursor-pointer">
                        <div className="pr-2 hidden sm:block">
                          <h6 className="text-sm text-white items-end ">
                            Nate
                          </h6>
                          <h6 className="text-xs text-[#3be349] font-bold ">
                            Online
                          </h6>
                        </div>

                        <img
                          className="w-6 h-6 md:h-7 lg:h-8 md:w-7 lg:w-8 rounded-full"
                          src="/assets/dp.jpg"
                          alt="user photo"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">Nate Fowler</span>
                      <span className="block truncate text-sm font-medium">
                        natefowler@gmail.com
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item
                      href="/"
                      icon={HiViewGrid}
                      className="text-[#eeeeee] hover:text-[#eeeeee] hover:bg-[#797979]"
                    >
                      &nbsp;Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/"
                      icon={HiCog}
                      className="text-[#eeeeee] hover:text-[#eeeeee] hover:bg-[#797979]"
                    >
                      &nbsp; Settings
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/"
                      icon={HiCurrencyDollar}
                      className="text-[#eeeeee] hover:text-[#eeeeee] hover:bg-[#797979]"
                    >
                      &nbsp;Earnings
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/"
                      icon={HiLogout}
                      className=" text-[#eeeeee] hover:text-[#eeeeee] hover:bg-[#797979]"
                    >
                      &nbsp;Sign out
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default MyNavbar;
