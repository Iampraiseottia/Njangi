
"use client";

import React, { useState } from 'react';

import globalStyle from '../globals.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { faHome, faChevronDown, faTasks, faPeopleGroup, faMoneyBill, faUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
        <div className='flex items-center justify-center align-middle'>
          <img src="/logo2.png" className='w-48 lg:w-48 h-44 mb-6 mr-2' alt="NJANGI Logo" /> 
        </div>

        <div 
          onClick={() => setActiveComponent('dashboardMain')} 
          className={`mb-4 flex align-middle justify-center hover:bg-white hover:text-[lightseagreen] hover:py-1 hover:cursor-pointer ease-in-out duration-300 ${activeComponent === 'dashboardMain' ? 'text-gold' : ''}`}
        >
          <FontAwesomeIcon icon={faHome} className='h-8 w-8' />   
          <h1 className='tracking-wider ml-2 mt-[3px]'>Dashboard</h1>
        </div>

        <div className='relative mb-4'>
          <div 
            className='flex items-center justify-center hover:bg-white hover:text-[lightseagreen] hover:py-1 hover:cursor-pointer ease-in-out duration-300 p-2 rounded' 
            onClick={toggleDropdown}
          >
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faTasks} className='h-8 w-8' />  
              <h1 className='tracking-wider ml-2'>Complete</h1>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className={`h-5 w-5 ml-2 ease-in-out duration-[250ms] transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Complete Dropdown List */}
          {isOpen && (
            <ul className='mt-2 w-full rounded ease-in-out duration-300'>
              <li className={`p-2 hover:bg-slate-200 hover:text-[lightseagreen] hover:cursor-pointer hover:py-1 ease-in-out duration-300 ${activeComponent === 'about-you' ? 'text-gold' : ''}`} onClick={() => setActiveComponent('about-you')}>About You</li>
              <li className={`p-2 hover:bg-slate-200 hover:text-[lightseagreen] hover:cursor-pointer hover:py-1 ease-in-out duration-300 ${activeComponent === 'income' ? 'text-gold' : ''}`} onClick={() => setActiveComponent('income')}>Income</li>
              <li className={`p-2 hover:bg-slate-200 hover:text-[lightseagreen] hover:cursor-pointer hover:py-1 ease-in-out duration-300 ${activeComponent === 'identity' ? 'text-gold' : ''}`} onClick={() => setActiveComponent('identity')}>Identity</li>
              <li className={`p-2 hover:bg-slate-200 hover:text-[lightseagreen] hover:cursor-pointer hover:py-1 ease-in-out duration-300 ${activeComponent === 'survey' ? 'text-gold' : ''}`} onClick={() => setActiveComponent('survey')}>Survey</li>
            </ul>
          )}
        </div>

        <div 
          onClick={() => setActiveComponent('groups')}  
          className={`mt-4 flex items-center justify-center hover:bg-white hover:text-[lightseagreen] hover:py-1 hover:cursor-pointer ease-in-out duration-300 ${activeComponent === 'groups' ? 'text-gold' : ''}`}
        >
          <FontAwesomeIcon icon={faPeopleGroup} className='h-10 w-10' />
          <h1 className='tracking-wider ml-2 mt-[6px]'>Groups</h1> 
        </div>

        <div 
          onClick={() => setActiveComponent('transactions')}  
          className={`mt-5 flex items-center hover:bg-white hover:text-[lightseagreen] hover:py-1 justify-center hover:cursor-pointer ease-in-out duration-300 ${activeComponent === 'transactions' ? 'text-gold' : ''}`}
        >
          <FontAwesomeIcon icon={faMoneyBill} className='h-10 w-10' />
          <h1 className='tracking-wider ml-2 mt-[6px]'>Transactions</h1> 
        </div>

        <div 
          onClick={() => setActiveComponent('profile')} 
          className={`mt-5 mb-4 flex align-middle justify-center hover:bg-white hover:text-[lightseagreen] hover:py-1 hover:cursor-pointer ease-in-out duration-300 ${activeComponent === 'profile' ? 'text-gold' : ''}`}
        >
          <FontAwesomeIcon icon={faUser} className='h-8 w-8' />  
          <h1 className='tracking-wider ml-2 mt-[3px]'>Profile</h1>
        </div>

        <div 
          onClick={() => setActiveComponent('settings')} 
          className={`mt-5 mb-4 flex align-middle justify-center hover:bg-white hover:text-[lightseagreen] hover:py-1 hover:cursor-pointer ease-in-out duration-300 ${activeComponent === 'settings' ? 'text-gold' : ''}`}
        >
          <FontAwesomeIcon icon={faGear} className='h-8 w-8' />  
          <h1 className='tracking-wider ml-2 mt-[3px]'>Settings</h1>
        </div>

        <div 
          onClick={() => setActiveComponent('logout')} 
          className={`mt-5 mb-4 flex align-middle justify-center hover:bg-white hover:text-[lightseagreen] hover:py-1 hover:cursor-pointer ease-in-out duration-300 ${activeComponent === 'logout' ? 'text-gold' : ''}`}
        >
          <h1 className='tracking-wider mr-3 mt-[3px]'>Logout</h1>
          <FontAwesomeIcon icon={faRightFromBracket} className='h-8 w-8 pt-[2px]' />  
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