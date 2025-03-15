
import {  DollarSign, IdCard, QuoteIcon, User } from 'lucide-react';
import { useState, useRef } from 'react';

const Profile = ({ setActiveComponent }) => {

  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Ottia Praise",
    userName: "PRINZO",
    email: "ottiapraise50@gmail.com",
    phone: "+237 674 417 261",
    location: "BUea, Cameroon",
    bio: "FullStack developer with 2 years of experience.",
    status: "Active",
    notifications: true,
    twoFactorAuth: true,
    password: "Ottia12345",
    talent: "Singing"
    
  }); 

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData({
      ...profileData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSave = () => {
    console.log("Saving profile data:", profileData);
    setIsEditMode(false);
  };




   const fullName = useRef();
  
  const onMouseEnterFullName = () => {
    fullName.current.focus();
  }

  const onMouseLeaveFullName = () => {
    fullName.current.blur();
  }


  const userName = useRef();

  const onMouseEnterUserName = () => {
    userName.current.focus();
  }

  const onMouseLeaveUserName = () => {
    userName.current.blur();
  }



  const emailReg = useRef();

  const onMouseEnterEmail = () => {
    emailReg.current.focus();
  }

  const onMouseLeaveEmail = () => {
    emailReg.current.blur();
  }


  const phoneNumberReg = useRef();
  
  const onMouseEnterPhoneNumber = ()  => {
    phoneNumberReg.current.focus();
  }

  const onMouseLeavePhoneNumber = () => {
    phoneNumberReg.current.blur();
  }


  const locationReg = useRef();

  const onMouseEnterLocation = () => {
    locationReg.current.focus();
  }

  const onMouseLLeaveLocation = () => {
    locationReg.current.blur();
  }


  const passwordReg =  useRef();

  const onMouseENterPassword = () => {
    passwordReg.current.focus();
  }

  const onMouseLeavePassword = () => {
    passwordReg.current.blur();
  }


  const aboutMeReg = useRef();

  const onMOuseEnterAboutMe = () => {
    aboutMeReg.current.focus();
  }

  const onMouseLeaveAboutMe = () => {
    aboutMeReg.current.blur();
  }



  const specialTalent = useRef();

  const onMouseEnterSpecialTalent = () => {
    specialTalent.current.focus();
  }

  const onMouseLeaveSpecialTalent = () => {
    specialTalent.current.blur();
  }



  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* Profile User Info */}
      <div className="grid grid-cols-4 gap-6 mb-8 mt-10">
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={() => setActiveComponent('about-you')} >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-sm font-medium">About User</h2>
            <div className="bg-teal-100 p-2 rounded-lg">
              <User className="text-teal-500" size={20} /> 
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">About You</p>
          <div className="flex items-center text-sm mt-2 text-green-500">
            <span>Edit and View</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={() => {setActiveComponent('income')}} > 
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-sm font-medium">User Income</h2>
            <div className="bg-purple-100 p-2 rounded-lg">
              <DollarSign className="text-orange-500" size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">Income</p>
          <div className="flex items-center text-sm mt-2 text-green-500">
            <span>Edit and View</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={() => {setActiveComponent('identity')}}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-sm font-medium">User Identity</h2>
            <div className="bg-blue-100 p-2 rounded-lg">
              <IdCard className="text-purple-500" size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">Identity</p>
          <div className="flex items-center text-sm mt-2 text-green-500">
            <span>Edit and View</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={() => {setActiveComponent('identity')}}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-sm font-medium">Survey Answers</h2>
            <div className="bg-blue-100 p-2 rounded-lg">
              <QuoteIcon className="text-blue-500" size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-800">Survey</p> 
          <div className="flex items-center text-sm mt-2 text-green-500">
            <span>Edit and View</span>
          </div>
        </div>
        
        
      </div>
  

  {/* Profile Management  */} 

      <div className="max-w-6xl mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Profile Management</h1> 
          <button 
            onClick={() => isEditMode ? handleSave() : setIsEditMode(true)}
            className={`px-4 py-2 rounded-lg font-medium ${
              isEditMode 
                ? "bg-green-600 hover:bg-green-700 text-white" 
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isEditMode ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          {/* Left column - Profile overview */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-2/5 ease-in-out duration-300 hover:shadow-lg ">
            <div className="flex flex-col items-center text-center">
              <div className="w-auto h-auto my-3 rounded-full border border-solid border-teal-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
                <img src="/cute.jpg" alt="Profile Image" className='w-60 h-60 rounded-full object-cover ' />
              </div>
              
              {isEditMode ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  ref={fullName}
                  onMouseLeave={onMouseLeaveFullName}
                  onMouseEnter={onMouseEnterFullName} 
                  onChange={handleChange}
                  className="text-xl font-semibold text-gray-800 focus:border-teal-500 focus:outline-teal-500 ease-in-out duration-300 border-b border-gray-300 mb-1 mt-3 text-center w-full py-1 "
                />
              ) : (
                <h2 className="text-xl font-semibold text-gray-800">{profileData.name}</h2>
              )}
              
              
              <div className="w-full border-t border-gray-200 my-4"></div>
              
              <div className="w-full text-left space-y-2 leading-8">
                

                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {profileData.status}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">User Name:</span>
                  {isEditMode ? (
                    <input
                      type="text"
                      name="userName"
                      value={profileData.userName}
                      onChange={handleChange}
                      ref={userName}
                      onMouseEnter={onMouseEnterUserName}
                      onMouseLeave={onMouseLeaveUserName}
                      className="text-gray-800 border-b border-gray-300 w-3/5 py-1 focus:border-teal-500 focus:outline-teal-500 ease-in-out duration-300 px-2"
                    />
                  ) : (
                    <span className="text-gray-800">{profileData.userName}</span>
                  )}
                </div>
                

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Email:</span>
                  {isEditMode ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="text-gray-800 border-b border-gray-300 w-3/5 py-1 focus:border-teal-500 focus:outline-teal-500 ease-in-out duration-300 px-2"
                      ref={emailReg}
                      onMouseEnter={onMouseEnterEmail}
                      onMouseLeave={onMouseLeaveEmail}
                    />
                  ) : (
                    <span className="text-gray-800">{profileData.email}</span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Phone:</span>
                  {isEditMode ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      ref={phoneNumberReg}
                      onMouseEnter={onMouseEnterPhoneNumber}
                      onMouseLeave={onMouseLeavePhoneNumber}
                      onChange={handleChange}
                      className="text-gray-800 border-b border-gray-300 w-3/5 py-1 focus:border-teal-500 focus:outline-teal-500 ease-in-out duration-300 px-2 "
                    />
                  ) : (
                    <span className="text-gray-800">{profileData.phone}</span>
                  )}
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  {isEditMode ? (
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      ref={locationReg}
                      onChange={handleChange}
                      onMouseEnter={onMouseEnterLocation}
                      onMouseLeave={onMouseLLeaveLocation}
                      className="text-gray-800 border-b border-gray-300 py-1 focus:border-teal-500 focus:outline-teal-500 ease-in-out duration-300 px-2"
                    />
                  ) : (
                    <span className="text-gray-800">{profileData.location}</span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Password:</span>
                  {isEditMode ? (
                    <input
                      type="text"
                      name="userName"
                      value={profileData.password}
                      onChange={handleChange}
                      ref={passwordReg}
                      onMouseEnter={onMouseENterPassword}
                      onMouseLeave={onMouseLeavePassword}
                      className="text-gray-800 border-b border-gray-300 w-3/5 py-1 focus:border-teal-500 focus:outline-teal-500 ease-in-out duration-300 px-2 "
                    />
                  ) : (
                    <span className="text-gray-800">{profileData.password}</span>
                  )}
                </div>

               
              </div>
            </div>
          </div>
          


          {/* Right  - Bio and Others */}
          <div className="w-3/5">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6 ease-in-out duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>
              
              {isEditMode ? (
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  rows="4"
                  ref={aboutMeReg}
                  onMouseEnter={onMOuseEnterAboutMe}
                  onMouseLeave={onMouseLeaveAboutMe}
                  className="w-full border rounded-lg p-2 text-gray-700 py-1 focus:border-teal-500 focus:outline-teal-500 ease-in-out duration-300 px-2"
                ></textarea>
              ) : (
                <p className="text-gray-700">{profileData.bio}</p>
              )}
              
             
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6 ease-in-out duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Special Talent</h2>
              
              {isEditMode ? (
                <textarea
                  name="bio"
                  value={profileData.talent}
                  onChange={handleChange}
                  rows="4"
                  ref={specialTalent}
                  onMouseEnter={onMouseEnterSpecialTalent}
                  onMouseLeave={onMouseLeaveSpecialTalent}
                  className="w-full border rounded-lg p-2 text-gray-700 py-1 focus:border-teal-500 focus:outline-teal-500 ease-in-out duration-300 px-2"
                ></textarea>
              ) : (
                <p className="text-gray-700">{profileData.talent}</p>
              )}
               
            </div>
            
            
            {/* Account Settings */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 ease-in-out duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">Email Notifications</h3>
                    <p className="text-gray-500 text-sm">Receive email updates about your account activity</p>
                  </div> 
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      name="notifications"
                      checked={profileData.notifications}
                      onChange={handleChange}
                      disabled={!isEditMode}
                    />
                    <div className={`w-11 h-6 ${isEditMode ? 'bg-gray-200' : 'bg-gray-200 opacity-70'} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">Two-Factor Authentication</h3>
                    <p className="text-gray-500 text-sm">Add an extra layer of security to your account</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      name="twoFactorAuth"
                      checked={profileData.twoFactorAuth}
                      onChange={handleChange}
                      disabled={!isEditMode}
                    />
                    <div className={`w-11 h-6 ${isEditMode ? 'bg-gray-200' : 'bg-gray-200 opacity-70'} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div>
                  </label>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <button 
                    className="text-red-600 hover:text-red-800 text-sm font-medium hover:cursor-pointer duration-300 ease-in-out "
                    disabled={!isEditMode}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>



       

    </div>
  );
};

export default Profile;