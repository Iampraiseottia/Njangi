"use client";

import { React, useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Sun, Moon } from "lucide-react";

import { useForm } from "@conform-to/react";

import { motion } from "motion/react";

import globalStyle from "../globals.css";

const Identity_User = ({ setActiveComponent }) => {
  if (!setActiveComponent || typeof setActiveComponent !== "function") {
    console.error("setActiveComponent is not a function or is undefined.");
    return null;
  }

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode === "true";
    }
    return false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", isDarkMode.toString());
    }
  }, [isDarkMode]);

  const uploadBCInput = useRef(null);
  const uploadIDInput = useRef(null);
  const uploadPictureInput = useRef(null);

  const disability_statusRef = useRef(null);
  const marital_statusRef = useRef(null);
  const sicknessRef = useRef(null);
  const debt_statusRef = useRef(null);
  const camera_picRef = useRef(null);

  const [isUploading, setIsUploading] = useState(false);

  const onMouseEnterDisabilityStatusRef = () => {
    if (disability_statusRef.current) {
      disability_statusRef.current.focus();
    }
  };

  const onMouseEnterMaritalStatusRef = () => {
    if (marital_statusRef.current) {
      marital_statusRef.current.focus();
    }
  };

  const onMouseEnterSicknessRef = () => {
    if (sicknessRef.current) {
      sicknessRef.current.focus();
    }
  };

  const onMouseEnterDebtStatusRef = () => {
    if (debt_statusRef.current) {
      debt_statusRef.current.focus();
    }
  };

  const onMouseEnterCameraPicRef = () => {
    if (camera_picRef.current) {
      camera_picRef.current.focus();
    }
  };

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    disability_status: "",
    marital_status: "",
    sickness: "",
    debt_status: "",
    camera_pic: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main
      className={`flex relative justify-center items-center w-full min-h-screen p-4 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white-800 text-white"
      }`}
    >
      <p className="dance absolute"></p>
      <p className="dance2 absolute"></p>

      {/* Dark Mode Toggle Button */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className={`relative w-20 h-10 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode ? "bg-blue-700" : "bg-blue-600"
          }`}
        >
          <div
            className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
              isDarkMode ? "translate-x-10" : "translate-x-0"
            }`}
          >
            {isDarkMode ? (
              <Moon className="w-5 h-5 text-blue-700" />
            ) : (
              <Sun className="w-5 h-5 text-blue-600" />
            )}
          </div>
        </button>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`w-full max-w-7xl overflow-hidden rounded-lg wrapper my-8 transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-800 border-2 border-blue-600"
            : "bg-transparent border-2 border-blue-600"
        }`}
      >
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 pt-9 text-center mb-12">
          Your Unique Identity 🔥
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-[-50px]">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true, amount: 0.05 }}
            className="w-full lg:w-[50%] p-6 lg:p-12 xl:p-20"
          >
            <form className="flex flex-col gap-1 w-full max-w-xl">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
                  <label
                    htmlFor="birth_certificate"
                    className="font-semibold text-lg tracking-wide mb-1 sm:mb-0"
                  >
                    🚼 Upload Your Birth Certificate:
                  </label>
                  <div className="flex items-center w-full sm:w-auto">
                    <input
                      ref={uploadBCInput}
                      disabled={isUploading}
                      type="file"
                      name="birth_certificate"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files[0];
                        setIsUploading(false);
                      }}
                    />
                    <button
                      type="button"
                      className="bg-yellow-600 px-4 sm:px-6 py-2 text-white rounded-md font-semibold cursor-pointer duration-300 ease-in-out hover:shadow hover:bg-yellow-700 w-full sm:w-auto"
                      onClick={() => uploadBCInput.current?.click()}
                      disabled={isUploading}
                    >
                      {isUploading ? "Uploading" : "Upload BC  "}
                    </button>
                  </div>
                </div>
                <div className="w-full text-base bg-transparent h-56 rounded-xl border-2 border-yellow-600  py-3 px-4 focus:ring-1 focus:ring-yellow-600  focus:outline-none duration-300"></div>
              </div>{" "}
              <br />
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
                  <label
                    htmlFor="identification_card"
                    className="font-semibold text-lg tracking-wide mb-1 sm:mb-0"
                  >
                    🚼 Upload Your Birth Certificate:
                  </label>
                  <div className="flex items-center w-full sm:w-auto">
                    <input
                      ref={uploadIDInput}
                      type="file"
                      name="identification_card"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        console.log(file);
                      }}
                    />
                    <button
                      type="button"
                      className="bg-yellow-600 px-4 sm:px-6 py-2 text-white rounded-md font-semibold cursor-pointer duration-300 ease-in-out hover:shadow hover:bg-yellow-700 w-full sm:w-auto"
                      onClick={() => uploadIDInput.current?.click()}
                    >
                      Upload ID
                    </button>
                  </div>
                </div>
                <div className="w-full text-base bg-transparent h-60 rounded-xl border-2 border-yellow-600  py-3 px-4 focus:ring-1 focus:ring-yellow-600  focus:outline-none duration-300"></div>
              </div>{" "}
              <br />
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
                  <label
                    htmlFor="uploaded_pic"
                    className="font-semibold text-lg tracking-wide mb-1 sm:mb-0"
                  >
                    🚼 Upload Your Birth Certificate:
                  </label>
                  <div className="flex items-center w-full sm:w-auto">
                    <input
                      ref={uploadPictureInput}
                      type="file"
                      name="uploaded_pic"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        console.log(file);
                      }}
                    />
                    <button
                      type="button"
                      className="bg-yellow-600 px-4 sm:px-6 py-2 text-white rounded-md font-semibold cursor-pointer duration-300 ease-in-out hover:shadow hover:bg-yellow-700 w-full sm:w-auto"
                      onClick={() => uploadPictureInput.current?.click()}
                    >
                      Upload Picture
                    </button>
                  </div>
                </div>
                <div className="w-full text-base bg-transparent h-60 rounded-xl border-2 border-yellow-600  py-3 px-4 focus:ring-1 focus:ring-yellow-600  focus:outline-none duration-300"></div>
              </div>{" "}
              <br />
            </form>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true, amount: 0.05 }}
            className="w-full lg:w-[50%] p-6 lg:p-9"
          >
            <form className="flex flex-col gap-6 w-full max-w-xl">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="disability_status"
                  className="font-semibold text-lg tracking-wide"
                >
                  🦽 Do You Have Any Disability?
                </label>
                <input
                  ref={disability_statusRef}
                  onMouseEnter={onMouseEnterDisabilityStatusRef}
                  type="text"
                  name="disability_status"
                  id="disability_status"
                  value={formData.disability_status}
                  onChange={handleInputChange}
                  placeholder="If none , type NO but If YES, Name them "
                  className="w-full text-base bg-transparent rounded-xl border-2 border-blue-600  py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300 placeholder-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="marital_status"
                  className="font-semibold text-lg tracking-wide"
                >
                  💒 What is your marital status?:
                </label>
                <select
                  name="marital_status"
                  id="marital_status"
                  className="w-full text-base bg-transparent rounded-xl border-2 border-blue-600  py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300 text-white bg-slate-800"
                  ref={marital_statusRef}
                  value={formData.marital_status}
                  onChange={handleInputChange}
                  onMouseEnter={onMouseEnterMaritalStatusRef}
                >
                  <option value="Select an Option" className="singleCol">
                    Select an Option
                  </option>
                  <option value="Single" className="singleCol">
                    Single
                  </option>
                  <option className="singleCol" value="Married">
                    Married
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="sickness"
                  className="font-semibold text-lg tracking-wide"
                >
                  😷 Are You Suffering of any sickness or disease?
                </label>
                <input
                  ref={sicknessRef}
                  onMouseEnter={onMouseEnterSicknessRef}
                  type="text"
                  name="sickness"
                  id="sickness"
                  value={formData.sickness}
                  onChange={handleInputChange}
                  placeholder="If none , type NO but If YES, Name them  "
                  className="w-full text-base bg-transparent rounded-xl border-2 border-blue-600  py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300 placeholder-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="debt_status"
                  className="font-semibold text-lg tracking-wide flex"
                >
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="werey2 mr-2 text-blue-600 "
                  />{" "}
                  Are you currently in any debt?
                </label>
                <select
                  name="debt_status"
                  id="debt_status"
                  className="w-full text-base bg-transparent rounded-xl border-2 border-blue-600  py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300 text-white bg-slate-800"
                  ref={debt_statusRef}
                  value={formData.debt_status}
                  onChange={handleInputChange}
                  onMouseEnter={onMouseEnterDebtStatusRef}
                >
                  <option className="singleCol" value="Select an Option">
                    Select an Option
                  </option>
                  <option className="singleCol" value="YES">
                    YES
                  </option>
                  <option className="singleCol" value="NO">
                    NO
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="camera_pic"
                  className="font-semibold text-lg tracking-wide"
                >
                  📷 Take a Picture of Yourself:
                </label>
                <input
                  ref={camera_picRef}
                  onMouseEnter={onMouseEnterCameraPicRef}
                  type="file"
                  name="camera_pic"
                  id="camera_pic"
                  onChange={handleInputChange}
                  placeholder="Upload Your Birth Certificate"
                  className="w-full text-base bg-transparent h-52 md:h-80 rounded-xl border-2 border-blue-600  py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300 placeholder-white"
                />
              </div>

              <button
                className="mt-3 bg-gradient-to-r from-blue-600  via-slate-700 to-blue-600  w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center"
                type="button"
                onClick={() => setActiveComponent("survey")}
              >
                Submit and Continue ➡️
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Identity_User;
