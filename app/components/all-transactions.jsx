"use client";

import { React, useState, useEffect, useRef } from "react";

import { ArrowRight, Bell, Calendar, Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "../globals.css";

import { motion } from "motion/react";

const All_Transactions = ({ setActiveComponent }) => {

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

  const searchReg = useRef();

  const onMouseEnterSearch = () => {
    searchReg.current.focus();
  };

  return (
    <div className="p-4 md:p-8">
      {/* Header Section - Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        viewport={{ once: true, amount: 0.05 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
      >
        <div className="w-full sm:w-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Good Day 👋,
            <span className="block sm:inline text-[lightseagreen] text-[28px] sm:text-[32px] md:text-[42px] sm:pl-1">
              Ottia Praise
            </span>
          </h1> 
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:space-x-5 w-full sm:w-auto justify-end">
          {/* Notification */}
          <div
            className="relative cursor-pointer ease-in-out duration-100"
            title="Notifications"
          >
            <Bell className="text-gray-600 cursor-pointer" size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-extrabold">
              3
            </span>
          </div>

         
          {/* User Avatar */}
          <div
            onClick={() => setActiveComponent("profile")}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold cursor-pointer ease-in-out duration-100"
            title="Profile"
          >
            OP
          </div>

          {/* Light and Dark Mode */}
          <div
            onClick={() => setIsDarkMode((prevMode) => !prevMode)}
            title="Modes"
            className={`w-20 md:w-24 h-9 md:h-10 rounded-full bg-teal-500 justify-between flex items-center ${
              isDarkMode ? "bg-white" : "bg-lightseagreen"
            } transition-colors duration-300 cursor-pointer`}
          >
            <div
              className={`w-[49%] h-full flex items-center justify-center rounded-full transition-transform duration-300 ${
                isDarkMode ? "translate-x-full bg-white" : "bg-teal-500"
              }`}
            >
              <FontAwesomeIcon
                icon={faMoon}
                className={`w-5 h-5 md:w-7 md:h-7 ${
                  isDarkMode ? "text-lightseagreen" : "text-white"
                }`}
              />
            </div>
            <div
              className={`w-[49%] mr-1 h-full flex items-center justify-center rounded-full transition-transform duration-300 ${
                isDarkMode ? "bg-teal-500" : "bg-white"
              }`}
            >
              <FontAwesomeIcon
                icon={faSun}
                className={`w-5 h-5 md:w-7 md:h-7 ${
                  isDarkMode ? "text-white" : "text-teal-500"
                }`}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Transaction Main */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        viewport={{ once: true, amount: 0.05 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-6 md:mt-10 font-bold text-gray-800 mb-4 md:mb-6 text-center">
          Transactions History
        </h1>

        {/* Search and Filter Section - Responsive */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 mb-6 hover:shadow ease-in-out duration-300">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:space-x-4 w-full">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  ref={searchReg}
                  onMouseEnter={onMouseEnterSearch}
                  placeholder="Search transactions"
                  className="px-4 py-2 pl-10 duration-300 ease-in-out rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 w-full searchTranc"
                /> 
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>

              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none searchTranc focus:ring-2 focus:ring-teal-500 w-full sm:w-auto">
                <option className="singleCol" value="All Types">
                  All Types
                </option>
                <option className="singleCol" value="Contributions">
                  Contributions
                </option>
                <option className="singleCol" value="Received">
                  Received
                </option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:space-x-4 w-full md:w-auto">
              <button className="flex items-center justify-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 w-full sm:w-[200px] searchTranc ">
                <Calendar size={16} />
                <span>Filter by Date</span>
              </button>

              <button className="flex items-center justify-center space-x-1 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 w-full sm:w-auto">
                <ArrowRight size={16} />
                <span>Download</span> 
              </button>
            </div>
          </div>
        </div>

        {/* Transaction Table - Responsive */}
        <div className="bg-white rounded-lg shadow-sm border-2 border-gray-100 overflow-hidden hover:shadow-md ease-in-out duration-300">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Group
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Status
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Transaction ID
                  </th>
                  <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    date: "Mar 09, 2025",
                    type: "Contribution",
                    group: "Family Support",
                    amount: "+65, 000 Francs",
                    status: "Completed",
                    transaction_id: "TRX-67890",
                  },
                  {
                    date: "Mar 07, 2025",
                    type: "Received",
                    group: "Business Investment",
                    amount: "+338, 000 Francs",
                    status: "Completed",
                    transaction_id: "TRX-67892",
                  },
                  {
                    date: "Mar 05, 2025",
                    type: "Contribution",
                    group: "Education Fund",
                    amount: "+52, 000 Francs",
                    status: "Completed",
                    transaction_id: "TRX-67893",
                  },
                  {
                    date: "Mar 03, 2025",
                    type: "Contribution",
                    group: "Family Support",
                    amount: "+30, 000 Francs",
                    status: "Completed",
                    transaction_id: "TRX-67894",
                  },
                  {
                    date: "Feb 25, 2025",
                    type: "Received",
                    group: "Emergency Fund",
                    amount: "+260, 000 Francs",
                    status: "Completed",
                    transaction_id: "TRX-67896",
                  },
                ].map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-50 tableContent">
                    <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transaction.type === "Contribution"
                            ? "bg-green-100 text-green-800"
                            : transaction.type === "Withdrawal"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {transaction.type}
                      </span>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 hidden md:table-cell">
                      {transaction.group}
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium">
                      <span
                        className={
                          transaction.amount.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {transaction.amount}
                      </span>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 hidden sm:table-cell">
                      {transaction.status}
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 hidden lg:table-cell">
                      {transaction.transaction_id}
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      <button className="text-teal-600 hover:text-teal-800 font-medium">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default All_Transactions;
