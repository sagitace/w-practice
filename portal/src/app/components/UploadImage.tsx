"use client";

import React, { useState, ChangeEvent } from "react";
import Modal from "./Modal";

const UploadImage = () => {
  const [availability, setAvailability] = useState("free");

  const handleAvailabilityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAvailability(event.target.value);
  };
  const [trailerType, setTrailerType] = useState("file");

  const handleTrailerTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTrailerType(event.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  const [isAccordionOpen1a, setIsAccordionOpen1a] = useState(false);
  const [isAccordionOpen1b, setIsAccordionOpen1b] = useState(false);

  const [isAccordionOpen2a, setIsAccordionOpen2a] = useState(false);
  const [isAccordionOpen2b, setIsAccordionOpen2b] = useState(false);
  const [isAccordionOpen3b, setIsAccordionOpen3b] = useState(false);
  const [isAccordionOpen4b, setIsAccordionOpen4b] = useState(false);
  const [isAccordionOpen5b, setIsAccordionOpen5b] = useState(false);

  return (
    <div className="landing m-4 rounded-md p-2 max-[431px]:p-1 md:p-3 lg:p-4">
      <div className="lg:px-10 md:px-7 sm:px-5 max-sm:px-3 rounded-md p-3">
        <form>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-1 max-[768px]:w-full md:col-span-1 col-span-2">
              <h3 className="text-[#eeeeee] md:text-lg sm:text-md text-sm ">
                Upload Portal Image
              </h3>

              <div className="flex items-center justify-center mt-5">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center lg:w-56 lg:h-56 md:w-50 md:h-50 sm:w-28 sm:h-28 max-sm:w-28 max-sm:h-28 border-2 border-gray-300 rounded-full cursor-pointer bg-[#2a2c31] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 md:pb-6 pb-3">
                      <svg
                        className="w-8 h-8 md:mb-4 sm:mb-2 text-gray-800 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-1 text-center">
                        <span className="font-semibold text-[#eeeeee] text-xs md:text-md lg:text-lg xl:text-lg">
                          Drag or drop file here{" "}
                        </span>
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      required
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="col-2 col-span-2">
              <div className="grid grid-cols-8 gap-1">
                <div className="col-span-7 max-sm:col-span-6 mb-1">
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-[#2a2c31] border border-gray-400 text-[#eeeeee] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="3 idiots"
                    required
                  />
                </div>
                <div className="col-span-1 max-sm:col-span-2 ml-2">
                  <label
                    htmlFor="nativeColorPicker1"
                    className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                  >
                    Color
                  </label>
                  <input
                    id="nativeColorPicker1"
                    type="color"
                    value="#6590D5"
                    className="w-[60%] max-sm:w-full"
                  />
                </div>
                <div className="col-span-8 mb-1">
                  <label
                    htmlFor="category"
                    className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                  >
                    Category
                  </label>
                  <div className="flex gap-2">
                    {/* <input
                      type="text"
                      id="category"
                      className=""
                      placeholder="Select category"
                      required
                    /> */}
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-[#2a2c31] border border-gray-400 text-[#eeeeee] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onClick={() => setShowModal(true)}
                    />

                    <Modal show={showModal} onClose={() => setShowModal(false)}>
                      <div className="space-y-2 mt-8 max-sm:mt-3 sm:mt-4 p-3 bg-[#2a2c31] rounded-md">
                        <h1 className="text-[#eeeeee] text-md max-sm:text-md p-2 border-b border-[#8b8b8b68]">
                          Sub Category
                        </h1>
                        <div className="lg:h-60 xl:h-64 max-sm:h-48 sm:h-52 overflow-auto">
                          <button
                            onClick={() =>
                              setIsAccordionOpen1a(!isAccordionOpen1a)
                            }
                            className="w-full text-left p-2 border-b border-[#8b8b8b68] flex justify-between text-sm sm:text-md"
                          >
                            Qux<span>{isAccordionOpen1a ? "-" : "+"}</span>
                          </button>

                          {isAccordionOpen1a && (
                            <div className="pl-4">
                              <button
                                onClick={() =>
                                  setIsAccordionOpen1b(!isAccordionOpen1b)
                                }
                                className="w-full text-left p-2 border-b border-[#8b8b8b30]  flex justify-between mt-2 text-sm sm:text-md"
                              >
                                Qux 1
                                <span>{isAccordionOpen1b ? "-" : "+"}</span>
                              </button>
                              {isAccordionOpen1b && (
                                <div className="pl-4">
                                  <div className="mt-2">
                                    <label className="inline-flex items-center justify-between w-full pr-5">
                                      <span className="ml-2 text-sm sm:text-md">
                                        Example 1
                                      </span>
                                      <input
                                        type="radio"
                                        name="radioOption"
                                        className="form-radio"
                                      />
                                    </label>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          <button
                            onClick={() =>
                              setIsAccordionOpen2a(!isAccordionOpen2a)
                            }
                            className="w-full text-left p-2 border-b border-[#8b8b8b68] flex justify-between text-sm sm:text-md"
                          >
                            Entertainment
                            <span>{isAccordionOpen2a ? "-" : "+"}</span>
                          </button>

                          {isAccordionOpen2a && (
                            <div className="pl-4">
                              <button
                                onClick={() =>
                                  setIsAccordionOpen2b(!isAccordionOpen2b)
                                }
                                className="w-full text-left p-2 border-b border-[#8b8b8b30]  flex justify-between mt-2 text-sm sm:text-md"
                              >
                                Shows
                                <span>{isAccordionOpen2b ? "-" : "+"}</span>
                              </button>
                              {isAccordionOpen2b && (
                                <div className="pl-4">
                                  <div className="mt-2">
                                    <label className="inline-flex items-center justify-between w-full pr-5">
                                      <span className="ml-2 text-sm sm:text-md">
                                        Children Shows
                                      </span>
                                      <input
                                        type="radio"
                                        name="radioOption"
                                        className="form-radio ml-2"
                                      />
                                    </label>
                                  </div>
                                  <div className="mt-2">
                                    <label className="inline-flex items-center justify-between w-full pr-5">
                                      <span className="ml-2 ">Comedy</span>
                                      <input
                                        type="radio"
                                        name="radioOption"
                                        className="form-radio ml-2"
                                      />
                                    </label>
                                  </div>
                                  <div className="mt-2">
                                    <label className="inline-flex items-center justify-between w-full pr-5">
                                      <span className="ml-2 text-sm sm:text-md">
                                        Factual/Documentary
                                      </span>
                                      <input
                                        type="radio"
                                        name="radioOption"
                                        className="form-radio ml-2"
                                      />
                                    </label>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Modal>

                    <button className="bg-[#ebebeb] hover:bg-gray-400 text-black font-bold px-4 rounded-lg text-sm md:text-md max-sm:px-2">
                      Browse
                    </button>
                  </div>
                </div>
                <div></div>
                <div className="col-span-8 mb-1">
                  <label
                    htmlFor="rating"
                    className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                  >
                    Ratings
                  </label>

                  <select
                    id="rating"
                    className="bg-[#2a2c31] border border-gray-400 text-[#eeeeee] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  >
                    <option selected disabled>
                      Choose a rating
                    </option>
                    <option value="Y">Y</option>
                    <option value="Y7">Y7</option>
                    <option value="PG14">PG14</option>
                    <option value="MA">MA</option>
                    <option value="FS">FS</option>
                    <option value="?">?</option>
                    <option value="X">X</option>
                  </select>
                </div>
                <div className="col-span-8 mb-1">
                  <label
                    htmlFor="rights"
                    className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                  >
                    Access Rights
                  </label>

                  <select
                    id="rights"
                    className="bg-[#2a2c31] border border-gray-400 text-[#eeeeee] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  >
                    <option value="fairuse" selected>
                      Fair Use
                    </option>
                    <option value="copyright">Copyright Holder</option>
                    <option value="original">Original Content</option>
                  </select>
                </div>
                <div className="col-span-2 max-sm:col-span-8 mb-1">
                  <label
                    htmlFor="trailertype"
                    className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                  >
                    Trailer Type
                  </label>

                  <select
                    id="trailertype"
                    className="bg-[#2a2c31] border border-gray-400 text-[#eeeeee] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={trailerType}
                    onChange={handleTrailerTypeChange}
                  >
                    <option value="file">File</option>
                    <option value="url">URL</option>
                  </select>
                </div>

                {trailerType === "file" && (
                  <div className="col-span-6 max-sm:col-span-8 mb-1">
                    <label
                      className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                      htmlFor="file_input"
                    >
                      Upload file
                    </label>
                    <input
                      className="block w-full text-sm text-[#eeeeee] rounded-lg cursor-pointer bg-[#2a2c31] dark:text-gray-400 focus:outline-none dark:bg-[#2a2c31] dark:border-[#2a2c31] dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      required
                    />
                  </div>
                )}

                {trailerType === "url" && (
                  <div className="col-span-6 max-sm:col-span-8 mb-1">
                    <label
                      className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                      htmlFor="url_input"
                    >
                      Enter URL
                    </label>
                    <input
                      type="text"
                      id="url_input"
                      className="bg-[#2a2c31] border border-gray-400 text-[#eeeeee] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter source URL..."
                      required
                    />
                  </div>
                )}

                <div className="col-span-8 mb-1">
                  <label
                    className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                    htmlFor="portalBg"
                  >
                    Change Portal Background
                  </label>
                  <input
                    className="block w-full text-md max-sm:text-sm text-[#eeeeee] rounded-lg cursor-pointer bg-[#2a2c31] dark:text-gray-400 focus:outline-none dark:bg-[#2a2c31] dark:border-[#2a2c31] dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="portalBg"
                    type="file"
                  />
                </div>
                <div className="col-span-8 mb-1">
                  <label
                    htmlFor="availability"
                    className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                  >
                    Portal Availability
                  </label>

                  <select
                    id="availability"
                    value={availability}
                    onChange={handleAvailabilityChange}
                    className="bg-[#2a2c31] border border-gray-400 text-[#eeeeee] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  >
                    <option value="free" selected>
                      Free For All
                    </option>
                    <option value="subscription">Subscription</option>
                    <option value="onetime">One Time Purchase</option>
                  </select>
                </div>
                {(availability === "subscription" ||
                  availability === "onetime") && (
                  <div className="col-span-8 mb-1">
                    <label
                      htmlFor="amount"
                      className="block mb-1 text-sm font-medium text-[#eeeeee] dark:text-white"
                    >
                      Purchase Price
                    </label>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className="bg-[#2a2c31] border border-gray-400 text-[#eeeeee] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter amount"
                      min={1}
                    />
                  </div>
                )}
              </div>
              <h3 className="my-1">Description</h3>
              <div className="w-full mb-4 border border-gray-400 rounded-lg bg-[#2a2c31] dark:bg-gray-700 dark:border-gray-600">
                <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                  <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="h-4 w-4 text-stone-100"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />{" "}
                          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                        </svg>
                        <span className="sr-only">Bold text</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="h-4 w-4 text-stone-100"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <line x1="19" y1="4" x2="10" y2="4" />{" "}
                          <line x1="14" y1="20" x2="5" y2="20" />{" "}
                          <line x1="15" y1="4" x2="9" y2="20" />
                        </svg>
                        <span className="sr-only">Italic text</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="h-4 w-4 text-stone-100"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />{" "}
                          <line x1="4" y1="21" x2="20" y2="21" />
                        </svg>
                        <span className="sr-only">Underline text</span>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 12 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                          />
                        </svg>
                        <span className="sr-only">Attach file</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 bg-[#2a2c31] rounded-b-lg dark:bg-gray-800">
                  <label htmlFor="description" className="sr-only">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={6}
                    className="block w-full px-0 text-sm text-[#eeeeee] bg-[#2a2c31] border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a description..."
                    required
                  ></textarea>
                </div>
              </div>
              <div className="w-full flex items-end justify-end">
                <button
                  type="button"
                  className="text-gray-300 bg-[#c6c6c6df] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm max-sm:text-xs sm:w-auto py-2.5 text-center dark:bg-gray-400 dark:focus:ring-gray-300 px-12 max-sm:px-5"
                  disabled
                >
                  Save as draft
                </button>
                <button
                  type="submit"
                  className="text-black bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-full text-sm max-sm:text-xs sm:w-auto py-2.5 text-center dark:bg-white dark:hover:bg-gray-500 dark:focus:ring-white ml-2 px-20 max-sm:px-5"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadImage;
