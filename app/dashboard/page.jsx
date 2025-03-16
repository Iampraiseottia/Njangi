
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
      <div className='w-1/6 bg-[lightseagreen] relative dashboard-sidebar-border h-[100vh] sticky top-0 left-0 bottom-0 border-2 border-[lightseagreen] border-solid text-center align-middle py-6 text-white text-2xl font-semibold'>
        
        <div className='flex items-start justify-evenly flex-row'>
          <div className='flex items-center justify-center mb-4 mt-[-15px] w-[4/5]'>
            <div className=' rounded-full p-2 w-64 h-60 flex flex-col items-center justify-center'>
              <img src="/logo3.png" className={` mr-2 overflow-hidden transition-all ${expandedSideBar ? "w-32 lg:w-32 h-32" : "w-16 h-16"}`} alt="NJANGI Logo" /> 
              <h1 className={`tracking-wider text-4xl font-extrabold overflow-hidden transition-all ${expandedSideBar ? "w-auto " : "w-0"}`}>NJANGIFY</h1> 
            </div>
          </div>
          <button
            onClick={() => setExpandedSideBar(current => !current)}
           className='absolute  p-1.5 rounded-lg text-[lightseagreen] bg-gray-100 w-[1/5] top-7 right-5 duration-200 hover:cursor-pointer ease-in-out '> 
            {expandedSideBar ? <ChevronFirst  size={30} /> : <ChevronLast  size={30} /> } 
          </button>
        </div>

       
        <div 
          onClick={() => setActiveComponent('dashboardMain')} 
          title='Dashboard'
          className={`mb-2 mt-[-20px] flex items-center overflow-hidden px-4 py-2 rounded-lg duration-300 ease-in-out hover:bg-white hover:text-teal-500 cursor-pointer transition-all  ${activeComponent === 'dashboardMain' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faHome} className={`transition-all overflow-hidden ${expandedSideBar ? "h-6 w-6 " : "w-8 h-8"}`} /> 
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto " : "w-0"}`}>Dashboard</span>
        </div>


        <div className='relative mb-4'>
        <div 
        title='Complete'
        className={`flex items-center justify-between px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 duration-300 ease-in-out cursor-pointer transition-all ${isOpen ? 'mb-1' : ''} ${['about-you', 'income', 'identity', 'survey'].includes(activeComponent) ? 'bg-white text-teal-500' : ''}`} 
        onClick={toggleDropdown}>
        <div className='flex items-center'>
        <FileText size={expandedSideBar ? 20 : 25} className={`transition-all duration-300 ${expandedSideBar ? "h-6 w-6" : "h-7 w-7"}`} />
          <span className={`ml-3 transition-all duration-300 ${expandedSideBar ? "opacity-100" : "opacity-0 w-0"}`}>Complete</span>
        </div>
        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div> 

      {isOpen && (
        <ul className='mt-1 w-full rounded-lg overflow-hidden duration-300 ease-in-out transition-all bg-teal-600'>
           <li 
           title='About You'
            className={`py-2 pl-12 pr-4 hover:bg-white duration-300 ease-in-out hover:text-teal-500 text-list-complete cursor-pointer transition-all text-left ${activeComponent === 'about-you' ? 'bg-white text-teal-500' : ''}`} 
           onClick={() => setActiveComponent('about-you')}>
            <FontAwesomeIcon icon={faAddressCard} className={`mr-2 transition-all ${expandedSideBar ? "h-6 w-6" : "w-7 h-7"}`} />
            {expandedSideBar && <span className="transition-all duration-300">{'About You'}</span>} 
          </li> 

          <li 
          onClick={() => setActiveComponent('income')} 
          title='Income' 
          className={`py-2 pl-12 pr-4 hover:bg-white duration-300 ease-in-out hover:text-teal-500 text-list-complete cursor-pointer transition-all text-left ${activeComponent === 'income' ? 'bg-white text-teal-500' : ''}`}>
            <FontAwesomeIcon icon={faMoneyCheckDollar} className={`mr-2 transition-all ${expandedSideBar ? "h-6 w-6" : "w-7 h-7"}`} />
            {expandedSideBar && <span className="ml-3">{'Income'}</span>} {/* Render only when expanded */}
          </li>

          <li 
          onClick={() => setActiveComponent('identity')}
           title='Identity'
           className={`py-2 pl-12 pr-4 hover:bg-white duration-300 ease-in-out hover:text-teal-500 text-list-complete cursor-pointer transition-all text-left ${activeComponent === 'identity' ? 'bg-white text-teal-500' : ''}`}>
            <FontAwesomeIcon icon={faIdCard} className={`mr-2 transition-all ${expandedSideBar ? "h-6 w-6" : "w-7 h-7"}`} />
            {expandedSideBar && <span className="ml-3">Identity</span>}
          </li>

          <li 
          onClick={() => setActiveComponent('survey')}
           title='Survey' 
           className={`py-2 pl-12 pr-4 hover:bg-white duration-300 ease-in-out hover:text-teal-500 text-list-complete cursor-pointer transition-all text-left ${activeComponent === 'survey' ? 'bg-white text-teal-500' : ''}`}>
            <FontAwesomeIcon icon={faClipboard} className={`mr-2 transition-all ${expandedSideBar ? "h-6 w-6" : "w-7 h-7"}`} />
            {expandedSideBar && <span className="ml-3">Survey</span>}
          </li>

        </ul>
      )}
    </div> 


        <div 
          onClick={() => setActiveComponent('groups')}  
          title='Groups'
          className={`mb-2 flex items-center px-4 py-2 duration-300 ease-in-out rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'groups' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faPeopleGroup} className={`transition-all overflow-hidden ${expandedSideBar ? "h-8 w-8 " : "w-10 h-10"}`} /> 
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto " : "w-0"}`}>Groups</span>
        </div> 

        <div 
          onClick={() => setActiveComponent('transactions')}  
          title='Transactions'
          className={`mb-2 flex items-center px-4 py-2 duration-300 ease-in-out rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'transactions' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faMoneyBill} className={`transition-all overflow-hidden ${expandedSideBar ? "h-7 w-7 " : "w-9 h-9"}`} />
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto " : "w-0"}`}>Transactions</span>
        </div>


        <div 
          onClick={() => setActiveComponent('profile')} 
          title='Profile'
          className={`mb-2 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'profile' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faUser} className={`transition-all overflow-hidden ${expandedSideBar ? "h-6 w-6 " : "w-8 h-8"}`} /> 
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto " : "w-0"}`}>Profile</span>
        </div>

       <div 
          onClick={() => setActiveComponent('settings')} 
          title='Settings'
          className={`mb-5 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'settings' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faGear} className={`transition-all overflow-hidden ${expandedSideBar ? "h-6 w-6 " : "w-8 h-8"}`} />  
          <span className={`ml-3 overflow-hidden transition-all ${expandedSideBar ? "w-auto " : "w-0"}`}>Settings</span>
        </div>

        <div 
          onClick={() => setActiveComponent('logout')} 
          title='Logout'
          className={`mb-2 mt-[-20px] flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'logout' ? 'bg-white text-teal-500' : ''}`}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className={`transition-all overflow-hidden ${expandedSideBar ? "h-6 w-6 " : "w-8 h-8"}`} />  
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

