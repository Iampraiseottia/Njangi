"use client";

import { React, useState, useEffect, useRef } from "react";

import { useActionState } from "react";

import globalStyle from "../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCity,
  faPersonHalfDress,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

// import { CreateUser02AboutYou } from '../actions';
import { useForm } from "@conform-to/react";

import { motion } from "motion/react";

const About_User = ({ setActiveComponent }) => {
  if (!setActiveComponent || typeof setActiveComponent !== "function") {
    console.error("setActiveComponent is not a function or is undefined.");
    return null; // Prevent rendering if prop is invalid
  }

  // const [lastResult, action] = useActionState(CreateUser02AboutYou, undefined);
  // const [form, fields] = useForm({ lastResult });

  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [state_Region, setStateRegion] = useState("");
  const [city, setCity] = useState("");
  const [homeAddress, setHomeAddress] = useState("");

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode === "true";
    }
    return false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);

    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const DateOfBirthReg = useRef();

  const onMouseEnterDateOfBirthReg = () => {
    DateOfBirthReg.current.focus();
  };

  const GenderReg = useRef();

  const onMouseEnterGenderReg = () => {
    GenderReg.current.focus();
  };

  const countryReg = useRef();

  const onMouseEnterCountryReg = () => {
    countryReg.current.focus();
  };

  const state_Region_Ref = useRef();

  const onMouseEnterStateRegion_Ref = () => {
    state_Region_Ref.current.focus();
  };

  const cityRef = useRef();

  const onMouseEnterCityRef = () => {
    cityRef.current.focus();
  };

  const homeAddressRef = useRef();

  const onMouseEnterHomeAddressRef = () => {
    homeAddressRef.current.focus();
  };

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    dateOfBirth: "",
    gender: "",
    country: "",
    stateRegion: "",
    city: "",
    homeAddress: "",
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

    //  Date of Birth validation
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required";
    } else {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (age < 18 || (age === 18 && monthDiff < 0)) {
        newErrors.dateOfBirth = "You must be at least 18 years old";
      }
    }

    // Gender validation
    if (!formData.gender || formData.gender === "Choose Gender") {
      newErrors.gender = "Please select a gender";
    }

    // Country validation
    if (!formData.country || formData.country.trim().length < 2) {
      newErrors.country = "Please enter a valid country";
    }

    // State/Region validation
    if (!formData.stateRegion || formData.stateRegion.trim().length < 2) {
      newErrors.stateRegion = "Please enter a valid state or region";
    }

    // City validation
    if (!formData.city || formData.city.trim().length < 2) {
      newErrors.city = "Please enter a valid city";
    }

    // Home Address validation
    if (!formData.homeAddress || formData.homeAddress.trim().length < 5) {
      newErrors.homeAddress = "Please enter a valid home address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setActiveComponent("income");
    }
  };

  return (
    <main className="flex relative justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4">
      <p className="dance absolute"></p>
      <p className=" dance2 absolute"></p>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-blue-600  overflow-hidden rounded-lg wrapper my-8"
      >
        {/* About User Component Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-full lg:w-[45%] p-6 lg:p-12 xl:p-20"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10">
            It's All About You!!!
          </h1>
          <br />
          <p className="text-base lg:text-lg mb-5">
            Unlock exclusive rewards 🔥 which awaits you. Get personalized
            offers just for you just by us getting to know you better. Don't
            miss out!!!, Your journey starts here..
          </p>
          <br />
          <FontAwesomeIcon icon={faUser} className="werey " />
        </motion.div>

        {/* About User Component Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-full lg:w-[55%] p-6 lg:p-9"
        >
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 text-center mb-5">
            Start Your Journey 🔥
          </h1>
          <br />
          <form
            className="flex flex-col gap-6 w-full max-w-xl"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="dateOfBirth"
                className="font-semibold text-lg tracking-wide flex"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="werey2 mr-2 text-[gold]"
                />{" "}
                Date of Birth:
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                ref={DateOfBirthReg}
                onMouseEnter={onMouseEnterDateOfBirthReg}
                className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 placeholder-white 
                ${
                  formData.dateOfBirth &&
                  formData.dateOfBirth.trim().length >= 3
                    ? "border-green-500 focus:ring-green-500"
                    : "border-blue-600  focus:ring-blue-600 "
                } 
                ${
                  errors.dateOfBirth
                    ? "border-red-500 focus:ring-red-500"
                    : "border-blue-600  focus:ring-blue-600 "
                }`}
              />
              {errors.dateOfBirth &&
                !(
                  formData.dateOfBirth &&
                  formData.dateOfBirth.trim().length >= 3
                ) && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.05 }}
                    className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                  >
                    {errors.dateOfBirth}
                  </motion.p>
                )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="gender"
                className="font-semibold text-lg tracking-wide flex"
              >
                <FontAwesomeIcon
                  icon={faPersonHalfDress}
                  className="werey2 mr-2 text-[gold]"
                />{" "}
                Gender:
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleInputChange}
                ref={GenderReg}
                onMouseEnter={onMouseEnterGenderReg}
                className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 text-white 
                ${
                  formData.gender && formData.gender.trim().length >= 3
                    ? "border-green-500 focus:ring-green-500"
                    : "border-blue-600  focus:ring-blue-600 "
                } 
                ${
                  errors.gender
                    ? "border-red-500 focus:ring-red-500"
                    : "border-blue-600  focus:ring-blue-600 "
                }`}
              >
                <option value="Choose Gender" className="text-black">
                  Choose Your Gender
                </option>
                <option value="Male" className="text-black">
                  Male
                </option>
                <option value="Female" className="text-black">
                  Female
                </option>
              </select>
              {errors.gender &&
                !(formData.gender && formData.gender.trim().length >= 3) && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.05 }}
                    className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                  >
                    {errors.gender}
                  </motion.p>
                )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="country"
                className="font-semibold text-lg tracking-wide"
              >
                🏴 Country:
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                ref={countryReg}
                onMouseEnter={onMouseEnterCountryReg}
                placeholder="Your Country"
                className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 placeholder-white 
                ${
                  formData.country && formData.country.trim().length >= 3
                    ? "border-green-500 focus:ring-green-500"
                    : "border-blue-600  focus:ring-blue-600 "
                } 
                ${
                  errors.country
                    ? "border-red-500 focus:ring-red-500"
                    : "border-blue-600  focus:ring-blue-600 "
                }`}
              />
              {errors.country &&
                !(formData.country && formData.country.trim().length >= 3) && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.05 }}
                    className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                  >
                    {errors.country}
                  </motion.p>
                )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="stateRegion"
                className="font-semibold text-lg tracking-wide"
              >
                🌆 State or Region:
              </label>
              <input
                type="text"
                name="stateRegion"
                id="stateRegion"
                value={formData.stateRegion}
                onChange={handleInputChange}
                ref={state_Region_Ref}
                onMouseEnter={onMouseEnterStateRegion_Ref}
                placeholder="Your State / Region"
                className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 placeholder-white 
                ${
                  formData.stateRegion &&
                  formData.stateRegion.trim().length >= 3
                    ? "border-green-500 focus:ring-green-500"
                    : "border-blue-600  focus:ring-blue-600 "
                } 
                ${
                  errors.stateRegion
                    ? "border-red-500 focus:ring-red-500"
                    : "border-blue-600  focus:ring-blue-600 "
                }`}
              />
              {errors.stateRegion &&
                !(
                  formData.stateRegion &&
                  formData.stateRegion.trim().length >= 3
                ) && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.05 }}
                    className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                  >
                    {errors.stateRegion}
                  </motion.p>
                )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="city"
                className="font-semibold text-lg tracking-wide flex"
              >
                <FontAwesomeIcon
                  icon={faCity}
                  className="werey2 mr-2 text-blue-600 "
                />{" "}
                City:
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                ref={cityRef}
                onMouseEnter={onMouseEnterCityRef}
                placeholder="Your Current City / Town"
                className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 placeholder-white 
                ${
                  formData.city && formData.city.trim().length >= 3
                    ? "border-green-500 focus:ring-green-500"
                    : "border-blue-600  focus:ring-blue-600 "
                } 
                ${
                  errors.city
                    ? "border-red-500 focus:ring-red-500"
                    : "border-blue-600  focus:ring-blue-600 "
                }`}
              />
              {errors.city &&
                !(formData.city && formData.city.trim().length >= 3) && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.05 }}
                    className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                  >
                    {errors.city}
                  </motion.p>
                )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="homeAddress"
                className="font-semibold text-lg tracking-wide"
              >
                🏠 Home Address:
              </label>
              <input
                type="text"
                name="homeAddress"
                id="homeAddress"
                value={formData.homeAddress}
                onChange={handleInputChange}
                ref={homeAddressRef}
                onMouseEnter={onMouseEnterHomeAddressRef}
                placeholder="Your Current Home Address / Precise Location"
                className={`w-full text-base bg-transparent rounded-xl border-2 py-3 px-4 focus:ring-1 focus:outline-none duration-300 placeholder-white 
                ${
                  formData.homeAddress &&
                  formData.homeAddress.trim().length >= 3
                    ? "border-green-500 focus:ring-green-500"
                    : "border-blue-600  focus:ring-blue-600 "
                } 
                ${
                  errors.homeAddress
                    ? "border-red-500 focus:ring-red-500"
                    : "border-blue-600  focus:ring-blue-600 "
                }`}
              />
              {errors.homeAddress &&
                !(
                  formData.homeAddress &&
                  formData.homeAddress.trim().length >= 3
                ) && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.05 }}
                    className="text-[16px] text-red-500 text-right font-bold tracking-wide"
                  >
                    {errors.homeAddress}
                  </motion.p>
                )}
            </div>

            <button
              type="submit"
              className="mt-3 bg-gradient-to-r from-blue-600  via-slate-700 to-blue-600  w-full text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center"
            >
              Submit and Continue ➡️
            </button>
          </form>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default About_User;
