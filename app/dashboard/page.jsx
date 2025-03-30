
import React, { Suspense } from 'react';

import DashBoardContent from '../components/dashboardContent'

import globalStyle from '../globals.css' 


const DashBoard = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">
      <div id="fountainG">
        <div id="fountainG_1" class="fountainG"></div>
        <div id="fountainG_2" class="fountainG"></div>
        <div id="fountainG_3" class="fountainG"></div>
        <div id="fountainG_4" class="fountainG"></div>
        <div id="fountainG_5" class="fountainG"></div>
        <div id="fountainG_6" class="fountainG"></div>
        <div id="fountainG_7" class="fountainG"></div>
        <div id="fountainG_8" class="fountainG"></div>
      </div>
    </div>}>
      <DashBoardContent />
    </Suspense>
  );
};

export default DashBoard;
