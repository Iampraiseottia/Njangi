
'use client';

import React, { useState, useEffect, useRef } from 'react';

import globalStyle from '../globals.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { faGear,
  faSun,
  faMoon } from '@fortawesome/free-solid-svg-icons';


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
  Menu 
} from 'lucide-react';  

 

const DashboardMain = ({ setActiveComponent }) => {


  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode === 'true'; 
    }
    return false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);

    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);


  const searchReg = useRef();

  const onMouseEnterSearch = () => {
    searchReg.current.focus();
  }



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (

    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
    
        <div className="pt-2 md:pt-4 w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 break-words flex flex-col md:flex-row">
            <span>Welcome Back!!!,</span>
            <span className='text-[lightseagreen] text-[28px] md:text-[36px] lg:text-[42px] pl-1'>Ottia Praise</span>
          </h1>
        </div>


        {/* Mobile menu button */}
        <div className="md:hidden w-full flex justify-end">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>


        {/* Desktop header items / Mobile menu */}
        <div className={`${isMenuOpen ? 'flex ' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:space-x-5`}> 
          <div className="relative w-full md:w-auto">
            <input 
              type="text" 
              ref={searchReg}
              onMouseEnter={onMouseEnterSearch}
              placeholder="Search..." 
              className={`px-4 py-2 pl-10 w-full md:w-64 lg:w-96 rounded-lg border border-gray-300 duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 ${isDarkMode ? 'bg-gray-800 text-black' : 'bg-white text-gray-800'}`}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div> 


          {/* Notification  */}
          <div className="relative cursor-pointer ease-in-out duration-100" title='Notifications'
          // onClick={() => setActiveComponent('notifications')} 
          >
            <Bell className="text-gray-600 cursor-pointer" size={28} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-extrabold">3</span>
          </div>


          {/* User Settings  */}
          <div onClick={() => setActiveComponent('settings')} className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold cursor-pointer ease-in-out duration-100" title='Settings'> 
            <FontAwesomeIcon icon={faGear} className='h-6 w-6' /> 
          </div>


          {/* User Avatar  */}
          <div onClick={() => setActiveComponent('profile')} className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold cursor-pointer ease-in-out duration-100" title='Profile'>
            OP
          </div>


          {/* Light and Dark Mode  */} 
          <div
            onClick={() => setIsDarkMode(prevMode => !prevMode)} title='Modes'
            className={`w-24 h-10 rounded-full bg-teal-500 justify-between flex items-center ${isDarkMode ? 'bg-white' : 'bg-lightseagreen'} transition-colors duration-300 cursor-pointer`}
          >
            <div
              className={`w-[49%] h-full flex items-center justify-center rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-full bg-white' : 'bg-teal-500'}`}
            >
              <FontAwesomeIcon icon={faMoon} className={`w-7 h-7 ${isDarkMode ? 'text-lightseagreen' : 'text-white'}`} />
            </div>
            <div
              className={`w-[49%] mr-1 h-full flex items-center justify-center rounded-full transition-transform duration-300 ${isDarkMode ? 'bg-teal-500' : 'bg-white'}`}
            >
              <FontAwesomeIcon icon={faSun} className={`w-7 h-7 ${isDarkMode ? 'text-white' : 'text-teal-500'}`} />
            </div>
          </div>

        </div>
      </div>
  

      {/* User Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-2 border-gray-100 duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={() => setActiveComponent('transactions')} >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-xs sm:text-sm font-medium">Total Njangi Contributions</h2>
            <div className="bg-teal-100 p-1.5 md:p-2 rounded-lg">
              <DollarSign className="text-teal-500" size={18} /> 
            </div>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">23,750 <span className='text-sm md:text-lg lg:text-xl'>Francs</span></p>
          <div className="flex items-center text-xs md:text-sm mt-2 text-green-500">
            <span>+12% from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-2 border-gray-100 duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={() => {setActiveComponent('groups')}} > 
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-xs sm:text-sm font-medium">Active Groups</h2>
            <div className="bg-purple-100 p-1.5 md:p-2 rounded-lg">
              <Users className="text-purple-500" size={18} />
            </div>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">9</p>
          <div className="flex items-center text-xs md:text-sm mt-2 text-green-500">
            <span>+3 new this month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-2 border-gray-100 duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={() => {setActiveComponent('transactions')}}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-xs sm:text-sm font-medium">Total Chopped</h2>
            <div className="bg-blue-100 p-1.5 md:p-2 rounded-lg">
              <CreditCard className="text-blue-500" size={18} />
            </div>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">38,900 <span className='text-sm md:text-lg lg:text-xl'>Francs</span></p>
          <div className="flex items-center text-xs md:text-sm mt-2 text-green-500">
            <span>+24% from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-2 border-gray-100 duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={() => {setActiveComponent('profile')}}>
          <div className="flex justify-between items-center mb-4"> 
            <h2 className="text-gray-500 text-xs sm:text-sm font-medium">Profile Completion</h2>
            <div className="bg-orange-100 p-1.5 md:p-2 rounded-lg">
              <Clipboard className="text-orange-500" size={18} /> 
            </div>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">75%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
  


      {/* Recent Activity and Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-2 border-gray-100 duration-300 ease-in-out hover:shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base md:text-lg font-semibold text-gray-800">Your Recent Njangi Activity</h2>
            <span className="text-teal-500 text-xs md:text-sm cursor-pointer" onClick={() => setActiveComponent('transactions')} >View All</span>
          </div>
          <div className="space-y-3 md:space-y-4">
            {[
              { type: 'Contribution', group: 'Family Support', amount: '+5000 francs', date: 'Today, 2:30 PM', status: 'completed' },
              { type: 'Received', group: 'Business Investment', amount: '+30,000 francs', date: 'Mar 07, 2025 | 11:15 AM', status: 'completed' },
              { type: 'Contribution', group: 'Education Fund', amount: '+25,000 francs', date: 'Mar 07, 2025 | 04:53 pM', status: 'pending' },
              { type: 'Received', group: 'Business Investment', amount: '+200, 000 francs', date: 'Mar 08, 2025 | 9:39 AM', status: 'completed' },
              { type: 'Contribution', group: 'Education Fund', amount: '+50, 000 francs', date: 'Mar 08, 2025 | 01:29 PM', status: 'pending' }

            ].map((activity, index) => (
              <div key={index} className="recent-activity-item flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 md:p-3 hover:bg-gray-50 rounded-lg transition-all">
                <div className="flex items-center">
                  <div className={`p-1.5 md:p-2 rounded-lg ${
                    activity.type === 'Contribution' ? 'bg-green-100 text-green-500' :
                    activity.type === 'received' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'
                  }`}>
                    {activity.type === 'Contribution' ? <PlusCircle size={16} /> : 
                    <ArrowRight size={16} />}
                  </div>
                  <div className="ml-2 md:ml-3">
                    <p className="text-xs md:text-sm font-medium text-gray-800">{activity.type}</p>
                    <p className="text-xs text-gray-500">{activity.group}</p> 
                  </div>
                </div>
                <div className="text-right mt-2 sm:mt-0 ml-8 sm:ml-0">
                  <p className={`bg-purple-200 text-teal-600 px-2 md:px-4 py-1 border rounded-xl text-xs md:text-sm font-medium ${
                    activity.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>{activity.amount}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-2 border-gray-100 duration-300 ease-in-out hover:shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base md:text-lg font-semibold text-gray-800">Your Groups</h2>
            <div className="flex space-x-2 items-center">
              <button onClick={() => setActiveComponent('groups')} className="bg-teal-500 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm flex items-center cursor-pointer">
                View All Groups
              </button>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            {[
              { name: 'Family Support', members: 15, nextCollection: 'Mar 07, 2025', amount: '5000 francs per week' },
              { name: 'Business Investment', members: 8, nextCollection: 'Mar 07, 2025', amount: '25, 000 francs per month' },
              { name: 'Emergency Fund', members: 12, nextCollection: 'Mar 08, 2025', amount: '10, 000 francs after every 3 days' },
              { name: 'Education Fund', members: 6, nextCollection: 'Mar 08, 2025', amount: '2. 000 francs per day' }
            ].map((group, index) => (
              <div key={index} className="recent-activity-item p-2 md:p-3 hover:bg-gray-50 rounded-lg transition-all border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="font-medium text-sm md:text-base text-gray-800">{group.name}</h3>
                  <span className="text-xs md:text-sm bg-orange-200 text-teal-600 px-2 md:px-4 py-1 rounded-full mt-1 sm:mt-0">{group.amount}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-xs md:text-sm text-gray-500">
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
      </div>
  
      {/* Upcoming Payments */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-2 border-gray-100 duration-300 ease-in-out hover:shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base md:text-lg font-semibold text-gray-800">Upcoming Payments</h2>
          <span className="text-teal-500 text-xs md:text-sm cursor-pointer" onClick={() => setActiveComponent('transactions')} >View All</span>
        </div>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { group: 'Family Support', amount: '5000 francs', dueDate: 'Mar 07, 2025', status: 'upcoming' },
                { group: 'Business Investment', amount: '25, 000 francs', dueDate: 'Mar 07, 2025', status: 'upcoming' },
                { group: 'Emergency Fund', amount: '2, 000 francs', dueDate: 'Mar 08, 2025', status: 'overdue' }
              ].map((payment, index) => (
                <tr key={index}>
                  <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                    <div className="text-xs md:text-sm font-medium text-gray-900">{payment.group}</div>
                  </td>
                  <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                    <div className="text-xs md:text-sm text-gray-900">{payment.amount}</div>
                  </td>
                  <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                    <div className="text-xs md:text-sm text-gray-500">{payment.dueDate}</div>
                  </td>
                  <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      payment.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' : 
                      payment.status === 'overdue' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">
                      Pay Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;