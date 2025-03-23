


import React, { Suspense } from 'react';

import DashBoardContent from '../components/dashboardContent'


const DashBoard = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <DashBoardContent />
    </Suspense>
  );
};

export default DashBoard;
