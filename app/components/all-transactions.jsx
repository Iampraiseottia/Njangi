"use client";

import { React, useState, useEffect, useRef } from "react";

import { Bell, Search, Menu, Sun, Moon } from "lucide-react";

import globalStyle from "../globals.css";

import { motion } from "motion/react";

const All_Transactions = ({ setActiveComponent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4"
      >
        <div className="pt-2 md:pt-4 w-full md:w-auto">
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            } break-words flex flex-col md:flex-row`}
          >
            <span>Welcome Back!!!,</span>
            <span className="text-blue-600 text-[28px] md:text-[36px] lg:text-[42px] pl-1">
              Ottia Praise
            </span>
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden w-full flex justify-end">
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop header items / Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "flex " : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:space-x-5`}
        >
          {/* Notification */}
          <div
            className="relative cursor-pointer transition-transform hover:scale-110"
            title="Notifications"
          >
            <Bell
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } cursor-pointer`}
              size={28}
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-extrabold">
              3
            </span>
          </div>

          {/* User Avatar */}
          <div
            onClick={() => setActiveComponent("profile")}
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold cursor-pointer transition-transform hover:scale-110"
            title="Profile"
          >
            OP
          </div>

          {/* Light and Dark Mode Toggle */}
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
                <Moon className="w-5 h-5 text-white-700" />
              ) : (
                <Sun className="w-5 h-5 text-blue-600" />
              )}
            </div>
          </button>
        </div>
      </motion.div>

      {/* Transaction Main */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        viewport={{ once: true, amount: 0.05 }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-14 text-center">
          Transactions History
        </h1>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                ref={searchReg}
                onMouseEnter={onMouseEnterSearch}
                placeholder="Search..."
                className={`px-4 py-2 pl-10 w-full md:w-64 lg:w-96 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                }`}
              />
              <Search
                className={`absolute left-3 top-2.5 ${
                  isDarkMode ? "text-gray-400" : "text-gray-400"
                }`}
                size={18}
              />
            </div>

            <select
              className={`px-4 py-2 transaction_list transaction_list2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto ${
                isDarkMode
                  ? "bg-gray-400 text-white"
                  : "bg-transparent text-black "
              }`}
            >
              <option className="singleCol" value="All Types">
                All Types
              </option>
              <option className="singleCol" value="Ascending Order">
                Ascending Order
              </option>
              <option className="singleCol" value="Descending Order">
                Descending Order
              </option>
              <option className="singleCol" value="Filter By Date">
                Filter By Date
              </option>
              <option className="singleCol" value="Alphabetic Order">
                Alphabetic Order(A - Z)
              </option>
            </select>
          </div>
        </div>

        {/* Transaction Table */}
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
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm transition-colors">
                        View Details
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
