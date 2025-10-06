import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Bell,
  DollarSign,
  Users,
  CreditCard,
  Clipboard,
  PlusCircle,
  ArrowRight,
  Calendar,
  Menu,
  Sun,
  Moon,
} from "lucide-react";

const DashMain = ({ setActiveComponent = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchReg = useRef();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved === "true";
    }
    return false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);

    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", isDarkMode.toString());
    }
  }, [isDarkMode]);

  const onMouseEnterSearch = () => {
    searchReg.current?.focus();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
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
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                ref={searchReg}
                onMouseEnter={onMouseEnterSearch}
                placeholder="Search..."
                className={`px-4 py-2 pl-10 w-full md:w-64 lg:w-96 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
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
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
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
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <StatCard
            title="Total Njangi Contributions"
            value="23,750"
            unit="Francs"
            change="+12% from last month"
            icon={<DollarSign className="text-teal-500" size={18} />}
            bgColor="bg-teal-100"
            isDarkMode={isDarkMode}
            onClick={() => setActiveComponent("transactions")}
          />

          <StatCard
            title="Active Groups"
            value="9"
            change="+3 new this month"
            icon={<Users className="text-purple-500" size={18} />}
            bgColor="bg-purple-100"
            isDarkMode={isDarkMode}
            onClick={() => setActiveComponent("groups")}
          />

          <StatCard
            title="Total Chopped"
            value="38,900"
            unit="Francs"
            change="+24% from last month"
            icon={<CreditCard className="text-blue-500" size={18} />}
            bgColor="bg-blue-100"
            isDarkMode={isDarkMode}
            onClick={() => setActiveComponent("transactions")}
          />

          <StatCard
            title="Profile Completion"
            value="75%"
            icon={<Clipboard className="text-orange-500" size={18} />}
            bgColor="bg-orange-100"
            isDarkMode={isDarkMode}
            showProgress={true}
            onClick={() => setActiveComponent("profile")}
          />
        </div>

        {/* Recent Activity and Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <RecentActivity
            isDarkMode={isDarkMode}
            setActiveComponent={setActiveComponent}
          />
          <GroupsList
            isDarkMode={isDarkMode}
            setActiveComponent={setActiveComponent}
          />
        </div>

        {/* Upcoming Payments */}
        <UpcomingPayments
          isDarkMode={isDarkMode}
          setActiveComponent={setActiveComponent}
        />
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({
  title,
  value,
  unit,
  change,
  icon,
  bgColor,
  isDarkMode,
  showProgress,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`p-4 md:p-6 rounded-lg shadow-sm border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
      isDarkMode
        ? "bg-gray-800 border-gray-700 hover:border-blue-600"
        : "bg-white border-gray-100 hover:border-blue-300"
    }`}
  >
    <div className="flex justify-between items-center mb-4">
      <h2
        className={`text-xs sm:text-sm font-medium ${
          isDarkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {title}
      </h2>
      <div className={`${bgColor} p-1.5 md:p-2 rounded-lg`}>{icon}</div>
    </div>
    <p
      className={`text-xl md:text-2xl lg:text-3xl font-bold ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      {value}{" "}
      {unit && <span className="text-sm md:text-lg lg:text-xl">{unit}</span>}
    </p>
    {showProgress ? (
      <div
        className={`w-full rounded-full h-2.5 mt-2 ${
          isDarkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "75%" }}
        ></div>
      </div>
    ) : (
      <div className="flex items-center text-xs md:text-sm mt-2 text-green-500">
        <span>{change}</span>
      </div>
    )}
  </div>
);

// Recent Activity Component
const RecentActivity = ({ isDarkMode, setActiveComponent }) => {
  const activities = [
    {
      type: "Contribution",
      group: "Family Support",
      amount: "+5000 francs",
      date: "Today, 2:30 PM",
      status: "completed",
    },
    {
      type: "Received",
      group: "Business Investment",
      amount: "+30,000 francs",
      date: "Mar 07, 2025 | 11:15 AM",
      status: "completed",
    },
    {
      type: "Contribution",
      group: "Education Fund",
      amount: "+25,000 francs",
      date: "Mar 07, 2025 | 04:53 PM",
      status: "pending",
    },
    {
      type: "Received",
      group: "Business Investment",
      amount: "+200,000 francs",
      date: "Mar 08, 2025 | 9:39 AM",
      status: "completed",
    },
    {
      type: "Contribution",
      group: "Education Fund",
      amount: "+50,000 francs",
      date: "Mar 08, 2025 | 01:29 PM",
      status: "pending",
    },
  ];

  return (
    <div
      className={`p-4 md:p-6 rounded-lg shadow-sm border-2  transition-all duration-300 hover:shadow-lg ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 hover:border-blue-600"
          : "bg-white border-gray-100 hover:border-blue-300"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`text-base md:text-lg font-semibold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Your Recent Njangi Activity
        </h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm transition-colors"
          onClick={() => setActiveComponent("transactions")}
        >
          View All Activities
        </button>
      </div>
      <div className="space-y-3 md:space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 md:p-3 rounded-lg transition-all ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center">
              <div
                className={`p-1.5 md:p-2 rounded-lg ${
                  activity.type === "Contribution"
                    ? "bg-green-100 text-green-500"
                    : "bg-blue-100 text-blue-500"
                }`}
              >
                {activity.type === "Contribution" ? (
                  <PlusCircle size={16} />
                ) : (
                  <ArrowRight size={16} />
                )}
              </div>
              <div className="ml-2 md:ml-3">
                <p
                  className={`text-xs md:text-sm font-medium ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {activity.type}
                </p>
                <p
                  className={`text-[13px] ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {activity.group}
                </p>
              </div>
            </div>
            <div className="text-right mt-2 sm:mt-0 ml-8 sm:ml-0">
              <p className="bg-purple-200 text-teal-600 px-2 md:px-4 py-1 border rounded-xl text-xs md:text-sm font-medium">
                {activity.amount}
              </p>
              <p
                className={`text-[13px] mt-2 ${
                  isDarkMode ? "text-gray-200" : "text-gray-500"
                }`}
              >
                {activity.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Groups List Component
const GroupsList = ({ isDarkMode, setActiveComponent }) => {
  const groups = [
    {
      name: "Family Support",
      members: 15,
      nextCollection: "Mar 07, 2025",
      amount: "5000 francs per week",
    },
    {
      name: "Business Investment",
      members: 8,
      nextCollection: "Mar 07, 2025",
      amount: "25,000 francs per month",
    },
    {
      name: "Emergency Fund",
      members: 12,
      nextCollection: "Mar 08, 2025",
      amount: "10,000 francs after every 3 days",
    },
    {
      name: "Education Fund",
      members: 6,
      nextCollection: "Mar 08, 2025",
      amount: "2,000 francs per day",
    },
  ];

  return (
    <div
      className={`p-4 md:p-6 rounded-lg shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 hover:border-blue-600"
          : "bg-white border-gray-100 hover:border-blue-300"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`text-base md:text-lg font-semibold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Your Groups
        </h2>
        <button
          onClick={() => setActiveComponent("groups")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm transition-colors"
        >
          View All Groups
        </button>
      </div>
      <div className="space-y-3 md:space-y-4">
        {groups.map((group, index) => (
          <div
            key={index}
            className={`p-2 md:p-3 rounded-lg transition-all border ${
              isDarkMode
                ? "hover:bg-gray-700 border-gray-700"
                : "hover:bg-gray-50 border-gray-100"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3
                className={`font-medium text-sm md:text-base ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {group.name}
              </h3>
              <span className="text-xs md:text-sm bg-orange-200 text-teal-600 px-2 md:px-4 py-1 rounded-full mt-1 sm:mt-0">
                {group.amount}
              </span>
            </div>
            <div
              className={`flex flex-col sm:flex-row sm:justify-between mt-2 text-xs md:text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              <div className="flex items-center">
                <Users size={12} className="mr-1" />
                <span>{group.members} members</span>
              </div>
              <div className="flex items-center mt-1 sm:mt-0">
                <Calendar size={12} className="mr-1" />
                <span>{group.nextCollection}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Upcoming Payments Component
const UpcomingPayments = ({ isDarkMode, setActiveComponent }) => {
  const payments = [
    {
      group: "Family Support",
      amount: "5000 francs",
      dueDate: "Mar 07, 2025",
      status: "upcoming",
    },
    {
      group: "Business Investment",
      amount: "25,000 francs",
      dueDate: "Mar 07, 2025",
      status: "upcoming",
    },
    {
      group: "Emergency Fund",
      amount: "2,000 francs",
      dueDate: "Mar 08, 2025",
      status: "overdue",
    },
  ];

  return (
    <div
      className={`p-4 md:p-6 mb-10 rounded-lg shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 hover:border-blue-600"
          : "bg-white border-gray-100 hover:border-blue-300"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`text-base md:text-lg font-semibold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Upcoming Payments
        </h2>
        <span
          className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm transition-colors"
          onClick={() => setActiveComponent("transactions")}
        >
          View All Payments
        </span>
      </div>
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={isDarkMode ? "bg-gray-700" : "bg-gray-50"}>
            <tr>
              <th
                className={`px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium uppercase tracking-wider ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Group
              </th>
              <th
                className={`px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium uppercase tracking-wider ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Amount
              </th>
              <th
                className={`px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium uppercase tracking-wider ${
                  isDarkMode ? "text-gray-200" : "text-gray-500"
                }`}
              > 
                Due Date
              </th>
              <th
                className={`px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium uppercase tracking-wider ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Status
              </th>
              <th
                className={`px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium uppercase tracking-wider ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody
            className={`divide-y ${
              isDarkMode ? "divide-gray-700" : "divide-gray-200"
            }`}
          >
            {payments.map((payment, index) => (
              <tr key={index}>
                <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                  <div
                    className={`text-xs md:text-sm font-medium ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {payment.group}
                  </div>
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                  <div
                    className={`text-xs md:text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-900"
                    }`}
                  >
                    {payment.amount}
                  </div>
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                  <div
                    className={`text-xs md:text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {payment.dueDate}
                  </div>
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      payment.status === "upcoming"
                        ? "bg-yellow-100 text-yellow-800"
                        : payment.status === "overdue"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {payment.status.charAt(0).toUpperCase() +
                      payment.status.slice(1)}
                  </span>
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm transition-colors">
                    Pay Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashMain;
