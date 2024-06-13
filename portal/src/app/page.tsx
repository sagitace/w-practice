"use client";
import Testportal from "./components/Testportal";
import Link from "next/link";
import UploadImage from "./components/UploadImage";
import MyNavbar from "./components/MyNavbar";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { PiTelevisionFill } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import { FaStore } from "react-icons/fa6";
import { BiLogoZoom } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { MdEmojiEmotions } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const Menu = [
    { title: "Dashboard" },
    { title: "Watch Live TV", icon: <PiTelevisionFill /> },
    {
      title: "My Account",
      submenu: true,
      icon: <IoPerson />,
      submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }],
    },
    {
      title: "My Store",
      submenu: true,
      icon: <FaStore />,
      submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }],
    },
    {
      title: "My Portals",
      submenu: true,
      icon: <BiLogoZoom />,
      submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }],
    },
    {
      title: "My Wallet",
      submenu: true,
      icon: <GiWallet />,
      submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }],
    },
    { title: "Emoji Editor", icon: <MdEmojiEmotions /> },
    {
      title: "My Adds",
      submenu: true,
      icon: <GrAnnounce />,
      submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }],
    },
  ];

  return (
    <main>
      <div className="mt-16">
        <MyNavbar />
        <div className="flex">
          <div
            className={`h-full shadow-xl ${
              open ? "w-56" : "w-14"
            } sidebar duration-300 md:mt-16 mt-12`}
          >
            <div className="overflow-hidden shadow-xl max-w-xs border-b border-[#8b8b8b68]">
              <img
                src="/assets/bikinibottom.jpg"
                className={`w-full bg-cover h-32 ${!open && "hidden"}`}
                alt="background"
              />
              <div className={`flex justify-center ${open && "-mt-8"}`}>
                <img
                  src="/assets/dp.jpg"
                  alt="Profile picture"
                  className={`rounded-full overflow-hidden origin-left duration-300 ${
                    open
                      ? "w-20 h-20 -mt-3 border-solid border-[#eeeeee] border-2"
                      : "w-10 h-10 mt-5"
                  }`}
                />
              </div>
              <div className="text-center px-3 pb-4 pt-2">
                <h3
                  className={`text-[#eeeeee] text-sm bold font-sans ${
                    !open && "hidden"
                  }`}
                >
                  Nate Fowler
                </h3>
              </div>
              <div
                className={`flex justify-center pb-2 text-[#eeeeee] ${
                  !open && "hidden"
                }`}
              >
                <div className="text-center text-xs mr-3 pr-3">
                  <h4>0</h4>
                  <span>Token</span>
                </div>
                <div className="text-center text-xs">
                  <h4>0</h4>
                  <span>Subscribers</span>
                </div>
              </div>
            </div>
            <div className="relative duration-300 pt-3">
              <MdKeyboardArrowLeft
                className={`bg-[#2a2c31] text-black text-3xl w-4 h-14 absolute border-l border-[#eeeeee24] cursor-pointer -right-4 shadow-[inset_10px_0_15px_-10px_rgba(74,85,104,0.6)]  ${
                  !open
                    ? "rotate-180 rounded-tl-md rounded-bl-md top-44"
                    : "rounded-tr-md rounded-br-md top-9"
                }`}
                onClick={() => setOpen(!open)}
              />
            </div>

            <ul>
              {Menu.map((menu, index) => (
                <div key={index}>
                  <li
                    className={`text-[#eeeeee] text-sm flex items-center justify-center gap-x-4 cursor-pointer p-2 hover:bg-[#8b8b8b25] rounded-md`}
                    onClick={() => toggleSubmenu(index)}
                  >
                    <span className={`block float-left text-xl`}>
                      {menu.icon ? menu.icon : <MdDashboard />}
                    </span>
                    <span
                      className={`text-xs sm:text-base font-medium flex-1 ${
                        !open && "hidden"
                      }`}
                    >
                      {menu.title}
                    </span>
                    {menu.submenu && open && (
                      <BsChevronDown
                        className={`${
                          openSubmenuIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </li>
                  {menu.submenu && openSubmenuIndex === index && open && (
                    <ul>
                      {menu.submenuItems.map((submenuItem, submenuIndex) => (
                        <li
                          key={submenuIndex}
                          className="text-[#eeeeee] text-xs sm:text-base flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-[#8b8b8b25] rounded-md"
                        >
                          {submenuItem.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>

          <div
            className={`w-full duration-300 ml-1 ${
              open ? "ml-[14.2rem] max-[640px]:ml-[3.7rem]" : "ml-[3.7rem]"
            }`}
          >
            <div className="flex text-xs md:mt-3 mx-4">
              {" "}
              <Link
                href="/"
                className="text-stone-300 text-[10px] sm:text-xs lg:text-sm"
              >
                My Portals
              </Link>{" "}
              &nbsp; &gt; &nbsp;
              <Link
                href="/"
                className="text-stone-300 text-[10px] sm:text-xs lg:text-sm"
              >
                Portal List
              </Link>{" "}
              &nbsp; &gt; &nbsp;
              <Link
                href="/"
                className="text-stone-300 text-[10px] sm:text-xs lg:text-sm"
              >
                Portal Generator
              </Link>{" "}
              &nbsp; &gt; &nbsp;
              <Link href="/" className="text-[10px] sm:text-xs lg:text-sm">
                Edit
              </Link>
            </div>
            <h1 className="font-bold m-4 border-bot pb-2 text-2xl">
              Edit Portal
            </h1>
            <Testportal />
            <div className="border-bot mx-4"></div>
            <UploadImage />
          </div>
        </div>
      </div>
    </main>
  );
}
