"use client";

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

const Identity_User = ({ setActiveComponent }) => {
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
    <main className="flex relative justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4">
      <p className="dance absolute"></p>
      <p className="dance2 absolute"></p>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full max-w-7xl bg-transparent border-2 border-blue-600  overflow-hidden rounded-lg wrapper my-8"
      >
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 pt-9 text-center mb-12">
          Your Unique Identity 🔥
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-[-50px]">
          {/* Registration Page 01 Left Section */}
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
                      className="bg-blue-600 px-4 sm:px-6 py-2 text-white rounded-md font-semibold cursor-pointer duration-300 ease-in-out hover:shadow hover:bg-blue-700 w-full sm:w-auto"
                      onClick={() => uploadBCInput.current?.click()}
                      disabled={isUploading}
                    >
                      {isUploading ? "Uploading" : "Upload BC  "}
                    </button>
                  </div>
                </div>
                <div className="w-full text-base bg-transparent h-56 rounded-xl border-2 border-blue-600  py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300"></div>
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
                      className="bg-blue-600 px-4 sm:px-6 py-2 text-white rounded-md font-semibold cursor-pointer duration-300 ease-in-out hover:shadow hover:bg-blue-700 w-full sm:w-auto"
                      onClick={() => uploadIDInput.current?.click()}
                    >
                      Upload ID
                    </button>
                  </div>
                </div>
                <div className="w-full text-base bg-transparent h-60 rounded-xl border-2 border-blue-600  py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300"></div>
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
                      className="bg-blue-600 px-4 sm:px-6 py-2 text-white rounded-md font-semibold cursor-pointer duration-300 ease-in-out hover:shadow hover:bg-blue-700 w-full sm:w-auto"
                      onClick={() => uploadPictureInput.current?.click()}
                    >
                      Upload Picture
                    </button>
                  </div>
                </div>
                <div className="w-full text-base bg-transparent h-60 rounded-xl border-2 border-blue-600  py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300"></div>
              </div>{" "}
              <br />
            </form>
          </motion.div>

          {/* Registration Page 01 Right Section */}
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
