
'use client';

import {React, useState, useEffect, useRef} from 'react'

import { ArrowRight, Bell, Calendar, PlusCircle, Search } from 'lucide-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGear,
  faSun,
  faMoon } from '@fortawesome/free-solid-svg-icons';


const Groups = ({ setActiveComponent }) => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
      if (typeof window !== "undefined") {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true'; 
      }
      return false;
    });
  
    useEffect(() => {
      document.body.classList.toggle('dark', isDarkMode);
  
      localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    const searchReg = useRef();
    
      const onMouseEnterSearch = () => {
        searchReg.current.focus();
      }
    
      const onMouseLeaveSearch = () => {
        searchReg.current.blur();
      }

  
  return (
    <div className="p-2 sm:p-4 md:p-6 lg:p-8">

       {/* Header section with better responsiveness */}
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8">
        <div className="pt-2 sm:pt-4 mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Good Day 👋,
            <span className=" sm:inline text-teal-500 text-2xl sm:text-3xl md:text-4xl sm:pl-1">Ottia Praise</span>
          </h1>
        </div>

        <div className="flex items-center flex-wrap gap-2 sm:gap-3 md:gap-5 w-full sm:w-auto justify-end"> 
          {/* Notification */}
          <div className="relative cursor-pointer ease-in-out duration-100" title="Notifications">
            <Bell className="text-gray-600 cursor-pointer" size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-extrabold">3</span>
          </div>

          {/* User Settings */}
          <div onClick={() => setActiveComponent('settings')} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold cursor-pointer ease-in-out duration-100" title="Settings"> 
            <FontAwesomeIcon icon={faGear} className="h-4 w-4 md:h-5 md:w-5" /> 
          </div>

          {/* User Avatar */}
          <div onClick={() => setActiveComponent('profile')} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold cursor-pointer ease-in-out duration-100" title="Profile">
            <span className="text-sm md:text-base">OP</span>
          </div>

          {/* Light and Dark Mode */} 
          <div
            onClick={() => setIsDarkMode(prevMode => !prevMode)} title="Modes"
            className={`w-16 sm:w-20 md:w-24 h-8 md:h-10 rounded-full bg-teal-500 justify-between flex items-center ${isDarkMode ? 'bg-white' : 'bg-lightseagreen'} transition-colors duration-300 cursor-pointer`}
          >
            <div
              className={`w-[49%] h-full flex items-center justify-center rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-full bg-white' : 'bg-teal-500'}`}
            >
              <FontAwesomeIcon icon={faMoon} className={`w-5 h-5 md:w-6 md:h-6 ${isDarkMode ? 'text-lightseagreen' : 'text-white'}`} />
            </div>
            <div
              className={`w-[49%] mr-1 h-full flex items-center justify-center rounded-full transition-transform duration-300 ${isDarkMode ? 'bg-teal-500' : 'bg-white'}`}
            >
              <FontAwesomeIcon icon={faSun} className={`w-5 h-5 md:w-6 md:h-6 ${isDarkMode ? 'text-white' : 'text-teal-500'}`} />
            </div>
          </div>
        </div>
      </div>


      {/* Group Main Content */}
      <div className="p-2 sm:p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Njangi Groups</h1>
        
        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                ref={searchReg}
                onMouseEnter={onMouseEnterSearch}
                onMouseLeave={onMouseLeaveSearch}
                placeholder="Search transactions" 
                className="px-4 py-2 pl-10 rounded-lg duration-300 ease-in-out border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <select className="px-4 py-2 transaction_list transaction_list2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:w-auto">
              <option className="singleCol" value="All Types">All Types</option>
              <option className="singleCol" value="Ascending Order">Ascending Order</option>
              <option className="singleCol" value="Descending Order">Descending Order</option> 
              <option className="singleCol" value="Filter By Date">Filter By Date</option>
              <option className="singleCol" value="Alphabetic Order">Alphabetic Order(A - Z)</option>
            </select>
          </div>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center justify-center w-full sm:w-auto">
            <PlusCircle size={18} className="mr-2" /> Create New Group
          </button>
        </div>
        
        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md ease-in-out duration-300">
          <div className="overflow-x-auto pb-2">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 sm:px-4 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                  <th className="px-2 sm:px-4 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
                  <th className="px-2 sm:px-4 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-2 sm:px-4 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Chopper</th>
                  <th className="px-2 sm:px-4 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-2 sm:px-4 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                  <th className="px-2 sm:px-4 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                  <th className="px-2 sm:px-4 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {id: 1, startDate: 'Mar 09, 2025', group: 'Family Support', amount: '+65, 000 Francs', status: 'Completed', duration: '6 months', endDate: 'Nov 09, 2025', nextChopper: 'Prinzo' },               
                  {id: 2, startDate: 'Mar 07, 2025', group: 'Business Investment', amount: '+338, 000 Francs', status: 'Completed', duration: '6 months', endDate: 'Nov 09, 2025', nextChopper: 'Prinzo2' },
                  {id: 3, startDate: 'Mar 05, 2025', group: 'Education Fund', amount: '+52, 000 Francs', status: 'Completed', duration: '6 months', endDate: 'Nov 09, 2025', nextChopper: 'Prinzo3' },
                  {id: 4, startDate: 'Mar 03, 2025', group: 'Family Support', amount: '+30, 000 Francs', status: 'Completed', duration: '6 months', endDate: 'Nov 09, 2025', nextChopper: 'Prinzo4' },
                  {id: 5, startDate: 'Feb 25, 2025', group: 'Emergency Fund', amount: '+260, 000 Francs', status: 'Completed', duration: '6 months', endDate: 'Nov 09, 2025', nextChopper: 'Prinzo5' }
                ].map((njangiGroups, index) => (
                  <tr key={index} className="hover:bg-gray-50 transaction_list" >
                    <td className="px-2 sm:px-4 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{njangiGroups.id}</td>
                    <td className="px-2 sm:px-4 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{njangiGroups.group}</td>
                    <td className="px-2 sm:px-4 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                      <span className={njangiGroups.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                        {njangiGroups.amount}
                      </span>
                    </td>
                    <td className="px-2 sm:px-4 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{njangiGroups.nextChopper}</td>
                    <td className="px-2 sm:px-4 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{njangiGroups.duration}</td>
                    <td className="px-2 sm:px-4 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{njangiGroups.startDate}</td>
                    <td className="px-2 sm:px-4 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{njangiGroups.endDate}</td>           
                    <td className="px-2 sm:px-4 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                      <button className="text-teal-600 hover:text-teal-800 font-medium text-xs sm:text-sm">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  </div>

    </div>

    
  )
}

export default Groups

