
import React from 'react';

import globalStyle from '../globals.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { faGear } from '@fortawesome/free-solid-svg-icons';


import { 
  Search, 
  Bell, 
  DollarSign, 
  Users, 
  CreditCard, 
  Clipboard, 
  PlusCircle, 
  LogOut, 
  ArrowRight, 
  Calendar 
} from 'lucide-react';  

const DashboardMain = () => {
  return (

    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div  className='pt-4'>
          <h1 className="text-4xl font-bold text-gray-800">Welcome Back!!!,
            <span className='text-[lightseagreen] text-[42px] pl-1'>Ottia Praise</span>
          </h1>
        </div>

        <div className="flex items-center space-x-5">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 pl-10 w-96 rounded-lg border border-gray-300 duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>

          {/* Notification  */}
          <div className="relative">
            <Bell className="text-gray-600 cursor-pointer" /> 
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-extrabold">3</span>
          </div>

          {/* User Avatar  */}
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
            OP
          </div>

          {/* User SEttings  */}
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
            <FontAwesomeIcon icon={faGear} className='h-6 w-6' /> 
          </div>
        </div>
      </div>
  
      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-sm font-medium">Total Balance</h2>
            <div className="bg-teal-100 p-2 rounded-lg">
              <DollarSign className="text-teal-500" size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">$2,150.00</p>
          <div className="flex items-center text-sm mt-2 text-green-500">
            <span>+15% from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-sm font-medium">Active Groups</h2>
            <div className="bg-purple-100 p-2 rounded-lg">
              <Users className="text-purple-500" size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">6</p>
          <div className="flex items-center text-sm mt-2 text-green-500">
            <span>+2 new this month</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-sm font-medium">Contributions</h2>
            <div className="bg-blue-100 p-2 rounded-lg">
              <CreditCard className="text-blue-500" size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">$850.00</p>
          <div className="flex items-center text-sm mt-2 text-red-500">
            <span>-5% from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-sm font-medium">Profile Completion</h2>
            <div className="bg-orange-100 p-2 rounded-lg">
              <Clipboard className="text-orange-500" size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">75%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
  
      {/* Recent Activity and Groups */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
            <span className="text-teal-500 text-sm cursor-pointer">View All</span>
          </div>
          <div className="space-y-4">
            {[
              { type: 'Contribution', group: 'Family Support', amount: '+$100.00', date: 'Today, 2:30 PM', status: 'completed' },
              { type: 'Withdrawal', group: 'Emergency Fund', amount: '-$250.00', date: 'Yesterday', status: 'completed' },
              { type: 'Received', group: 'Business Investment', amount: '+$520.00', date: 'Mar 07, 2025', status: 'completed' },
              { type: 'Contribution', group: 'Education Fund', amount: '+$80.00', date: 'Mar 05, 2025', status: 'pending' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'Contribution' ? 'bg-green-100 text-green-500' :
                    activity.type === 'Withdrawal' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'
                  }`}>
                    {activity.type === 'Contribution' ? <PlusCircle size={18} /> : 
                     activity.type === 'Withdrawal' ? <LogOut size={18} /> : <ArrowRight size={18} />}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">{activity.type}</p>
                    <p className="text-xs text-gray-500">{activity.group}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    activity.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>{activity.amount}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Your Groups</h2>
            <div className="flex space-x-2 items-center">
              <button className="bg-teal-500 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                <PlusCircle size={16} className="mr-1" /> New Group
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Family Support', members: 15, nextCollection: 'Mar 15, 2025', amount: '$100/month' },
              { name: 'Business Investment', members: 8, nextCollection: 'Mar 20, 2025', amount: '$250/month' },
              { name: 'Emergency Fund', members: 12, nextCollection: 'Mar 25, 2025', amount: '$150/month' },
              { name: 'Education Fund', members: 6, nextCollection: 'Mar 30, 2025', amount: '$80/month' }
            ].map((group, index) => (
              <div key={index} className="p-3 hover:bg-gray-50 rounded-lg transition-all border border-gray-100">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">{group.name}</h3>
                  <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">{group.amount}</span>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    <span>{group.members} members</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{group.nextCollection}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  
      {/* Upcoming Payments */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Upcoming Payments</h2>
          <span className="text-teal-500 text-sm cursor-pointer">View All</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { group: 'Family Support', amount: '$100.00', dueDate: 'Mar 15, 2025', status: 'upcoming' },
                { group: 'Business Investment', amount: '$250.00', dueDate: 'Mar 20, 2025', status: 'upcoming' },
                { group: 'Emergency Fund', amount: '$150.00', dueDate: 'Mar 25, 2025', status: 'overdue' }
              ].map((payment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{payment.group}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{payment.dueDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      payment.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' : 
                      payment.status === 'overdue' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-lg text-sm">
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