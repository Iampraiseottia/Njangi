"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import globalStyle from "../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPeopleGroup,
  faMoneyBill,
  faRightFromBracket,
  faAddressCard,
  faMoneyCheckDollar,
  faIdCard,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

import Metadata from "./Metadata";
import About_User from "./about-user";
import Income_User from "./income-user";
import Identity_User from "./identity-user";
import Survey_User from "./survey-user";
import Njangi_Groups from "./njangi-groups";
import All_Transactions from "./all-transactions";
import Logout from "../logout/page";
import DashMain from "./dashMain";

import { FileText, ChevronDown, ChevronFirst, ChevronLast } from "lucide-react";

const DashBoardContent = () => {

  const [activeComponent, setActiveComponent] = useState("dashboardMain");
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSideBar, setExpandedSideBar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [metadata, setMetadata] = useState({
    title: "Dashboard - Njangi Web Application",
    description:
      "Manage your njangi groups and track activities on the dashboard.",
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const searchParams = useSearchParams();
  const componentParam = searchParams.get("component");

  // Update metadata based on active component
  const updateMetadata = (component) => {
    const metadataMap = {
      dashboardMain: {
        title: "Dashboard - Njangi Web Application",
        description:
          "Manage your njangi groups and track activities on the dashboard.",
      },
      groups: {
        title: "Njangi Groups - Njangi Web Application",
        description: "View and manage your Njangi groups and memberships.",
      },
      "about-you": {
        title: "About You - Njangi Web Application",
        description:
          "Complete your personal information for your Njangi profile.",
      },
      income: {
        title: "Income Details - Njangi Web Application",
        description:
          "Manage your income information for Njangi financial activities.",
      },
      identity: {
        title: "Identity Verification - Njangi Web Application",
        description: "Complete identity verification for your Njangi account.",
      },
      survey: {
        title: "Survey - Njangi Web Application",
        description: "Complete surveys to enhance your Njangi experience.",
      },
      transactions: {
        title: "All Transactions - Njangi Web Application",
        description: "View and manage all your Njangi financial transactions.",
      },

      logout: {
        title: "Logout - Njangi Web Application",
        description: "Securely sign out from your Njangi account.",
      },
    };

    setMetadata(metadataMap[component] || metadataMap["dashboardMain"]);
  };

  // Set active component from URL parameter
  useEffect(() => {
    if (componentParam) {
      setActiveComponent(componentParam);
      updateMetadata(componentParam);
    }
  }, [componentParam]);

  // Handle component change
  const handleComponentChange = (component) => {
    setActiveComponent(component);
    updateMetadata(component);
    if (isMobile && expandedSideBar) setExpandedSideBar(false);
  };

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile && expandedSideBar) {
        setExpandedSideBar(false);
      } else if (!mobile && !expandedSideBar) {
        setExpandedSideBar(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderContent = () => {
    switch (activeComponent) {
      case "dashboardMain":
        return <DashMain setActiveComponent={setActiveComponent} />;
      case "groups":
        return <Njangi_Groups setActiveComponent={setActiveComponent} />;
      case "about-you":
        return <About_User setActiveComponent={setActiveComponent} />;
      case "income":
        return <Income_User setActiveComponent={setActiveComponent} />;
      case "identity":
        return <Identity_User setActiveComponent={setActiveComponent} />;
      case "survey":
        return <Survey_User setActiveComponent={setActiveComponent} />;
      case "transactions":
        return <All_Transactions setActiveComponent={setActiveComponent} />;
      case "logout":
        return <Logout />;
      default:
        return <DashMain />;
    }
  };

  return (
    <section className="w-full relative flex">
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Dashboard Left Section (Side Bar) */}
      <div
        className={`bg-[lightseagreen] duration-500 fixed z-20 dashboard-sidebar-border h-[100vh] top-0 left-0 border-2 border-[lightseagreen] border-solid text-center text-white text-2xl font-semibold transition-all ease-in-out ${
          expandedSideBar
            ? isMobile
              ? "w-4/5 md:w-1/6 left-0"
              : "w-1/6 left-0"
            : isMobile
            ? "w-[60px] left-0"
            : "w-[5%] left-0"
        }`}
        style={{
          overflowX: "hidden",
        }}
      >
        <div className="flex items-start justify-evenly flex-row">
          <div
            className={`flex items-center justify-center mb-4 ${
              expandedSideBar ? "mt-8 w-[4/5]" : "mt-24 w-full"
            }`}
          >
            <div className="rounded-full p-2 flex flex-col items-center justify-center">
              <img
                src="/logo3.png"
                className={`overflow-hidden transition-all ${
                  expandedSideBar ? "w-32 lg:w-32 h-32" : "w-14 h-14 mx-auto"
                }`}
                alt="NJANGI Logo"
              />
              <h1
                className={`tracking-wider text-4xl font-extrabold overflow-hidden transition-all ${
                  expandedSideBar ? "w-auto" : "w-0 opacity-0"
                }`}
              >
                NJANGIFY
              </h1>
            </div>
          </div>
          <button
            onClick={() => setExpandedSideBar((current) => !current)}
            className="absolute p-1.5 rounded-lg text-[lightseagreen] bg-gray-100 top-7 right-5 hover:cursor-pointer ease-in-out z-10"
          >
            {expandedSideBar ? (
              <ChevronFirst size={30} />
            ) : (
              <ChevronLast size={30} />
            )}
          </button>
        </div>

        <div
          onClick={() => handleComponentChange("dashboardMain")}
          title="Dashboard"
          className={`mb-2 flex items-center px-4 py-2 rounded-lg ease-in-out hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${
            expandedSideBar
              ? "mt-[-5px] justify-start"
              : "mt-[-30px] justify-center"
          } ${
            activeComponent === "dashboardMain" ? "bg-white text-teal-500" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faHome}
            className={`transition-all ${
              expandedSideBar ? "h-6 w-6" : "w-6 h-6"
            }`}
          />
          <span
            className={`ml-3 overflow-hidden transition-all ${
              expandedSideBar ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            Dashboard
          </span>
        </div>

        <div className="relative mb-4">
          <div
            title="Complete"
            className={`flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 ease-in-out cursor-pointer transition-all ${
              expandedSideBar ? "justify-between" : "justify-center"
            } ${isOpen ? "mb-1" : ""} ${
              ["about-you", "income", "identity", "survey"].includes(
                activeComponent
              )
                ? "bg-white text-teal-500"
                : ""
            }`}
            onClick={toggleDropdown}
          >
            <div
              className={`flex items-center ${
                expandedSideBar ? "" : "justify-center"
              }`}
            >
              <FileText
                size={expandedSideBar ? 20 : 25}
                className="transition-all "
              />
              <span
                className={`ml-3 transition-all ${
                  expandedSideBar ? "opacity-100" : "opacity-0 w-0"
                }`}
              >
                Complete
              </span>
            </div>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              } ${expandedSideBar ? "ml-2" : "ml-0"}`}
            />
          </div>

          {isOpen && (
            <ul className="mt-1 w-full rounded-lg overflow-hidden ease-in-out transition-all bg-teal-600">
              <li
                title="About You"
                className={`py-2 pl-4 pr-4 hover:bg-white ease-in-out hover:text-teal-500 cursor-pointer transition-all ${
                  expandedSideBar ? "text-left pl-8" : "text-center"
                } ${
                  activeComponent === "about-you"
                    ? "bg-white text-teal-500"
                    : ""
                }`}
                onClick={() => handleComponentChange("about-you")}
              >
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className={`transition-all ${
                    expandedSideBar ? "h-6 w-6 mr-2" : "w-6 h-6 mx-auto"
                  }`}
                />
                <span
                  className={`transition-all ${
                    expandedSideBar ? "inline-block text-[18px]" : "hidden"
                  }`}
                >
                  {"About You"}
                </span>
              </li>

              <li
                onClick={() => handleComponentChange("income")}
                title="Income"
                className={`py-2 pl-4 pr-4 hover:bg-white ease-in-out hover:text-teal-500 cursor-pointer transition-all ${
                  expandedSideBar ? "text-left pl-8" : "text-center"
                } ${
                  activeComponent === "income" ? "bg-white text-teal-500" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faMoneyCheckDollar}
                  className={`transition-all ${
                    expandedSideBar ? "h-6 w-6 mr-2" : "w-6 h-6 mx-auto"
                  }`}
                />
                <span
                  className={`transition-all ${
                    expandedSideBar ? "inline-block text-[19px]" : "hidden"
                  }`}
                >
                  {"Income"}
                </span>
              </li>

              <li
                onClick={() => handleComponentChange("identity")}
                title="Identity"
                className={`py-2 pl-4 pr-4 hover:bg-white ease-in-out hover:text-teal-500 cursor-pointer transition-all ${
                  expandedSideBar ? "text-left pl-8" : "text-center"
                } ${
                  activeComponent === "identity" ? "bg-white text-teal-500" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faIdCard}
                  className={`transition-all ${
                    expandedSideBar ? "h-6 w-6 mr-2" : "w-6 h-6 mx-auto"
                  }`}
                />
                <span
                  className={`transition-all ${
                    expandedSideBar ? "inline-block text-[19px]" : "hidden"
                  }`}
                >
                  Identity
                </span>
              </li>

              <li
                onClick={() => handleComponentChange("survey")}
                title="Survey"
                className={`py-2 pl-4 pr-4 hover:bg-white ease-in-out hover:text-teal-500 cursor-pointer transition-all ${
                  expandedSideBar ? "text-left pl-8" : "text-center"
                } ${
                  activeComponent === "survey" ? "bg-white text-teal-500" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faClipboard}
                  className={`transition-all ${
                    expandedSideBar ? "h-6 w-6 mr-2" : "w-6 h-6 mx-auto"
                  }`}
                />
                <span
                  className={`transition-all ${
                    expandedSideBar ? "inline-block text-[19px]" : "hidden"
                  }`}
                >
                  Survey
                </span>
              </li>
            </ul>
          )}
        </div>

        <div
          onClick={() => handleComponentChange("groups")}
          title="Groups"
          className={`mb-2 flex items-center px-4 py-2 ease-in-out rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${
            expandedSideBar ? "justify-start" : "justify-center"
          } ${activeComponent === "groups" ? "bg-white text-teal-500" : ""}`}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className={`transition-all ${
              expandedSideBar ? "h-8 w-8" : "w-6 h-6"
            }`}
          />
          <span
            className={`ml-3 overflow-hidden transition-all ${
              expandedSideBar ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            Groups
          </span>
        </div>

        <div
          onClick={() => handleComponentChange("transactions")}
          title="Transactions"
          className={`mb-2 flex items-center px-4 py-2 ease-in-out rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${
            expandedSideBar ? "justify-start" : "justify-center"
          } ${
            activeComponent === "transactions" ? "bg-white text-teal-500" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faMoneyBill}
            className={`transition-all ${
              expandedSideBar ? "h-7 w-7" : "w-6 h-6"
            }`}
          />
          <span
            className={`ml-3 overflow-hidden transition-all ${
              expandedSideBar ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            Transactions
          </span>
        </div>

        <div
          onClick={() => handleComponentChange("logout")}
          title="Logout"
          className={`mb-2 mt-[0px] flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${
            expandedSideBar ? "justify-start" : "justify-center"
          } ${activeComponent === "logout" ? "bg-white text-teal-500" : ""}`}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className={`transition-all ${
              expandedSideBar ? "h-6 w-6" : "w-6 h-6"
            }`}
          />
          <span
            className={`ml-3 overflow-hidden transition-all ${
              expandedSideBar ? "w-auto " : "w-0"
            }`}
          >
            Logout
          </span>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is expanded */}
      {isMobile && expandedSideBar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setExpandedSideBar(false)}
        ></div>
      )}

      {/* Dashboard Right Section - Display Each SideBar Header content dynamically */}
      <div
        className={`transition-all duration-500 min-h-screen ${
          isMobile ? "ml-[60px]" : expandedSideBar ? "ml-[16.67%]" : "ml-[5%]"
        }`}
        style={{
          width: isMobile
            ? "calc(100% - 60px)"
            : expandedSideBar
            ? "calc(100% - 16.67%)"
            : "calc(100% - 5%)",
        }}
      >
        {renderContent()}
      </div>
    </section>
  );
};

export default DashBoardContent;
