"use client";

import React, { useState } from 'react';

import globalStyle from '../globals.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { faHome, 
  faPeopleGroup,
  faMoneyBill,
  faUser,
  faGear,
  faRightFromBracket,
  faAddressCard,
  faMoneyCheckDollar,
  faIdCard,
  faClipboard
} from '@fortawesome/free-solid-svg-icons';

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
  FileText, 
  ChevronDown,
  ChevronFirst,
  ChevronLast
} from 'lucide-react'; 

const DashBoard = () => {
  // Set 'dashboardMain' as the default active component
  const [activeComponent, setActiveComponent] = useState('dashboardMain');
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const renderContent = () => {
    switch (activeComponent) {
      case 'dashboardMain':
        return <DashboardMain setActiveComponent={setActiveComponent} />;
      case 'groups':
        return <Groups setActiveComponent={setActiveComponent} />;
      case 'about-you':
        return <About_You setActiveComponent={setActiveComponent} />;
      case 'income':
        return <Income setActiveComponent={setActiveComponent} />;
      case 'identity':
        return <Identity setActiveComponent={setActiveComponent} />;  
      case 'survey':
        return <Survey setActiveComponent={setActiveComponent} />;
      case 'transactions':
        return <Transactions setActiveComponent={setActiveComponent} />;
      case 'profile':
        return <Profile setActiveComponent={setActiveComponent} />;
      case 'settings':
        return <Settings setActiveComponent={setActiveComponent} />;
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

  const [expandedSideBar, setExpandedSideBar] = useState(true);

  return (
    <section className='w-full flex'>
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Dashboard Left Section (Side Bar) */}
      <div 
        className={`bg-[lightseagreen] duration-500 relative dashboard-sidebar-border h-[100vh] sticky top-0 left-0 bottom-0 border-2 border-[lightseagreen] border-solid text-center text-white text-2xl font-semibold transition-all ease-in-out ${expandedSideBar ? 'w-1/6 pt-16' : 'w-[5%] pt-28'}`}
        style={{ 
          overflowX: 'hidden',
          transform: expandedSideBar ? 'translateX(0)' : 'translateX(-5px)',
        }}
      >
        <div className='flex items-start justify-evenly flex-row'>
          <div className={`flex items-center justify-center mb-4 ${expandedSideBar ? "mt-[-15px] w-[4/5]" : "mt-[-10px] w-full"}`}>
            <div className='rounded-full p-2 flex flex-col items-center justify-center'> 
              <img 
                src="/logo3.png" 
                className={`overflow-hidden transition-all ${expandedSideBar ? "w-32 lg:w-32 h-32" : "w-14 h-14 mx-auto"}`} 
                alt="NJANGI Logo" 
              /> 
              <h1 className={`tracking-wider text-4xl font-extrabold overflow-hidden transition-all ${expandedSideBar ? "w-auto" : "w-0 opacity-0"}`}>NJANGIFY</h1> 
            </div>
          </div>
          <button
            onClick={() => setExpandedSideBar(current => !current)}
            className='absolute p-1.5 rounded-lg text-[lightseagreen] bg-gray-100 top-7 right-5 hover:cursor-pointer ease-in-out z-10'
          > 
            {expandedSideBar ? <ChevronFirst size={30} /> : <ChevronLast size={30} />} 
          </button>
        </div>

        <div 
          onClick={() => setActiveComponent('dashboardMain')} 
          title='Dashboard'
          className={`mb-2 flex items-center px-4 py-2 rounded-lg ease-in-out hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "mt-[-5px] justify-start" : "mt-[-30px] justify-center"} ${activeComponent === 'dashboardMain' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faHome} className={`transition-all ${expandedSideBar ? "h-6 w-6" : "w-6 h-6"}`} /> 
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto opacity-100" : "w-0 opacity-0"}`}>Dashboard</span>
        </div>

        <div className='relative mb-4'>
          <div 
            title='Complete'
            className={`flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 ease-in-out cursor-pointer transition-all ${expandedSideBar ? "justify-between" : "justify-center"} ${isOpen ? 'mb-1' : ''} ${['about-you', 'income', 'identity', 'survey'].includes(activeComponent) ? 'bg-white text-teal-500' : ''}`} 
            onClick={toggleDropdown}
          >
            <div className={`flex items-center ${expandedSideBar ? "" : "justify-center"}`}>
              <FileText size={expandedSideBar ? 20 : 25} className="transition-all " />
              <span className={`ml-3 transition-all ${expandedSideBar ? "opacity-100" : "opacity-0 w-0"}`}>Complete</span>
            </div>
            <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''} ${expandedSideBar ? "ml-2" : "ml-0"}`} />
          </div> 

          {isOpen && (
            <ul className='mt-1 w-full rounded-lg overflow-hidden ease-in-out transition-all bg-teal-600'>
              <li 
                title='About You'
                className={`py-2 pl-4 pr-4 hover:bg-white ease-in-out hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "text-left pl-8" : "text-center"} ${activeComponent === 'about-you' ? 'bg-white text-teal-500' : ''}`} 
                onClick={() => setActiveComponent('about-you')}
              >
                <FontAwesomeIcon icon={faAddressCard} className={`transition-all ${expandedSideBar ? "h-6 w-6 mr-2" : "w-6 h-6 mx-auto"}`} />
                <span className={`transition-all ${expandedSideBar ? "inline-block text-[18px]" : "hidden"}`}>{'About You'}</span>
              </li> 

              <li 
                onClick={() => setActiveComponent('income')} 
                title='Income' 
                className={`py-2 pl-4 pr-4 hover:bg-white ease-in-out hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "text-left pl-8" : "text-center"} ${activeComponent === 'income' ? 'bg-white text-teal-500' : ''}`}
              >
                <FontAwesomeIcon icon={faMoneyCheckDollar} className={`transition-all ${expandedSideBar ? "h-6 w-6 mr-2" : "w-6 h-6 mx-auto"}`} />
                <span className={`transition-all ${expandedSideBar ? "inline-block text-[19px]" : "hidden"}`}>{'Income'}</span>
              </li>

              <li 
                onClick={() => setActiveComponent('identity')}
                title='Identity'
                className={`py-2 pl-4 pr-4 hover:bg-white ease-in-out hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "text-left pl-8" : "text-center"} ${activeComponent === 'identity' ? 'bg-white text-teal-500' : ''}`}
              >
                <FontAwesomeIcon icon={faIdCard} className={`transition-all ${expandedSideBar ? "h-6 w-6 mr-2" : "w-6 h-6 mx-auto"}`} />
                <span className={`transition-all ${expandedSideBar ? "inline-block text-[19px]" : "hidden"}`}>Identity</span>
              </li>

              <li 
                onClick={() => setActiveComponent('survey')}
                title='Survey' 
                className={`py-2 pl-4 pr-4 hover:bg-white ease-in-out hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "text-left pl-8" : "text-center"} ${activeComponent === 'survey' ? 'bg-white text-teal-500' : ''}`}
              >
                <FontAwesomeIcon icon={faClipboard} className={`transition-all ${expandedSideBar ? "h-6 w-6 mr-2" : "w-6 h-6 mx-auto"}`} />
                <span className={`transition-all ${expandedSideBar ? "inline-block text-[19px]" : "hidden"}`}>Survey</span>
              </li>
            </ul>
          )}
        </div>

        <div 
          onClick={() => setActiveComponent('groups')}  
          title='Groups'
          className={`mb-2 flex items-center px-4 py-2 ease-in-out rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "justify-start" : "justify-center"} ${activeComponent === 'groups' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faPeopleGroup} className={`transition-all ${expandedSideBar ? "h-8 w-8" : "w-6 h-6"}`} /> 
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto opacity-100" : "w-0 opacity-0"}`}>Groups</span>
        </div> 

        <div 
          onClick={() => setActiveComponent('transactions')}  
          title='Transactions'
          className={`mb-2 flex items-center px-4 py-2 ease-in-out rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "justify-start" : "justify-center"} ${activeComponent === 'transactions' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faMoneyBill} className={`transition-all ${expandedSideBar ? "h-7 w-7" : "w-6 h-6"}`} />
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto opacity-100" : "w-0 opacity-0"}`}>Transactions</span>
        </div>

        <div 
          onClick={() => setActiveComponent('profile')} 
          title='Profile'
          className={`mb-2 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "justify-start" : "justify-center"} ${activeComponent === 'profile' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faUser} className={`transition-all ${expandedSideBar ? "h-6 w-6" : "w-6 h-6"}`} /> 
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto opacity-100" : "w-0 opacity-0"}`}>Profile</span>
        </div>

        <div 
          onClick={() => setActiveComponent('settings')} 
          title='Settings'
          className={`mb-5 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "justify-start" : "justify-center"} ${activeComponent === 'settings' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faGear} className={`transition-all ${expandedSideBar ? "h-6 w-6" : "w-6 h-6"}`} />  
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto opacity-100" : "w-0 opacity-0"}`}>Settings</span>
        </div>

        <div 
          onClick={() => setActiveComponent('logout')} 
          title='Logout'
          className={`mb-2 mt-[-20px] flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${expandedSideBar ? "justify-start" : "justify-center"} ${activeComponent === 'logout' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className={`transition-all ${expandedSideBar ? "h-6 w-6" : "w-6 h-6"}`} />
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto " : "w-0"}`}>Logout</span>
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

