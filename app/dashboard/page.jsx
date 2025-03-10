
"use client";

import React, { useState } from 'react';

import globalStyle from '../globals.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { faHome, faPeopleGroup, faMoneyBill, faUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import Metadata from '../components/Metadata';
import Profile from '../profile/page';
import DashboardMain from '../dashboardMain/page';
import Groups from '../groups/page';
import About_You from '../about-you/page';
import Income from '../income/page';
import Identity from '../identity/page';
import Survey from '../survey/page';
import Transactions from '../transactions/page';
import Settings from '../settings/page';
import Logout from '../logout/page';   



import {  
  Users,   
  FileText, 
  BarChart2, 
  User, 
  Settings as SettingsIcon, 
  LogOut, 
  ChevronDown 
} from 'lucide-react'; 

const DashBoard = () => {
  // Set 'dashboardMain' as the default active component
  const [activeComponent, setActiveComponent] = useState('dashboardMain');
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const renderContent = () => {
    switch (activeComponent) {
      case 'dashboardMain':
        return <DashboardMain />;
      case 'groups':
        return <Groups />;
      case 'about-you':
        return <About_You />;
      case 'income':
        return <Income />;
      case 'identity':
        return <Identity />;
      case 'survey':
        return <Survey />;
      case 'transactions':
        return <Transactions />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'logout':
        return <Logout />;
      default:
        return <DashboardMain />;
    }
  };

  const metadata = {
    title: 'Dashboard - Njangi Web Application',
    description: 'Manage your njangi groups and track activities on the dashboard. ',
  };

  return (
    <section className='w-full flex'>
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Dashboard Left Section (Side Bar) */}
      <div className='w-1/6 bg-[lightseagreen] dashboard-sidebar-border h-[100vh] sticky top-0 left-0 bottom-0 border-2 border-[lightseagreen] border-solid text-center align-middle py-6 text-white text-2xl font-semibold'>
        
        <div className='flex items-center justify-center mb-4 mt-[-15px]'>
          <div className=' rounded-full p-2 w-60 h-60 flex flex-col items-center justify-center'>
            <img src="/logo3.png" className='w-32 lg:w-32 h-32 mr-2 ' alt="NJANGI Logo" /> 
            <h1 className=' tracking-wider text-4xl font-extrabold'>NJANGIFY</h1> 
          </div>
        </div> 

       
        <div 
          onClick={() => setActiveComponent('dashboardMain')} 
          className={`mb-2 mt-[-20px] flex items-center px-4 py-2 rounded-lg duration-300 ease-in-out hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'dashboardMain' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faHome} className='h-6 w-6' /> 
          <span className='ml-3'>Dashboard</span>
        </div>


        <div className='relative mb-4'>
          <div 
            className={`flex items-center justify-between px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 duration-300 ease-in-out cursor-pointer transition-all ${isOpen && 'mb-1'} ${['about-you', 'income', 'identity', 'survey'].includes(activeComponent) ? 'bg-white text-teal-500' : ''}`} 
            onClick={toggleDropdown}>
            <div className='flex items-center'>
              <FileText size={20} />
              <span className='ml-3'>Complete</span>
            </div>
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </div>

          {isOpen && (
            <ul className='mt-1 w-full rounded-lg overflow-hidden duration-300 ease-in-out transition-all bg-teal-600'>
              <li 
                className={`py-2 pl-12 pr-4 hover:bg-white duration-300 ease-in-out hover:text-teal-500 text-list-complete cursor-pointer transition-all text-left ${activeComponent === 'about-you' ? 'bg-white text-teal-500' : ''}`} 
                onClick={() => setActiveComponent('about-you')}
              >
                About You
              </li> 
              <li 
                className={`py-2 pl-12 pr-4 hover:bg-white duration-300 ease-in-out hover:text-teal-500 text-list-complete cursor-pointer transition-all text-left ${activeComponent === 'income' ? 'bg-white text-teal-500' : ''}`} 
                onClick={() => setActiveComponent('income')}
              >
                Income
              </li>
              <li 
                className={`py-2 pl-12 pr-4 hover:bg-white duration-300 ease-in-out hover:text-teal-500 cursor-pointer text-list-complete transition-all text-left ${activeComponent === 'identity' ? 'bg-white text-teal-500' : ''}`} 
                onClick={() => setActiveComponent('identity')}
              >
                Identity
              </li>
              <li 
                className={`py-2 pl-12 pr-4 hover:bg-white duration-300 ease-in-out hover:text-teal-500 cursor-pointer text-list-complete transition-all text-left ${activeComponent === 'survey' ? 'bg-white text-teal-500' : ''}`} 
                onClick={() => setActiveComponent('survey')}
              >
                Survey
              </li>
            </ul>
          )}
        </div>

        <div 
          onClick={() => setActiveComponent('groups')}  
          className={`mb-2 flex items-center px-4 py-2 duration-300 ease-in-out rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'groups' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faPeopleGroup} className='h-8 w-8' /> 
          <span className='ml-3'>Groups</span>
        </div> 

        <div 
          onClick={() => setActiveComponent('transactions')}  
          className={`mb-2 flex items-center px-4 py-2 duration-300 ease-in-out rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'transactions' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faMoneyBill} className='h-7 w-7' />
          <span className='ml-3'>Transactions</span>
        </div>


        <div 
          onClick={() => setActiveComponent('profile')} 
          className={`mb-2 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'profile' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faUser} className='h-6 w-6' /> 
          <span className='ml-3'>Profile</span>
        </div>

       <div 
          onClick={() => setActiveComponent('settings')} 
          className={`mb-5 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'settings' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faGear} className='h-6 w-6' />  
          <span className='ml-3'>Settings</span>
        </div>

        <div 
          onClick={() => setActiveComponent('logout')} 
          className={`mb-2 mt-[-20px] flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'logout' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className='h-6 w-6' />  
          <span className='ml-3'>Logout</span>
        </div>


      </div>

      {/* Dashboard Right Section - Display Each SideBar Header content dynamically */}
      <div className='w-10/12'>
        {renderContent()}
      </div>
    </section>
  );
};

export default DashBoard;