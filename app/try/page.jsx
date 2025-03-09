// src/app/dashboard/page.jsx
"use client";
import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  FileText, 
  BarChart2, 
  User, 
  Settings as SettingsIcon, 
  LogOut, 
  ChevronDown 
} from 'lucide-react';
import Metadata from '../components/Metadata';
import globalStyle from '../globals.css'; 


// Dummy components for rendering
const DashboardMain = () => <div>Main Dashboard Content</div>;
const Groups = () => <div>Groups Content</div>;
const AboutYou = () => <div>About You Content</div>;
const Income = () => <div>Income Content</div>;
const Identity = () => <div>Identity Content</div>;
const Survey = () => <div>Survey Content</div>;
const Transactions = () => <div>Transactions Content</div>;
const Profile = () => <div>Profile Content</div>;
const Settings = () => <div>Settings Content</div>;
const Logout = () => <div>Logout Content</div>;

const DashBoard = () => {
  const [activeComponent, setActiveComponent] = useState('dashboardMain');
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  const renderContent = () => {
    switch (activeComponent) {
      case 'dashboardMain': return <DashboardMain />;
      case 'groups': return <Groups />;
      case 'about-you': return <AboutYou />;
      case 'income': return <Income />;
      case 'identity': return <Identity />;
      case 'survey': return <Survey />;
      case 'transactions': return <Transactions />;
      case 'profile': return <Profile />;
      case 'settings': return <Settings />;
      case 'logout': return <Logout />;
      default: return <DashboardMain />;
    }
  };

  const metadata = {
    title: 'Dashboard - Njangi Web Application',
    description: 'Manage your njangi groups and track activities on the dashboard.',
  };

  return (
    <section className='w-full flex'>
      <Metadata title={metadata.title} description={metadata.description} />
      
      {/* Sidebar */}
      <div className='w-1/6 bg-teal-500 h-screen sticky top-0 left-0 border-r-2 border-teal-600 text-center py-4 text-white text-xl font-semibold overflow-y-auto'>
        <div className='flex items-center justify-center mb-6'>
          <div className='bg-white rounded-full p-2 w-32 h-32 flex items-center justify-center'>
            <h1 className='text-teal-500 text-2xl font-bold'>NJANGI</h1>
          </div>
        </div>
        
        <div 
          onClick={() => setActiveComponent('dashboardMain')} 
          className={`mb-4 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'dashboardMain' ? 'bg-white text-teal-500' : ''}`}
        >
          <Home size={20} />
          <span className='ml-3'>Dashboard</span>
        </div>
        
        <div className='relative mb-4 mx-2'>
          <div 
            className={`flex items-center justify-between px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${isOpen && 'mb-1'} ${['about-you', 'income', 'identity', 'survey'].includes(activeComponent) ? 'bg-white text-teal-500' : ''}`} 
            onClick={toggleDropdown}
          >
            <div className='flex items-center'>
              <FileText size={20} />
              <span className='ml-3'>Complete</span>
            </div>
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          
          {isOpen && (
            <ul className='mt-1 w-full rounded-lg overflow-hidden transition-all bg-teal-600'>
              <li 
                className={`py-2 pl-12 pr-4 hover:bg-white hover:text-teal-500 cursor-pointer transition-all text-left ${activeComponent === 'about-you' ? 'bg-white text-teal-500' : ''}`} 
                onClick={() => setActiveComponent('about-you')}
              >
                About You
              </li>
              <li 
                className={`py-2 pl-12 pr-4 hover:bg-white hover:text-teal-500 cursor-pointer transition-all text-left ${activeComponent === 'income' ? 'bg-white text-teal-500' : ''}`} 
                onClick={() => setActiveComponent('income')}
              >
                Income
              </li>
              <li 
                className={`py-2 pl-12 pr-4 hover:bg-white hover:text-teal-500 cursor-pointer transition-all text-left ${activeComponent === 'identity' ? 'bg-white text-teal-500' : ''}`} 
                onClick={() => setActiveComponent('identity')}
              >
                Identity
              </li>
              <li 
                className={`py-2 pl-12 pr-4 hover:bg-white hover:text-teal-500 cursor-pointer transition-all text-left ${activeComponent === 'survey' ? 'bg-white text-teal-500' : ''}`} 
                onClick={() => setActiveComponent('survey')}
              >
                Survey
              </li>
            </ul>
          )}
        </div>
        
        <div 
          onClick={() => setActiveComponent('groups')}  
          className={`mb-4 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'groups' ? 'bg-white text-teal-500' : ''}`}
        >
          <Users size={20} />
          <span className='ml-3'>Groups</span>
        </div>
        
        <div 
          onClick={() => setActiveComponent('transactions')}  
          className={`mb-4 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'transactions' ? 'bg-white text-teal-500' : ''}`}
        >
          <BarChart2 size={20} />
          <span className='ml-3'>Transactions</span>
        </div>
        
        <div 
          onClick={() => setActiveComponent('profile')} 
          className={`mb-4 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'profile' ? 'bg-white text-teal-500' : ''}`}
        >
          <User size={20} />
          <span className='ml-3'>Profile</span>
        </div>
        
        <div 
          onClick={() => setActiveComponent('settings')} 
          className={`mb-4 flex items-center px-4 py-2 rounded-lg hover:bg-white hover:text-teal-500 cursor-pointer transition-all ${activeComponent === 'settings' ? 'bg-white text-teal-500' : ''}`}
        >
          <SettingsIcon size={20} />
          <span className='ml-3'>Settings</span>
        </div>
        
        <div 
          onClick={() => setActiveComponent('logout')} 
          className={`mt-8 flex items-center px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 cursor-pointer transition-all`}
        >
          <LogOut size={20} />
          <span className='ml-3'>Logout</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className='w-5/6 bg-gray-50'>
        {renderContent()}
      </div>
    </section>
  );
};

export default DashBoard;




// // Dashboard Main Component
// const DashboardMain = () => {
//   return (
//     <div className="p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
//           <p className="text-gray-500">Welcome back, John Doe</p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="Search..." 
//               className="px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//           </div>
//           <div className="relative">
//             <Bell className="text-gray-600 cursor-pointer" />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
//           </div>
//           <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
//             JD
//           </div>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-4 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-gray-500 text-sm font-medium">Total Balance</h2>
//             <div className="bg-teal-100 p-2 rounded-lg">
//               <DollarSign className="text-teal-500" size={20} />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-800">$2,150.00</p>
//           <div className="flex items-center text-sm mt-2 text-green-500">
//             <span>+15% from last month</span>
//           </div>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-gray-500 text-sm font-medium">Active Groups</h2>
//             <div className="bg-purple-100 p-2 rounded-lg">
//               <Users className="text-purple-500" size={20} />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-800">6</p>
//           <div className="flex items-center text-sm mt-2 text-green-500">
//             <span>+2 new this month</span>
//           </div>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-gray-500 text-sm font-medium">Contributions</h2>
//             <div className="bg-blue-100 p-2 rounded-lg">
//               <CreditCard className="text-blue-500" size={20} />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-800">$850.00</p>
//           <div className="flex items-center text-sm mt-2 text-red-500">
//             <span>-5% from last month</span>
//           </div>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-gray-500 text-sm font-medium">Profile Completion</h2>
//             <div className="bg-orange-100 p-2 rounded-lg">
//               <Clipboard className="text-orange-500" size={20} />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-800">75%</p>
//           <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//             <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity and Groups */}
//       <div className="grid grid-cols-2 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
//             <span className="text-teal-500 text-sm cursor-pointer">View All</span>
//           </div>
//           <div className="space-y-4">
//             {[
//               { type: 'Contribution', group: 'Family Support', amount: '+$100.00', date: 'Today, 2:30 PM', status: 'completed' },
//               { type: 'Withdrawal', group: 'Emergency Fund', amount: '-$250.00', date: 'Yesterday', status: 'completed' },
//               { type: 'Received', group: 'Business Investment', amount: '+$520.00', date: 'Mar 07, 2025', status: 'completed' },
//               { type: 'Contribution', group: 'Education Fund', amount: '+$80.00', date: 'Mar 05, 2025', status: 'pending' }
//             ].map((activity, index) => (
//               <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all">
//                 <div className="flex items-center">
//                   <div className={`p-2 rounded-lg ${
//                     activity.type === 'Contribution' ? 'bg-green-100 text-green-500' :
//                     activity.type === 'Withdrawal' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'
//                   }`}>
//                     {activity.type === 'Contribution' ? <PlusCircle size={18} /> : 
//                      activity.type === 'Withdrawal' ? <LogOut size={18} /> : <ArrowRight size={18} />}
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm font-medium text-gray-800">{activity.type}</p>
//                     <p className="text-xs text-gray-500">{activity.group}</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className={`text-sm font-medium ${
//                     activity.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'
//                   }`}>{activity.amount}</p>
//                   <p className="text-xs text-gray-500">{activity.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">Your Groups</h2>
//             <div className="flex space-x-2 items-center">
//               <button className="bg-teal-500 text-white px-3 py-1 rounded-lg text-sm flex items-center">
//                 <PlusCircle size={16} className="mr-1" /> New Group
//               </button>
//             </div>
//           </div>
//           <div className="space-y-4">
//             {[
//               { name: 'Family Support', members: 15, nextCollection: 'Mar 15, 2025', amount: '$100/month' },
//               { name: 'Business Investment', members: 8, nextCollection: 'Mar 20, 2025', amount: '$250/month' },
//               { name: 'Emergency Fund', members: 12, nextCollection: 'Mar 25, 2025', amount: '$150/month' },
//               { name: 'Education Fund', members: 6, nextCollection: 'Mar 30, 2025', amount: '$80/month' }
//             ].map((group, index) => (
//               <div key={index} className="p-3 hover:bg-gray-50 rounded-lg transition-all border border-gray-100">
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-medium text-gray-800">{group.name}</h3>
//                   <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">{group.amount}</span>
//                 </div>
//                 <div className="flex justify-between mt-2 text-sm text-gray-500">
//                   <div className="flex items-center">
//                     <Users size={14} className="mr-1" />
//                     <span>{group.members} members</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Calendar size={14} className="mr-1" />
//                     <span>{group.nextCollection}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Upcoming Payments */}
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold text-gray-800">Upcoming Payments</h2>
//           <span className="text-teal-500 text-sm cursor-pointer">View All</span>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {[
//                 { group: 'Family Support', amount: '$100.00', dueDate: 'Mar 15, 2025', status: 'upcoming' },
//                 { group: 'Business Investment', amount: '$250.00', dueDate: 'Mar 20, 2025', status: 'upcoming' },
//                 { group: 'Emergency Fund', amount: '$150.00', dueDate: 'Mar 25, 2025', status: 'overdue' }
//               ].map((payment, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">{payment.group}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{payment.amount}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">{payment.dueDate}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       payment.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' : 
//                       payment.status === 'overdue' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
//                     }`}>
//                       {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-lg text-sm">
//                       Pay Now
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };








// // Groups component stub
// const Groups = () => (
//   <div className="p-8">
//     <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Groups</h1>
//     <div className="flex justify-between items-center mb-6">
//       <div className="relative">
//         <input 
//           type="text" 
//           placeholder="Search groups..." 
//           className="px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-64"
//         />
//         <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//       </div>
//       <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center">
//         <PlusCircle size={18} className="mr-2" /> Create New Group
//       </button>
//     </div>
    
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {[
//         { name: 'Family Support', members: 15, balance: '$1,500', nextCollection: 'Mar 15, 2025' },
//         { name: 'Business Investment', members: 8, balance: '$2,000', nextCollection: 'Mar 20, 2025' },
//         { name: 'Emergency Fund', members: 12, balance: '$3,600', nextCollection: 'Mar 25, 2025' },
//         { name: 'Education Fund', members: 6, balance: '$1,200', nextCollection: 'Mar 30, 2025' },
//         { name: 'Healthcare Support', members: 10, balance: '$2,500', nextCollection: 'Apr 5, 2025' },
//         { name: 'Travel Club', members: 8, balance: '$1,600', nextCollection: 'Apr 10, 2025' }
//       ].map((group, index) => (
//         <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">{group.name}</h3>
//           <div className="flex justify-between mb-4">
//             <div>
//               <p className="text-sm text-gray-500">Members</p>
//               <p className="font-medium">{group.members}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Balance</p>
//               <p className="font-medium text-teal-600">{group.balance}</p>
//             </div>
//           </div>
//           <div className="mb-4">
//             <p className="text-sm text-gray-500">Next Collection</p>
//             <p className="font-medium">{group.nextCollection}</p>
//           </div>
//           <div className="flex justify-between">
//             <button className="bg-teal-50 text-teal-600 hover:bg-teal-100 px-3 py-1 rounded-lg text-sm">
//               View Details
//             </button>
//             <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-lg text-sm">
//               Contribute
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Stub components for other sections
// const AboutYou = () => (
//   <div className="p-8">
//     <h1 className="text-3xl font-bold text-gray-800 mb-6">About You</h1>
//     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//       <form>
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//             <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="John" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//             <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Doe" />
//           </div>
//         </div>
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//           <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="john.doe@example.com" />
//         </div>
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//           <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="+1 (555) 123-4567" />
//         </div>
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//           <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-2" placeholder="Street Address" />
//           <div className="grid grid-cols-3 gap-4">
//             <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="City" />
//             <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="State/Province" />
//             <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Postal Code" />
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg">Save Information</button>
//         </div>
//       </form>
//     </div>
//   </div>
// );

// const Income = () => (
//   <div className="p-8">
//     <h1 className="text-3xl font-bold text-gray-800 mb-6">Income Information</h1>
//     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//       <form>
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Employment Status</label>
//           <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
//             <option>Employed</option>
//             <option>Self-Employed</option>
//             <option>Unemployed</option>
//             <option>Student</option>
//             <option>Retired</option>
//           </select>
//         </div>
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <span className="text-gray-500">$</span>
//             </div>
//             <input type="text" className="w-full pl-8 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="0.00" />
//           </div>
//         </div>
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Income Source</label>
//           <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Employer name or business" />
//         </div>
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Years at Current Income Source</label>
//           <input type="number" min="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Years" />
//         </div>
//         <div className="flex justify-end">
//           <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg">Save Information</button>
//         </div>
//       </form>
//     </div>
//   </div>
// );

// // Survey component implementation
// const Survey = () => (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Financial Survey</h1>
      
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
//         <p className="text-gray-600 mb-4">
//           This survey helps us understand your financial habits and goals better. 
//           Your responses will help us customize your Njangi experience and suggest appropriate groups.
//         </p>
        
//         <div className="flex items-center mb-4">
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
//           </div>
//           <span className="ml-2 text-sm text-gray-500">3 of 10 questions</span>
//         </div>
//       </div>
      
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//         <form>
//           <div className="mb-8">
//             <h2 className="text-lg font-medium text-gray-800 mb-3">1. What are your primary financial goals?</h2>
//             <p className="text-sm text-gray-500 mb-4">Select all that apply</p>
            
//             <div className="space-y-2">
//               <label className="flex items-center">
//                 <input type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
//                 <span className="ml-2 text-gray-700">Saving for emergencies</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
//                 <span className="ml-2 text-gray-700">Building business capital</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
//                 <span className="ml-2 text-gray-700">Education funding</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
//                 <span className="ml-2 text-gray-700">Home purchase or improvement</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
//                 <span className="ml-2 text-gray-700">Retirement planning</span>
//               </label>
//             </div>
//           </div>
          
//           <div className="mb-8">
//             <h2 className="text-lg font-medium text-gray-800 mb-3">2. How much can you comfortably save monthly?</h2>
            
//             <div className="space-y-2">
//               <label className="flex items-center">
//                 <input type="radio" name="savings" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
//                 <span className="ml-2 text-gray-700">Less than $50</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="radio" name="savings" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
//                 <span className="ml-2 text-gray-700">$50 - $100</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="radio" name="savings" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
//                 <span className="ml-2 text-gray-700">$100 - $250</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="radio" name="savings" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
//                 <span className="ml-2 text-gray-700">$250 - $500</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="radio" name="savings" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
//                 <span className="ml-2 text-gray-700">More than $500</span>
//               </label>
//             </div>
//           </div>
          
//           <div className="mb-8">
//             <h2 className="text-lg font-medium text-gray-800 mb-3">3. What is your previous experience with saving groups?</h2>
            
//             <div className="space-y-2">
//               <label className="flex items-center">
//                 <input type="radio" name="experience" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
//                 <span className="ml-2 text-gray-700">No previous experience</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="radio" name="experience" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
//                 <span className="ml-2 text-gray-700">Participated in informal family/friend groups</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="radio" name="experience" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
//                 <span className="ml-2 text-gray-700">Participated in community savings groups</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="radio" name="experience" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
//                 <span className="ml-2 text-gray-700">Managed or organized savings groups</span>
//               </label>
//             </div>
//           </div>
          
//           <div className="flex justify-between">
//             <button type="button" className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 disabled:opacity-50" disabled>
//               Previous
//             </button>
//             <button type="button" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg">
//               Next
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
  
//   // Transactions component implementation
//   const Transactions = () => (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Transactions History</h1>
      
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="flex items-center space-x-4 mb-4 md:mb-0">
//             <div className="relative">
//               <input 
//                 type="text" 
//                 placeholder="Search transactions" 
//                 className="px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-64"
//               />
//               <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//             </div>
            
//             <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
//               <option>All Types</option>
//               <option>Contributions</option>
//               <option>Withdrawals</option>
//               <option>Received</option>
//             </select>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <button className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
//               <Calendar size={16} />
//               <span>Filter by Date</span>
//             </button>
            
//             <button className="flex items-center space-x-1 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
//               <ArrowRight size={16} />
//               <span>Export</span>
//             </button>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {[
//                 { date: 'Mar 09, 2025', type: 'Contribution', group: 'Family Support', amount: '+$100.00', status: 'Completed', reference: 'TRX-67890' },
//                 { date: 'Mar 08, 2025', type: 'Withdrawal', group: 'Emergency Fund', amount: '-$250.00', status: 'Completed', reference: 'TRX-67891' },
//                 { date: 'Mar 07, 2025', type: 'Received', group: 'Business Investment', amount: '+$520.00', status: 'Completed', reference: 'TRX-67892' },
//                 { date: 'Mar 05, 2025', type: 'Contribution', group: 'Education Fund', amount: '+$80.00', status: 'Completed', reference: 'TRX-67893' },
//                 { date: 'Mar 03, 2025', type: 'Contribution', group: 'Family Support', amount: '+$100.00', status: 'Completed', reference: 'TRX-67894' },
//                 { date: 'Feb 28, 2025', type: 'Withdrawal', group: 'Business Investment', amount: '-$300.00', status: 'Completed', reference: 'TRX-67895' },
//                 { date: 'Feb 25, 2025', type: 'Received', group: 'Emergency Fund', amount: '+$400.00', status: 'Completed', reference: 'TRX-67896' }
//               ].map((transaction, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       transaction.type === 'Contribution' ? 'bg-green-100 text-green-800' :
//                       transaction.type === 'Withdrawal' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
//                     }`}>
//                       {transaction.type}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.group}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <span className={transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
//                       {transaction.amount}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.status}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.reference}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button className="text-teal-600 hover:text-teal-800 font-medium">View Details</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//         <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//           <div className="flex-1 flex justify-between sm:hidden">
//             <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//               Previous
//             </button>
//             <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//               Next
//             </button>
//           </div>
//           <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//             <div>
//               <p className="text-sm text-gray-700">
//                 Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">23</span> results
//               </p>
//             </div>
//             <div>
//               <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                 <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                   <span className="sr-only">Previous</span>
//                   <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//                 <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                   1
//                 </button>
//                 <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-teal-50 text-sm font-medium text-teal-600 hover:bg-teal-100">
//                   2
//                 </button>
//                 <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                   3
//                 </button>
//                 <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
//                   ...
//                 </span>
//                 <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                   8
//                 </button>
//                 <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                   <span className="sr-only">Next</span>
//                   <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </button> 
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
 