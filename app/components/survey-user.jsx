"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGroupArrowsRotate,
  faHandHoldingDollar,
  faCircleExclamation,
  faCommentDollar,
  faCoins,
  faPiggyBank,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

const Survey_User = ({ setActiveComponent }) => {
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

  const [errors, setErrors] = useState({});

  const hear_about_usRef = useRef();
  const level_of_educationRef = useRef();
  const ever_ParticipatedRef = useRef();
  const preferred_methodRef = useRef();
  const motivation_contributionRef = useRef();
  const suggestionsRef = useRef();
  const receive_financial_educationRef = useRef();
  const primary_njangi_goalRef = useRef();
  const comfortabilityRef = useRef();
  const often_check_mailsRef = useRef();
  const previous_challengesRef = useRef();
  const recommend_PlatformRef = useRef();
  const saving_PercentageRef = useRef();
  const manage_financesRef = useRef();
  const often_contributionRef = useRef();

  const [formData, setFormData] = useState({
    hear_about_us: "",
    level_of_education: "",
    ever_Participated: "",
    preferred_method: "",
    often_contribution: "",
    primary_njangi_goal: "",
    comfortability: "",
    often_check_mails: "",
    previous_challenges: "",
    recommend_Platform: "",
    manage_finances: "",
    receive_financial_education: "",
    suggestions: "",
    saving_percentage: "",
    motivation_contribution: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.hear_about_us || formData.hear_about_us.trim().length < 2) {
      newErrors.hear_about_us = "Please tell us how you heard about us";
    }

    if (
      !formData.level_of_education ||
      formData.level_of_education.trim().length < 2
    ) {
      newErrors.level_of_education = "Please enter your education level";
    }

    if (
      !formData.ever_Participated ||
      formData.ever_Participated === "Select an Option"
    ) {
      newErrors.ever_Participated = "Please select an option";
    }

    if (
      !formData.preferred_method ||
      formData.preferred_method === "Select an Option"
    ) {
      newErrors.preferred_method = "Please select a payment method";
    }

    if (
      !formData.often_contribution ||
      formData.often_contribution.trim().length < 2
    ) {
      newErrors.often_contribution = "Please specify contribution frequency";
    }

    if (
      !formData.primary_njangi_goal ||
      formData.primary_njangi_goal.trim().length < 2
    ) {
      newErrors.primary_njangi_goal = "Please enter your goals";
    }

    if (!formData.comfortability || formData.comfortability < 1) {
      newErrors.comfortability = "Please enter a valid number";
    }

    if (
      !formData.often_check_mails ||
      formData.often_check_mails.trim().length < 2
    ) {
      newErrors.often_check_mails =
        "Please specify how often you check messages";
    }

    if (
      !formData.previous_challenges ||
      formData.previous_challenges.trim().length < 2
    ) {
      newErrors.previous_challenges =
        "Please share any challenges (or type 'None')";
    }

    if (
      !formData.recommend_Platform ||
      formData.recommend_Platform === "Select an Option"
    ) {
      newErrors.recommend_Platform = "Please select a rating";
    }

    if (
      !formData.manage_finances ||
      formData.manage_finances.trim().length < 2
    ) {
      newErrors.manage_finances = "Please describe how you manage finances";
    }

    if (
      !formData.receive_financial_education ||
      formData.receive_financial_education === "Select an Option"
    ) {
      newErrors.receive_financial_education = "Please select an option";
    }

    if (!formData.suggestions || formData.suggestions.trim().length < 2) {
      newErrors.suggestions = "Please share suggestions (or type 'None')";
    }

    if (
      !formData.saving_percentage ||
      formData.saving_percentage.trim().length < 1
    ) {
      newErrors.saving_percentage = "Please enter your saving percentage";
    }

    if (
      !formData.motivation_contribution ||
      formData.motivation_contribution.trim().length < 2
    ) {
      newErrors.motivation_contribution = "Please share your motivation";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (setActiveComponent && typeof setActiveComponent === "function") {
        setActiveComponent("complete");
      } else {
        console.log("Survey completed successfully!");
        alert("Survey completed successfully!");
      }
    }
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
      <div className="absolute top-4 right-4 z-10 ">
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
        className={`w-full max-w-7xl overflow-hidden rounded-lg wrapper3 my-8 transition-all duration-300 mt-14 ${
          isDarkMode
            ? "bg-gray-800 border-2 border-blue-600"
            : "bg-transparent border-2 border-blue-600"
        }`}
      >
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 pt-9 text-center mb-12 sm:mb-8 ">
          Complete Survey 🔥
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-[-50px]">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true, amount: 0.05 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="w-full lg:w-[55%] p-6 lg:p-12 xl:p-20"
          >
            <div className="flex flex-col gap-6 w-full max-w-xl">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="hear_about_us"
                  className={`font-semibold text-lg tracking-wide
                    ${isDarkMode ? "text-white" : " text-gray-900"}`}
                >
                  👩🏾‍💻 How Did You Hear About Us?
                </label>
                <input
                  ref={hear_about_usRef}
                  onMouseEnter={() => hear_about_usRef.current?.focus()}
                  type="text"
                  name="hear_about_us"
                  id="hear_about_us"
                  value={formData.hear_about_us}
                  onChange={handleInputChange}
                  placeholder="How Did You Hear About Us"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.hear_about_us &&
                    formData.hear_about_us.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.hear_about_us
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />

                {errors.hear_about_us &&
                  !(
                    formData.hear_about_us &&
                    formData.hear_about_us.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.hear_about_us}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="level_of_education"
                  className={`font-semibold text-lg tracking-wide
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    `}
                >
                  🎓 What is your highest level of education?
                </label>
                <input
                  ref={level_of_educationRef}
                  onMouseEnter={() => level_of_educationRef.current?.focus()}
                  type="text"
                  name="level_of_education"
                  id="level_of_education"
                  value={formData.level_of_education}
                  onChange={handleInputChange}
                  placeholder="Your highest level of education? 🎓"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  }${
                    formData.level_of_education &&
                    formData.level_of_education.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.level_of_education
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.level_of_education &&
                  !(
                    formData.level_of_education &&
                    formData.level_of_education.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.level_of_education}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="ever_Participated"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  <FontAwesomeIcon
                    icon={faGroupArrowsRotate}
                    className="werey2 mr-2 text-[gold]"
                  />
                  Have you participated in a Njangi group before?
                </label>
                <select
                  name="ever_Participated"
                  id="ever_Participated"
                  value={formData.ever_Participated}
                  onChange={handleInputChange}
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.ever_Participated &&
                    formData.ever_Participated !== "Select an Option"
                      ? "border-green-500 focus:ring-green-500"
                      : errors.ever_Participated
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                  ref={ever_ParticipatedRef}
                  onMouseEnter={() => ever_ParticipatedRef.current?.focus()}
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
                {errors.ever_Participated &&
                  !(
                    formData.ever_Participated &&
                    formData.ever_Participated !== "Select an Option"
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.ever_Participated}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="preferred_method"
                  className={`font-semibold text-lg tracking-wide
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    `}
                >
                  🫰🏾 What is your preferred method of payment?
                </label>
                <select
                  name="preferred_method"
                  id="preferred_method"
                  value={formData.preferred_method}
                  onChange={handleInputChange}
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.preferred_method &&
                    formData.preferred_method !== "Select an Option"
                      ? "border-green-500 focus:ring-green-500"
                      : errors.preferred_method
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                  ref={preferred_methodRef}
                  onMouseEnter={() => preferred_methodRef.current?.focus()}
                >
                  <option className="singleCol" value="Select an Option">
                    Select an Option
                  </option>
                  <option className="singleCol" value="MTN Mobile Money">
                    MTN Mobile Money 💰
                  </option>
                  <option className="singleCol" value="ORANGE Mobile Money">
                    ORANGE Mobile Money 💰
                  </option>
                </select>
                {errors.preferred_method &&
                  !(
                    formData.preferred_method &&
                    formData.preferred_method !== "Select an Option"
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.preferred_method}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="often_contribution"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  <FontAwesomeIcon
                    icon={faHandHoldingDollar}
                    className="werey2 mr-2 text-[gold]"
                  />
                  How often can you contribute?
                </label>
                <input
                  ref={often_contributionRef}
                  onMouseEnter={() => often_contributionRef.current?.focus()}
                  type="text"
                  name="often_contribution"
                  id="often_contribution"
                  value={formData.often_contribution}
                  onChange={handleInputChange}
                  placeholder="How often can you contribute?"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.often_contribution &&
                    formData.often_contribution.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.often_contribution
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.often_contribution &&
                  !(
                    formData.often_contribution &&
                    formData.often_contribution.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.often_contribution}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="primary_njangi_goal"
                  className={`font-semibold text-lg tracking-wide
                     ${isDarkMode ? "text-white" : " text-gray-900"}`}
                >
                  🎯 What are your primary goals for joining a Njangi Group?
                </label>
                <input
                  ref={primary_njangi_goalRef}
                  onMouseEnter={() => primary_njangi_goalRef.current?.focus()}
                  type="text"
                  name="primary_njangi_goal"
                  id="primary_njangi_goal"
                  value={formData.primary_njangi_goal}
                  onChange={handleInputChange}
                  placeholder="What are your primary goals for joining a Njangi group? (e.g., saving, investment)"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.primary_njangi_goal &&
                    formData.primary_njangi_goal.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.primary_njangi_goal
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.primary_njangi_goal &&
                  !(
                    formData.primary_njangi_goal &&
                    formData.primary_njangi_goal.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.primary_njangi_goal}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="comfortability"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  #️⃣ How many members are you comfortable with in a Njangi
                  group?
                </label>
                <input
                  ref={comfortabilityRef}
                  onMouseEnter={() => comfortabilityRef.current?.focus()}
                  type="number"
                  name="comfortability"
                  id="comfortability"
                  value={formData.comfortability}
                  onChange={handleInputChange}
                  placeholder="How many members are you comfortable with in a Njangi group?"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.comfortability && formData.comfortability >= 1
                      ? "border-green-500 focus:ring-green-500"
                      : errors.comfortability
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.comfortability &&
                  !(
                    formData.comfortability && formData.comfortability >= 1
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.comfortability}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="often_check_mails"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  📱 How often do you check your messages or emails?
                </label>
                <input
                  ref={often_check_mailsRef}
                  onMouseEnter={() => often_check_mailsRef.current?.focus()}
                  type="text"
                  name="often_check_mails"
                  id="often_check_mails"
                  value={formData.often_check_mails}
                  onChange={handleInputChange}
                  placeholder="State often do you check your messages or emails?"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.often_check_mails &&
                    formData.often_check_mails.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.often_check_mails
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.often_check_mails &&
                  !(
                    formData.often_check_mails &&
                    formData.often_check_mails.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.often_check_mails}
                    </motion.p>
                  )}
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true, amount: 0.05 }}
            className="w-full lg:w-[45%] p-6 lg:p-9"
          >
            <div className="flex flex-col gap-6 w-full max-w-xl">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="previous_challenges"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="werey2 mr-2 mt-4 text-[gold]"
                  />
                  What challenges have you faced in previous Njangi groups?
                </label>
                <input
                  ref={previous_challengesRef}
                  onMouseEnter={() => previous_challengesRef.current?.focus()}
                  type="text"
                  name="previous_challenges"
                  id="previous_challenges"
                  value={formData.previous_challenges}
                  onChange={handleInputChange}
                  placeholder="Name the challenges have you faced in previous Njangi groups?"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.previous_challenges &&
                    formData.previous_challenges.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.previous_challenges
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.previous_challenges &&
                  !(
                    formData.previous_challenges &&
                    formData.previous_challenges.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.previous_challenges}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="recommend_Platform"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  <FontAwesomeIcon
                    icon={faCommentDollar}
                    className="werey2 mr-2 text-[gold] mt-4"
                  />
                  How likely are you to recommend this Njangi Platform to
                  others?
                </label>
                <select
                  name="recommend_Platform"
                  id="recommend_Platform"
                  value={formData.recommend_Platform}
                  onChange={handleInputChange}
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.recommend_Platform &&
                    formData.recommend_Platform !== "Select an Option"
                      ? "border-green-500 focus:ring-green-500"
                      : errors.recommend_Platform
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                  ref={recommend_PlatformRef}
                  onMouseEnter={() => recommend_PlatformRef.current?.focus()}
                >
                  <option className="singleCol" value="Select an Option">
                    Select an Option
                  </option>
                  <option className="singleCol" value="1/10">
                    1/10
                  </option>
                  <option className="singleCol" value="2/10">
                    2/10
                  </option>
                  <option className="singleCol" value="3/10">
                    3/10
                  </option>
                  <option className="singleCol" value="4/10">
                    4/10
                  </option>
                  <option className="singleCol" value="5/10">
                    5/10
                  </option>
                  <option className="singleCol" value="6/10">
                    6/10
                  </option>
                  <option className="singleCol" value="7/10">
                    7/10
                  </option>
                  <option className="singleCol" value="8/10">
                    8/10
                  </option>
                  <option className="singleCol" value="9/10">
                    9/10
                  </option>
                  <option className="singleCol" value="10/10">
                    10/10
                  </option>
                </select>
                {errors.recommend_Platform &&
                  !(
                    formData.recommend_Platform &&
                    formData.recommend_Platform !== "Select an Option"
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.recommend_Platform}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="manage_finances"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  <FontAwesomeIcon
                    icon={faCoins}
                    className="werey2 mr-2 text-[gold]"
                  />
                  How do you typically manage your finances?
                </label>
                <input
                  ref={manage_financesRef}
                  onMouseEnter={() => manage_financesRef.current?.focus()}
                  type="text"
                  name="manage_finances"
                  id="manage_finances"
                  value={formData.manage_finances}
                  onChange={handleInputChange}
                  placeholder="e.g., monthly budgeting, tracking expenses"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.manage_finances &&
                    formData.manage_finances.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.manage_finances
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.manage_finances &&
                  !(
                    formData.manage_finances &&
                    formData.manage_finances.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.manage_finances}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="receive_financial_education"
                  className={`font-semibold text-lg tracking-wide
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    `}
                >
                  📗 Would you like to receive educational materials on
                  financial literacy?
                </label>
                <select
                  name="receive_financial_education"
                  id="receive_financial_education"
                  value={formData.receive_financial_education}
                  onChange={handleInputChange}
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.receive_financial_education &&
                    formData.receive_financial_education !== "Select an Option"
                      ? "border-green-500 focus:ring-green-500"
                      : errors.receive_financial_education
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                  ref={receive_financial_educationRef}
                  onMouseEnter={() =>
                    receive_financial_educationRef.current?.focus()
                  }
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
                {errors.receive_financial_education &&
                  !(
                    formData.receive_financial_education &&
                    formData.receive_financial_education !== "Select an Option"
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.receive_financial_education}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="suggestions"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  💭 Do you have any suggestions for improving the Njangi
                  experience?
                </label>
                <input
                  ref={suggestionsRef}
                  onMouseEnter={() => suggestionsRef.current?.focus()}
                  type="text"
                  name="suggestions"
                  id="suggestions"
                  value={formData.suggestions}
                  onChange={handleInputChange}
                  placeholder="State Your Suggestions"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.suggestions &&
                    formData.suggestions.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.suggestions
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.suggestions &&
                  !(
                    formData.suggestions &&
                    formData.suggestions.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.suggestions}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="saving_percentage"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  <FontAwesomeIcon
                    icon={faPiggyBank}
                    className="werey2 mr-2 text-yellow-600 mt-4"
                  />
                  What percentage of your income do you typically save?
                </label>
                <input
                  ref={saving_PercentageRef}
                  onMouseEnter={() => saving_PercentageRef.current?.focus()}
                  type="text"
                  name="saving_percentage"
                  id="saving_percentage"
                  value={formData.saving_percentage}
                  onChange={handleInputChange}
                  placeholder="Your Percentage"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  } ${
                    formData.saving_percentage &&
                    formData.saving_percentage.trim().length >= 1
                      ? "border-green-500 focus:ring-green-500"
                      : errors.saving_percentage
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.saving_percentage &&
                  !(
                    formData.saving_percentage &&
                    formData.saving_percentage.trim().length >= 1
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.saving_percentage}
                    </motion.p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="motivation_contribution"
                  className={`
                    ${isDarkMode ? "text-white" : " text-gray-900"}
                    font-semibold text-lg tracking-wide flex`}
                >
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="werey2 mr-2 text-yellow-600 mt-4 "
                  />
                  What motivates you to stay committed to group contributions?
                </label>
                <input
                  ref={motivation_contributionRef}
                  onMouseEnter={() =>
                    motivation_contributionRef.current?.focus()
                  }
                  type="text"
                  name="motivation_contribution"
                  id="motivation_contribution"
                  value={formData.motivation_contribution}
                  onChange={handleInputChange}
                  placeholder="Your Motivation"
                  className={`w-full text-base rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 transition-all ${
                    isDarkMode
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-black placeholder-gray-500"
                  }  ${
                    formData.motivation_contribution &&
                    formData.motivation_contribution.trim().length >= 2
                      ? "border-green-500 focus:ring-green-500"
                      : errors.motivation_contribution
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white-600 focus:ring-white-600"
                  }`}
                />
                {errors.motivation_contribution &&
                  !(
                    formData.motivation_contribution &&
                    formData.motivation_contribution.trim().length >= 2
                  ) && (
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.05 }}
                      className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                    >
                      {errors.motivation_contribution}
                    </motion.p>
                  )}
              </div>
            </div>
          </motion.div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-yellow-600 via-slate-700 to-blue-600 w-[90%] text-white mb-10 py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center ml-[5%] mt-[-1%] "
        >
          Complete Survey ✅
        </button>
      </motion.section>
    </main>
  );
};

export default Survey_User;
