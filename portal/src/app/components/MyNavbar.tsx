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
        <nav className="bg-[#2a2c31]">
          <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      className="h-8"
                      src="/assets/logo.png"
                      alt="Workflow"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-5">
                  <a
                    href="/"
                    className="text-white  hover:text-black rounded-lg p-2"
                  >
                    <img
                      src="https://img.icons8.com/material-sharp/24/ffffff/home.png"
                      alt="Home"
                    />
                  </a>
                  <a
                    href="/"
                    className="text-white hover:text-black rounded-lg p-2"
                  >
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ios-filled/24/ffffff/appointment-reminders--v1.png"
                      alt="appointment-reminders--v1"
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
                        <div className="pr-2">
                          <h6 className="text-sm text-white items-end ">
                            Nate
                          </h6>
                          <h6 className="text-xs text-[#3be349] font-bold ">
                            Online
                          </h6>
                        </div>

                        <Image
                          className="w-8 h-8 rounded-full"
                          src="/assets/dp.jpg"
                          alt="user photo"
                          height={30}
                          width={30}
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
              <div className="md:hidden flex items-center">
                <button
                  title="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={toggleNavbar}
                >
                  {isClick ? (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isClick && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Services
                </a>
                <a
                  href="/"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </>
    </div>
  );
};

export default MyNavbar;
