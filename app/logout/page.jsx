"use client";

import { motion } from "motion/react";

import React, { useEffect, useState } from "react";

import { LogOut, AlertTriangle, CheckCircle } from "lucide-react";

import { useRouter } from "next/navigation";

const Logout = () => {
  const [status, setStatus] = useState("confirming");
  const router = useRouter();

  const handleLogout = () => {
    setStatus("processing");

    setTimeout(() => {
      try {
        localStorage.removeItem("njangi_auth_token");
        sessionStorage.removeItem("njangi_user_data");

        setStatus("success");

        setTimeout(() => {
          router.push("/");
        }, 2000);
      } catch (error) {
        console.error("Logout failed:", error);
        setStatus("error");
      }
    }, 1500);
  };

  const cancelLogout = () => {
    router.back();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
    >
      <div className="bg-white  rounded-lg shadow-md p-8 max-w-2xl w-full">
        {status === "confirming" && (
          <>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle size={32} className="text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Log Out
              </h2>
              <p className="text-slate-600  text-center">
                Are you sure you want to log out of your NJANGIFY account?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={cancelLogout}
                className="flex-1 py-2 px-4 rounded-lg border border-slate-300 text-slate-700  font-medium hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-2 px-4 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600  transition-colors flex items-center justify-center"
              >
                <LogOut size={18} className="mr-2" />
                Log Out
              </button>
            </div>
          </>
        )}

        {status === "processing" && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mb-4"></div>
            <p className="text-slate-600 ">Logging you out...</p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle
                size={32}
                className="text-green-500 dark:text-green-400"
              />
            </div>
            <h2 className="text-xl font-bold text-slate-800  mb-2">
              Successfully Logged Out
            </h2>
            <p className="text-slate-600  text-center">
              You have been successfully logged out of your account. 
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-sm mt-4">
              Redirecting to home page...
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 bg-red-100  rounded-full flex items-center justify-center mb-4">
              <AlertTriangle size={32} className="text-red-500" />
            </div>
            <h2 className="text-xl font-bold text-slate-800  mb-2">
              Logout Failed
            </h2>
            <p className="text-slate-600  text-center mb-6">
              There was a problem logging you out. Please try again.
            </p>
            <button
              onClick={handleLogout}
              className="py-2 px-6 rounded-lg bg-teal-500  text-white font-medium hover:bg-teal-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Logout;
