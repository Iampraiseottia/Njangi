"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

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
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    birth_certificate: null,
    identification_card: null,
    uploaded_pic: null,
    disability_status: "",
    marital_status: "",
    sickness: "",
    debt_status: "",
    camera_pic: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      [fieldName]: file,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.birth_certificate) {
      newErrors.birth_certificate = "Birth Certificate is required";
    }

    if (!formData.identification_card) {
      newErrors.identification_card = "Identification Card is required";
    }

    if (!formData.uploaded_pic) {
      newErrors.uploaded_pic = "Picture upload is required";
    }

    if (
      !formData.disability_status ||
      formData.disability_status.trim().length < 2
    ) {
      newErrors.disability_status = "Please specify disability status";
    }

    if (
      !formData.marital_status ||
      formData.marital_status === "Select an Option"
    ) {
      newErrors.marital_status = "Please select marital status";
    }

    if (!formData.sickness || formData.sickness.trim().length < 2) {
      newErrors.sickness = "Please specify sickness status";
    }

    if (!formData.debt_status || formData.debt_status === "Select an Option") {
      newErrors.debt_status = "Please select debt status";
    }

    if (!formData.camera_pic) {
      newErrors.camera_pic = "Camera picture is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setActiveComponent("survey");
    }
  };

  return (
    <main
      className={`flex relative justify-center items-center w-full min-h-screen p-4 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white-800 text-white"
      }`}
    >
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
            <div className="flex flex-col gap-1 w-full max-w-xl">
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
                      onChange={(e) => handleFileChange(e, "birth_certificate")}
                    />
                    <button
                      type="button"
                      className="bg-yellow-600 px-4 sm:px-6 py-2 text-white rounded-md font-semibold cursor-pointer duration-300 ease-in-out hover:shadow hover:bg-yellow-700 w-full sm:w-auto"
                      onClick={() => uploadBCInput.current?.click()}
                      disabled={isUploading}
                    >
                      {isUploading ? "Uploading" : "Upload BC"}
                    </button>
                  </div>
                </div>
                <div
                  className={`w-full text-base bg-transparent h-56 rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    formData.birth_certificate
                      ? "border-green-500"
                      : errors.birth_certificate
                      ? "border-red-500"
                      : "border-yellow-600"
                  }`}
                >
                  {formData.birth_certificate && (
                    <p className="text-sm text-green-500 font-semibold">
                      ✓ {formData.birth_certificate.name}
                    </p>
                  )}
                </div>
                {errors.birth_certificate && !formData.birth_certificate && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.05 }}
                    className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                  >
                    {errors.birth_certificate}
                  </motion.p>
                )}
              </div>
              <br />

              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
                  <label
                    htmlFor="identification_card"
                    className="font-semibold text-lg tracking-wide mb-1 sm:mb-0"
                  >
                    🪪 Upload Your ID Card:
                  </label>
                  <div className="flex items-center w-full sm:w-auto">
                    <input
                      ref={uploadIDInput}
                      type="file"
                      name="identification_card"
                      className="hidden"
                      onChange={(e) =>
                        handleFileChange(e, "identification_card")
                      }
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
                <div
                  className={`w-full text-base bg-transparent h-60 rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    formData.identification_card
                      ? "border-green-500"
                      : errors.identification_card
                      ? "border-red-500"
                      : "border-yellow-600"
                  }`}
                >
                  {formData.identification_card && (
                    <p className="text-sm text-green-500 font-semibold">
                      ✓ {formData.identification_card.name}
                    </p>
                  )}
                </div>
                {errors.identification_card &&
                  !formData.identification_card && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.identification_card}
                    </motion.p>
                  )}
              </div>
              <br />

              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
                  <label
                    htmlFor="uploaded_pic"
                    className="font-semibold text-lg tracking-wide mb-1 sm:mb-0"
                  >
                    📸 Upload Your Picture:
                  </label>
                  <div className="flex items-center w-full sm:w-auto">
                    <input
                      ref={uploadPictureInput}
                      type="file"
                      name="uploaded_pic"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, "uploaded_pic")}
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
                <div
                  className={`w-full text-base bg-transparent h-60 rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    formData.uploaded_pic
                      ? "border-green-500"
                      : errors.uploaded_pic
                      ? "border-red-500"
                      : "border-yellow-600"
                  }`}
                >
                  {formData.uploaded_pic && (
                    <p className="text-sm text-green-500 font-semibold">
                      ✓ {formData.uploaded_pic.name}
                    </p>
                  )}
                </div>
                {errors.uploaded_pic && !formData.uploaded_pic && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.05 }}
                    className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                  >
                    {errors.uploaded_pic}
                  </motion.p>
                )}
              </div>
              <br />
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true, amount: 0.05 }}
            className="w-full lg:w-[50%] p-6 lg:p-9"
          >
            <div className="flex flex-col gap-6 w-full max-w-xl">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="disability_status"
                  className="font-semibold text-lg tracking-wide text-yellow-600"
                >
                  🦽 Do You Have Any Disability?
                </label>
                <input
                  ref={disability_statusRef}
                  onMouseEnter={() => disability_statusRef.current?.focus()}
                  type="text"
                  name="disability_status"
                  id="disability_status"
                  value={formData.disability_status}
                  onChange={handleInputChange}
                  placeholder="If none, type NO but If YES, Name them"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-transparent text-black placeholder:text-gray-500"
                  } ${
                    formData.disability_status &&
                    formData.disability_status.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.disability_status
                      ? "border-red-500 focus:ring-red-500"
                      : "border-yellow-600 focus:ring-yellow-600"
                  }`}
                />
                {errors.disability_status &&
                  !(
                    formData.disability_status &&
                    formData.disability_status.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.disability_status}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="marital_status"
                  className="font-semibold text-lg tracking-wide text-yellow-600"
                >
                  💒 What is your marital status?:
                </label>
                <select
                  name="marital_status"
                  id="marital_status"
                  className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all text-white bg-slate-800 ${
                    formData.marital_status &&
                    formData.marital_status !== "Select an Option"
                      ? "border-green-500 focus:ring-green-500"
                      : errors.marital_status
                      ? "border-red-500 focus:ring-red-500"
                      : "border-yellow-600 focus:ring-yellow-600"
                  }`}
                  ref={marital_statusRef}
                  value={formData.marital_status}
                  onChange={handleInputChange}
                  onMouseEnter={() => marital_statusRef.current?.focus()}
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
                {errors.marital_status &&
                  !(
                    formData.marital_status &&
                    formData.marital_status !== "Select an Option"
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.marital_status}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="sickness"
                  className="font-semibold text-lg tracking-wide text-yellow-600"
                >
                  😷 Are You Suffering of any sickness or disease?
                </label>
                <input
                  ref={sicknessRef}
                  onMouseEnter={() => sicknessRef.current?.focus()}
                  type="text"
                  name="sickness"
                  id="sickness"
                  value={formData.sickness}
                  onChange={handleInputChange}
                  placeholder="If none, type NO but If YES, Name them"
                  className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all placeholder-white ${
                    formData.sickness && formData.sickness.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.sickness
                      ? "border-red-500 focus:ring-red-500"
                      : "border-yellow-600 focus:ring-yellow-600"
                  }`}
                />
                {errors.sickness &&
                  !(
                    formData.sickness && formData.sickness.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.sickness}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="debt_status"
                  className="font-semibold text-lg tracking-wide flex"
                >
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="werey2 mr-2 text-yellow-600"
                  />
                  Are you currently in any debt?
                </label>
                <select
                  name="debt_status"
                  id="debt_status"
                  className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all text-white bg-slate-800 ${
                    formData.debt_status &&
                    formData.debt_status !== "Select an Option"
                      ? "border-green-500 focus:ring-green-500"
                      : errors.debt_status
                      ? "border-red-500 focus:ring-red-500"
                      : "border-yellow-600 focus:ring-yellow-600"
                  }`}
                  ref={debt_statusRef}
                  value={formData.debt_status}
                  onChange={handleInputChange}
                  onMouseEnter={() => debt_statusRef.current?.focus()}
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
                {errors.debt_status &&
                  !(
                    formData.debt_status &&
                    formData.debt_status !== "Select an Option"
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.debt_status}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="camera_pic"
                  className="font-semibold text-lg tracking-wide text-yellow-600"
                >
                  📷 Take a Picture of Yourself:
                </label>
                <input
                  ref={camera_picRef}
                  onMouseEnter={() => camera_picRef.current?.focus()}
                  type="file"
                  name="camera_pic"
                  id="camera_pic"
                  onChange={(e) => handleFileChange(e, "camera_pic")}
                  className={`w-full text-base bg-transparent h-52 md:h-80 rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all placeholder-white ${
                    formData.camera_pic
                      ? "border-green-500 focus:ring-green-500"
                      : errors.camera_pic
                      ? "border-red-500 focus:ring-red-500"
                      : "border-yellow-600 focus:ring-yellow-600"
                  }`}
                />
                {errors.camera_pic && !formData.camera_pic && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.05 }}
                    className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                  >
                    {errors.camera_pic}
                  </motion.p>
                )}
              </div>

              <button
                className="mt-3 bg-gradient-to-r from-yellow-600 via-slate-700 to-yellow-600 w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center"
                type="button"
                onClick={handleSubmit}
              >
                Submit and Continue ➡️
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Identity_User;
